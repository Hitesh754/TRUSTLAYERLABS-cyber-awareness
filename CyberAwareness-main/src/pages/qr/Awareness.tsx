import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQrPage } from './qrUtils';
import './css/qr.css';

export default function Awareness() {
  const { t } = useTranslation();
  useQrPage(['./js/scams.js', './js/qr.js'], 'QR Awareness Tips | CyberShield');

  return (
    <div className="qr-body">
      <div className="qr-scanline"></div>
      <nav className="qr-nav">
        <div className="qr-shell qr-nav-inner">
          <Link to="/qr" className="qr-brand">
            <span className="qr-brand-mark">QR</span>
            <span>QR Threat Lab</span>
          </Link>
          <div className="qr-nav-links">
            <Link to="/" className="dashboard-link">Back to Dashboard</Link>
            <Link to="/qr">Dashboard</Link>
            <Link to="/qr/scanner">Scanner</Link>
            <Link to="/qr/challenge">Challenge</Link>
            <Link to="/qr/case-study">Case Study</Link>
            <Link to="/qr/awareness" className="active">Awareness</Link>
            <Link to="/qr/report">Report</Link>
          </div>
        </div>
      </nav>
      <main className="qr-shell">
        <section className="qr-page-intro">
          <div className="qr-kicker">{t('qr.kicker')}</div>
          <h1>{t('qr.awarenessPage.title')}</h1>
          <p className="qr-copy">{t('qr.awarenessPage.desc')}</p>
        </section>
        <section className="qr-grid qr-section">
          <article className="qr-card">
            <span className="qr-chip red">UPI rule</span>
            <h3>{t('qr.awarenessPage.card1Title')}</h3>
            <p>{t('qr.awarenessPage.card1Desc')}</p>
          </article>
          <article className="qr-card">
            <span className="qr-chip">domain check</span>
            <h3>{t('qr.awarenessPage.card2Title')}</h3>
            <p>{t('qr.awarenessPage.card2Desc')}</p>
          </article>
          <article className="qr-card">
            <span className="qr-chip red">physical tampering</span>
            <h3>{t('qr.awarenessPage.card3Title')}</h3>
            <p>{t('qr.awarenessPage.card3Desc')}</p>
          </article>
        </section>
        <section className="qr-grid two qr-section">
          <article className="qr-card">
            <h2>{t('qr.awarenessPage.section2Title')}</h2>
            <ul className="qr-list">
              <li>{t('qr.awarenessPage.tip1')}</li>
              <li>{t('qr.awarenessPage.tip2')}</li>
              <li>{t('qr.awarenessPage.tip3')}</li>
              <li>{t('qr.awarenessPage.tip4')}</li>
            </ul>
          </article>
          <article className="qr-card">
            <h2>{t('qr.awarenessPage.section3Title')}</h2>
            <ul className="qr-list">
              <li>{t('qr.awarenessPage.law1')}</li>
              <li>{t('qr.awarenessPage.law2')}</li>
              <li>{t('qr.awarenessPage.law3')}</li>
              <li data-law-tip></li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}
