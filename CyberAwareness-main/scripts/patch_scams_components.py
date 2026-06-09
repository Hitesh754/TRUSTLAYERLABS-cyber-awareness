import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCAM_CARD = os.path.join(BASE, "src", "components", "scam-library", "ScamCard.tsx")
SCAM_DETAIL = os.path.join(BASE, "src", "components", "scam-library", "ScamDetail.tsx")

def patch_scam_card():
    if not os.path.exists(SCAM_CARD):
        print(f"Error: {SCAM_CARD} not found!")
        return

    with open(SCAM_CARD, "r", encoding="utf-8") as f:
        content = f.read()

    if "useTranslation" in content:
        print("Info: ScamCard.tsx is already patched, skipping.")
        return

    # Replace scam.name and scam.description
    content = content.replace("{scam.name}", "{t(`scams.${scam.id}.name`, scam.name)}")
    content = content.replace("{scam.description}", "{t(`scams.${scam.id}.description`, scam.description)}")

    with open(SCAM_CARD, "w", encoding="utf-8") as f:
        f.write(content)
    print("Success: Patched ScamCard.tsx")

def patch_scam_detail():
    if not os.path.exists(SCAM_DETAIL):
        print(f"Error: {SCAM_DETAIL} not found!")
        return

    with open(SCAM_DETAIL, "r", encoding="utf-8") as f:
        content = f.read()

    if "t('common.backToLibrary'" in content or "t(\"common.backToLibrary\"" in content:
        print("Info: ScamDetail.tsx is already patched, skipping.")
        return

    # Add import useTranslation
    if "import { useTranslation }" not in content:
        content = content.replace(
            "import { Link } from 'react-router-dom';",
            "import { Link } from 'react-router-dom';\nimport { useTranslation } from 'react-i18next';"
        )

    # Add const { t } = useTranslation() inside export default function ScamDetail
    target_func = "export default function ScamDetail({ scam }: ScamDetailProps) {"
    if "const { t } = useTranslation();" not in content:
        content = content.replace(
            target_func,
            f"{target_func}\n  const {{ t }} = useTranslation();"
        )

    # Replace strings
    content = content.replace("Back to Library", "{t('common.backToLibrary', 'Back to Library')}")
    content = content.replace("{scam.name}", "{t(`scams.${scam.id}.name`, scam.name)}")
    content = content.replace("{scam.severity} Severity", "{t(`scamLibraryExt.severity.${scam.severity}`, `${scam.severity} Severity`)}")
    content = content.replace("{category.replace('-', ' ')}", "{t(`scamLibraryExt.cat.${category}`, category.replace('-', ' '))}")
    content = content.replace("{scam.description}", "{t(`scams.${scam.id}.description`, scam.description)}")
    content = content.replace("Common Indicators", "{t('scamLibrary.commonIndicators', 'Common Indicators')}")
    content = content.replace("{indicator}", "{t(`scams.${scam.id}.indicators.${index}`, indicator)}")
    content = content.replace("Prevention Tips", "{t('scamLibrary.preventionTips', 'Prevention Tips')}")
    content = content.replace("{tip}", "{t(`scams.${scam.id}.preventionTips.${index}`, tip)}")
    content = content.replace("Real-World Examples", "{t('scamLibrary.realWorldExamples', 'Real-World Examples')}")
    content = content.replace('"{example}"', '"{t(`scams.${scam.id}.examples.${index}`, example)}"')
    content = content.replace("Victim of this scam?", "{t('scamLibrary.victimTitle', 'Victim of this scam?')}")
    content = content.replace("Report immediately to help protect others.", "{t('scamLibrary.victimDesc', 'Report immediately to help protect others.')}")
    content = content.replace("📞 Call 1930", "{t('common.callHelpline', '📞 Call 1930')}")
    content = content.replace("Report Online", "{t('common.reportOnline', 'Report Online')}")

    with open(SCAM_DETAIL, "w", encoding="utf-8") as f:
        f.write(content)
    print("Success: Patched ScamDetail.tsx")

if __name__ == "__main__":
    patch_scam_card()
    patch_scam_detail()
