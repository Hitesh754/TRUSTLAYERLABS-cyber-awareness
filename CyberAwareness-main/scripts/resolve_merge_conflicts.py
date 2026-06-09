import os
import re
import json

BASE = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
SRC = os.path.join(BASE, "src")
EN_JSON = os.path.join(SRC, "i18n", "locales", "en", "translation.json")

def load_translation_data():
    with open(EN_JSON, "r", encoding="utf-8") as f:
        return json.load(f)

def get_translation(key_path, data):
    parts = key_path.split('.')
    curr = data
    for p in parts:
        if isinstance(curr, dict) and p in curr:
            curr = curr[p]
        else:
            return None
    return curr if isinstance(curr, str) else None

def resolve_block(our_side, their_side, trans_data):
    # Find all translation keys in our_side
    # e.g., t('key') or t("key") or t('key', 'default')
    key_pattern = re.compile(r"t\(\s*['\"]([^'\"]+)['\"]\s*(?:,\s*(?:'[^']*'|\"[^\"]*\"))?\s*\)")
    keys = key_pattern.findall(our_side)
    
    resolved = their_side
    for key in keys:
        val = get_translation(key, trans_data)
        if not val:
            # Try splitting key (e.g. if key is dynamic, or check fallback)
            continue
        
        # Determine if our_side uses curly braces {t('key')} or just t('key')
        has_braces = f"{{t('{key}')}}" in our_side or f"{{t(\"{key}\")}}" in our_side or f"{{t('{key}'," in our_side
        
        # Replace occurrences in their_side
        if has_braces:
            # Case 1: Quoted string e.g., "VAL" or 'VAL'
            resolved = resolved.replace(f'"{val}"', f"{{t('{key}')}}")
            resolved = resolved.replace(f"'{val}'", f"{{t('{key}')}}")
            # Case 2: Plain text context e.g., >VAL<
            resolved = resolved.replace(f">{val}<", f">{{t('{key}')}}<")
            # Case 3: Plain text context with spaces
            resolved = resolved.replace(f"> {val} <", f"> {{t('{key}')}} <")
            # Case 4: Raw value if not matched by above
            resolved = resolved.replace(val, f"{{t('{key}')}}")
        else:
            # Just plain t('key') inside string or template
            resolved = resolved.replace(f'"{val}"', f"t('{key}')")
            resolved = resolved.replace(f"'{val}'", f"t('{key}')")
            resolved = resolved.replace(val, f"t('{key}')")
            
    return resolved

def resolve_file(file_path, trans_data):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    conflict_pattern = re.compile(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+', re.DOTALL)
    matches = list(conflict_pattern.finditer(content))
    
    if not matches:
        return False
        
    print(f"Resolving conflicts in {os.path.relpath(file_path, BASE)} ({len(matches)} blocks)...")
    
    new_content = ""
    last_pos = 0
    for match in matches:
        start, end = match.span()
        our_side = match.group(1)
        their_side = match.group(2)
        
        resolved_block = resolve_block(our_side, their_side, trans_data)
        
        new_content += content[last_pos:start]
        new_content += resolved_block
        last_pos = end
        
    new_content += content[last_pos:]
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    return True

def main():
    trans_data = load_translation_data()
    
    conflicted_files = []
    for root, dirs, files in os.walk(SRC):
        for file in files:
            if file.endswith((".tsx", ".ts")):
                path = os.path.join(root, file)
                try:
                    with open(path, "r", encoding="utf-8") as f:
                        if "<<<<<<< HEAD" in f.read():
                            conflicted_files.append(path)
                except Exception:
                    pass
                    
    print(f"Found {len(conflicted_files)} files with conflict markers.")
    
    resolved_count = 0
    for path in conflicted_files:
        if resolve_file(path, trans_data):
            resolved_count += 1
            
    print(f"\nSuccessfully resolved conflict markers in {resolved_count}/{len(conflicted_files)} files.")

if __name__ == "__main__":
    main()
