import json
import os
import re

def run():
    langs = ['en', 'hi', 'ta', 'te', 'gu', 'ur', 'mr', 'bn', 'sd', 'ml']
    base_dir = "c:\\Users\\Hitesh\\Downloads\\TRUSTLAYERLABS-cyber-awareness\\CyberAwareness-main\\src\\i18n\\locales"
    
    for lang in langs:
        path = os.path.join(base_dir, lang, "translation.json")
        if not os.path.exists(path):
            print(f"Skipping {lang} as path does not exist.")
            continue
            
        with open(path, "r", encoding="utf-8") as f:
            data = json.load(f)
            
        if "footer" in data and "copyright" in data["footer"]:
            orig = data["footer"]["copyright"]
            fixed = re.sub(r'\{+[^}]*\}+', '{{year}}', orig)
            data["footer"]["copyright"] = fixed
            
        with open(path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
            
        print(f"Updated {lang}/translation.json")

if __name__ == "__main__":
    run()
