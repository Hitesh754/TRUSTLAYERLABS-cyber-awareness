import json
import os

def run():
    path = "c:\\Users\\Hitesh\\Downloads\\TRUSTLAYERLABS-cyber-awareness\\CyberAwareness-main\\src\\i18n\\locales\\en\\translation.json"
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
        
    data["footer"] = {
        "copyright": "© {{year}} Cybershield. All rights reserved. Educational use only.",
        "operational": "All systems operational",
        "meity": "MeitY Compliant",
        "certIn": "CERT-In Aligned",
        "helplineTitle": "National Cyber Crime Helpline",
        "helplineSubtitle": "Report cyber crimes 24/7 — Free & Confidential",
        "description": "India's trusted platform for cyber awareness, digital safety education, and legal guidance under the IT Act and IPC/BNS.",
        "secureBanner": "Secure & Encrypted Communication",
        "privacyBanner": "User Privacy Protected — No Data Sold",
        "sections": {
            "platform": {
                "title": "Platform",
                "links": [
                    "Cyber Awareness",
                    "Indian Cyber Law",
                    "Incident Reporting",
                    "Interactive Learning"
                ]
            },
            "resources": {
                "title": "Resources",
                "links": [
                    "IPC/BNS Guide",
                    "IT Act Simplified",
                    "Scam Alert Database",
                    "Victim Support"
                ]
            },
            "legal": {
                "title": "Legal",
                "links": [
                    "Privacy Policy",
                    "Terms of Use",
                    "Disclaimer",
                    "Cookie Policy"
                ]
            }
        }
    }
    
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        
    print("Successfully updated en/translation.json with footer translations!")

if __name__ == "__main__":
    run()
