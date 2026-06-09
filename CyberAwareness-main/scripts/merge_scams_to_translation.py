import os
import json

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCAMS_JSON = os.path.join(BASE, "scams.json")
EN_JSON = os.path.join(BASE, "src", "i18n", "locales", "en", "translation.json")

def main():
    if not os.path.exists(SCAMS_JSON):
        print(f"Error: {SCAMS_JSON} not found!")
        return

    with open(SCAMS_JSON, "r", encoding="utf-8") as f:
        data = json.load(f)

    scams_db = data.get("scamDatabase", [])
    
    # Structure translation keys
    scams_keys = {}
    for scam in scams_db:
        scam_id = scam.get("id")
        if not scam_id:
            continue
        
        scams_keys[scam_id] = {
            "name": scam.get("name", ""),
            "description": scam.get("description", ""),
            "indicators": [ind for ind in scam.get("commonIndicators", [])],
            "preventionTips": [tip for tip in scam.get("preventionTips", [])],
        }
        if "examples" in scam and scam["examples"]:
            scams_keys[scam_id]["examples"] = [ex for ex in scam.get("examples", [])]

    # Load existing en/translation.json
    with open(EN_JSON, "r", encoding="utf-8") as f:
        en_data = json.load(f)

    # Merge under "scams" namespace
    if "scams" not in en_data:
        en_data["scams"] = {}
    
    # We only add missing or replace all
    en_data["scams"].update(scams_keys)

    # Save en/translation.json
    with open(EN_JSON, "w", encoding="utf-8") as f:
        json.dump(en_data, f, ensure_ascii=False, indent=2)
        f.write("\n")

    print(f"✅ Merged {len(scams_keys)} scams into en/translation.json under 'scams' namespace.")

    # Cleanup temp scripts
    try:
        os.remove(SCAMS_JSON)
        os.remove(os.path.join(BASE, "get_scams.cjs"))
        print("✅ Cleaned up temporary JSON and CJS files.")
    except Exception as e:
        print(f"Warning cleanup: {e}")

if __name__ == "__main__":
    main()
