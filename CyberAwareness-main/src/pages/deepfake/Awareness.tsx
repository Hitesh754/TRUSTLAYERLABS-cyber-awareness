import { useState } from "react";
import "./css/deepfake.css";
import { DeepfakeModal, useDeepfakeLab, XpDock } from "./deepfakeReact";
import { useTranslation } from 'react-i18next';

function Awareness() {
  const { t } = useTranslation();
  const { xp, modal, setModal, awardXp } = useDeepfakeLab();
  const [scanning, setScanning] = useState(false);

  const validateReadiness = () => {
    setScanning(false);
    window.setTimeout(() => setScanning(true), 0);
    awardXp(15, "Awareness Operator");
  };

  return (
    <div className="deepfake-shell">
      <main className="df-page">
        <section className="df-section">
          <span className="df-kicker">{t("deepfake.awarenessPage.kicker")}</span>

          <h1>{t("deepfake.awarenessPage.timelineTitle")}</h1>

          <p className="df-lead">{t("deepfake.awarenessPage.timelineDesc")}</p>
        </section>

        <section className="df-grid cols-2">
          <div className="df-panel">
            <div className="timeline">
              <div className="timeline-item">
                <h3>{t("deepfake.awarenessPage.step1Title")}</h3>

                <p>{t("deepfake.awarenessPage.step1Desc")}</p>
              </div>

              <div className="timeline-item">
                <h3>{t("deepfake.awarenessPage.step2Title")}</h3>

                <p>{t("deepfake.awarenessPage.step2Desc")}</p>
              </div>

              <div className="timeline-item">
                <h3>{t("deepfake.awarenessPage.step3Title")}</h3>

                <p>{t("deepfake.awarenessPage.step3Desc")}</p>
              </div>

              <div className="timeline-item">
                <h3>{t("deepfake.awarenessPage.step4Title")}</h3>

                <p>{t("deepfake.awarenessPage.step4Desc")}</p>
              </div>
            </div>
          </div>

          <div
            className={`df-panel scan-ready ${scanning ? "scanning" : ""}`}
            id="readinessScan"
          >
            <span className="df-kicker hot">{t("deepfake.awarenessPage.checklistTitle")}</span>

            <ul className="df-list">
              <li>{t("deepfake.awarenessPage.checklist1")}</li>

              <li>{t("deepfake.awarenessPage.checklist2")}</li>

              <li>{t("deepfake.awarenessPage.checklist3")}</li>

              <li>{t("deepfake.awarenessPage.checklist4")}</li>
            </ul>

            <button
              className="df-button"
              onClick={validateReadiness}
            >
              {t("deepfake.awarenessPage.btnValidate")}
            </button>
          </div>
        </section>
      </main>

      <XpDock xp={xp} />
      <DeepfakeModal modal={modal} onClose={() => setModal(null)} />

      <footer className="df-footer">
        {t("deepfake.awarenessPage.footer")}
      </footer>
    </div>
  );
}

export default Awareness;
