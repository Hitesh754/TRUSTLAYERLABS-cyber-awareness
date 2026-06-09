import os
import re
import subprocess
import sys
import json

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TS_PATH = os.path.join(BASE, "src", "data", "scamDatabase.ts")
TEMP_JS = os.path.join(BASE, "scripts", "temp_scam_db.js")
OUT_JSON = os.path.join(BASE, "scams.json")

def main():
    if not os.path.exists(TS_PATH):
        print(f"Error: {TS_PATH} not found!")
        sys.exit(1)

    print("Reading scamDatabase.ts...")
    with open(TS_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    # Find the start of scamDatabase
    db_start = content.find("export const scamDatabase")
    if db_start == -1:
        print("Error: export const scamDatabase not found!")
        sys.exit(1)

    # Slice from the start of the database
    db_content = content[db_start:]

    # Truncate anything from helper functions (getScamsByCategory onwards)
    helper_start = db_content.find("export const getScamsByCategory")
    if helper_start != -1:
        db_content = db_content[:helper_start].strip()

    # Remove TypeScript type annotation : ScamType[]
    db_content = re.sub(
        r"export const scamDatabase: ScamType\[\] =",
        "const scamDatabase =",
        db_content
    )

    # Fallback just in case it doesn't match the exact regex above
    db_content = db_content.replace("export const scamDatabase: ScamType[] = [", "const scamDatabase = [")
    db_content = db_content.replace("export const scamDatabase = [", "const scamDatabase = [")

    # Add output logic at the bottom
    db_content += "\nconsole.log(JSON.stringify({ scamDatabase: scamDatabase }));\n"

    print("Writing temporary JS file...")
    with open(TEMP_JS, "w", encoding="utf-8") as f:
        f.write(db_content)

    try:
        print("Running temp_scam_db.js with Node...")
        res = subprocess.run(["node", TEMP_JS], capture_output=True, text=True, encoding="utf-8")
        if res.returncode != 0:
            print("Error executing JS code:")
            print(res.stderr)
            sys.exit(1)

        print("Parsing returned JSON...")
        data = json.loads(res.stdout)

        print("Writing to scams.json...")
        with open(OUT_JSON, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

        print(f"Successfully generated {OUT_JSON} with {len(data['scamDatabase'])} scams.")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)
    finally:
        if os.path.exists(TEMP_JS):
            os.remove(TEMP_JS)
            print("Removed temporary JS file.")

if __name__ == "__main__":
    main()
