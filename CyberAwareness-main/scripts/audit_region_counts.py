import pathlib
import re
from typing import Dict, Tuple

top = pathlib.Path('src/data/india')
files = [f for f in list((top / 'states').glob('*.ts')) + list((top / 'union-territories').glob('*.ts')) if f.name not in ('states.ts', 'union-territories.ts')]

RE_CONST_ARRAY = re.compile(r'export const\s+([A-Z0-9_]+)\s*:\s*[^=]+=\s*\[', re.M)
RE_CONST_OBJ = re.compile(r'export const\s+([A-Z0-9_]+)\s*:\s*[^=]+=\s*\{', re.M)
RE_PROP = re.compile(r'\b(cyberPoliceStations|cyberCells|reportingResources|emergencyContacts)\s*:\s*([^,\n]+)')


def extract_block(text: str, start: int) -> Tuple[str, int]:
    if start >= len(text):
        return '', start
    opener = text[start]
    if opener not in '[{':
        return '', start
    depth = 0
    idx = start
    in_string = False
    escape = False
    while idx < len(text):
        ch = text[idx]
        if in_string:
            if escape:
                escape = False
            elif ch == '\\':
                escape = True
            elif ch == '"':
                in_string = False
        else:
            if ch == '"':
                in_string = True
            elif ch == opener:
                depth += 1
            elif ch == ']' and opener == '[':
                depth -= 1
                if depth == 0:
                    return text[start: idx + 1], idx + 1
            elif ch == '}' and opener == '{':
                depth -= 1
                if depth == 0:
                    return text[start: idx + 1], idx + 1
        idx += 1
    return '', start


def count_array_items(block: str) -> int:
    depth = 0
    in_string = False
    escape = False
    item_count = 0
    for ch in block:
        if in_string:
            if escape:
                escape = False
            elif ch == '\\':
                escape = True
            elif ch == '"':
                in_string = False
            continue
        if ch == '"':
            in_string = True
            continue
        if ch == '{':
            depth += 1
            if depth == 1:
                item_count += 1
        elif ch == '}':
            if depth > 0:
                depth -= 1
    return item_count


def count_object_fields(block: str) -> int:
    depth = 0
    in_string = False
    escape = False
    found_key = False
    key_count = 0
    for ch in block:
        if in_string:
            if escape:
                escape = False
            elif ch == '\\':
                escape = True
            elif ch == '"':
                in_string = False
            continue
        if ch == '"':
            in_string = True
            found_key = True
            key_count += 1
            continue
        if ch == '{':
            depth += 1
        elif ch == '}':
            if depth > 0:
                depth -= 1
    return max(0, key_count)


def parse_named_blocks(text: str) -> Dict[str, Tuple[str, str]]:
    blocks: Dict[str, Tuple[str, str]] = {}
    for m in RE_CONST_ARRAY.finditer(text):
        name = m.group(1)
        start = m.end() - 1
        if start < 0 or text[start] != '[':
            continue
        block, _ = extract_block(text, start)
        if block:
            blocks[name] = ('array', block)
    for m in RE_CONST_OBJ.finditer(text):
        name = m.group(1)
        start = m.end() - 1
        if start < 0 or text[start] != '{':
            continue
        block, _ = extract_block(text, start)
        if block:
            blocks[name] = ('object', block)
    return blocks


def resolve_property(text: str, key: str, named_blocks: Dict[str, Tuple[str, str]]):
    last_match = None
    for m in RE_PROP.finditer(text):
        if m.group(1) == key:
            last_match = m
    if not last_match:
        return 'missing', None
    match_value = last_match.group(2).strip()
    if match_value.startswith('['):
        start = text.find('[', last_match.start(2))
        if start == -1:
            return 'unknown', None
        block, _ = extract_block(text, start)
        if not block:
            return 'unknown', None
        return 'array', count_array_items(block)
    if match_value.startswith('{'):
        start = text.find('{', last_match.start(2))
        if start == -1:
            return 'unknown', None
        block, _ = extract_block(text, start)
        if not block:
            return 'unknown', None
        return 'object', count_object_fields(block)
    alias = match_value
    alias = alias.rstrip(',')
    alias = alias.strip()
    if alias in named_blocks:
        block_type, block = named_blocks[alias]
        if block_type == 'array':
            return 'array', count_array_items(block)
        return 'object', count_object_fields(block)
    return 'alias-missing', alias


def profile_name(text: str) -> str:
    match = re.search(r'profile\s*:\s*\{[^}]*name\s*:\s*"([^"]+)"', text, re.S)
    if match:
        return match.group(1)
    return ''


def audit_file(path: pathlib.Path):
    text = path.read_text(encoding='utf-8')
    named_blocks = parse_named_blocks(text)
    keys = ['cyberPoliceStations', 'cyberCells', 'reportingResources', 'emergencyContacts']
    counts = {key: resolve_property(text, key, named_blocks) for key in keys}
    return path.name, profile_name(text) or path.stem, counts


def format_result(filename: str, name: str, counts):
    parts = []
    for key in ['cyberPoliceStations', 'cyberCells', 'reportingResources', 'emergencyContacts']:
        kind, value = counts[key]
        parts.append(f'{key}={kind}:{value}')
    return f'{filename}\t{name}\t' + '\t'.join(parts)

for path in sorted(files, key=lambda p: p.name.lower()):
    filename, name, counts = audit_file(path)
    print(format_result(filename, name, counts))
