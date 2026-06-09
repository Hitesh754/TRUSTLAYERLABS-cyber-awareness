import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQrPage } from './qrUtils';
import './css/qr.css';

export default function QRHome() {
  const { t } = useTranslation();
  useQrPage(['./js/scams.js', './js/qr.js'], 'QR Threat Lab | CyberShield');

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
            <Link to="/" className="dashboard-link">{t('common.backToDashboard')}</Link>
            <Link to="/qr" className="active">{t('common.dashboard')}</Link>
            <Link to="/qr/scanner">{t('navbar.qrScamSafety')}</Link>
            <Link to="/qr/challenge">{t('quiz.card2.title')}</Link>
            <Link to="/qr/case-study">{t('upi.sections.caseStudy.title')}</Link>
            <Link to="/qr/awareness">{t('deepfake.awareness')}</Link>
            <Link to="/qr/report">{t('deepfake.report')}</Link>
          </div>
        </div>
      </nav>

      <main className="qr-shell">
        <section className="qr-hero">
          <div>
            <div className="qr-kicker">{t('qr.kicker')}</div>
            <h1 className="qr-title"><span>{t('qr.title')}</span></h1>
            <p className="qr-copy">{t('qr.desc')}</p>
            <div className="qr-actions">
              <Link to="/qr/scanner" className="qr-button primary">{t('qr.btnLaunch')}</Link>
              <Link to="/qr/challenge" className="qr-button danger">{t('qr.btnChallenge')}</Link>
            </div>
          </div>
          <div className="qr-terminal">
            <div className="qr-terminal-bar">
              <span className="qr-dot red"></span>
              <span className="qr-dot amber"></span>
              <span className="qr-dot green"></span>
              <span className="qr-chip">terminal / qr-intel</span>
            </div>
            <div className="qr-terminal-body">
              <div><span className="qr-log-cmd">$ scan --module qr-fraud</span></div>
              <div className="qr-log-ok">UPI redirect detector loaded</div>
              <div className="qr-log-warn">Public sticker tampering patterns indexed</div>
              <div className="qr-log-bad">Fake refund collect request signatures active</div>
              <div><span className="qr-log-cmd">$ xp --current</span> <span className="qr-xp" data-qr-xp>0</span></div>
            </div>
          </div>
        </section>

        <section className="qr-section">
          <div className="qr-grid">
            <article className="qr-card qr-stat">
              <div>
                <span className="qr-eyebrow">{t('qr.xp')}</span>
                <span className="qr-stat-value" data-qr-xp>0</span>
              </div>
              <span className="qr-chip">local profile</span>
            </article>
            <article className="qr-card qr-stat">
              <div>
                <span className="qr-eyebrow">{t('qr.scans')}</span>
                <span className="qr-stat-value" data-qr-scans>0</span>
              </div>
              <span className="qr-chip">simulated</span>
            </article>
            <article className="qr-card qr-stat">
              <div>
                <span className="qr-eyebrow">{t('qr.detected')}</span>
                <span className="qr-stat-value" data-qr-detected>0</span>
              </div>
              <span className="qr-chip red">watchlist</span>
            </article>
          </div>
        </section>

        <section className="qr-section">
          <div className="qr-section-head">
            <div>
              <h2>{t('qr.trainingTitle')}</h2>
              <p className="qr-copy">{t('qr.trainingDesc')}</p>
            </div>
            <span className="qr-chip">{t('qr.trainingKicker')}</span>
          </div>
          <div className="qr-grid">
            <Link to="/qr/scanner" className="qr-card">
              <span className="qr-chip red">simulation</span>
              <h3>{t('qr.route1.title')}</h3>
              <p>{t('qr.route1.desc')}</p>
              <div className="qr-progress"><div className="qr-progress-fill" data-progress="72"></div></div>
            </Link>
            <Link to="/qr/challenge" className="qr-card">
              <span className="qr-chip">interactive</span>
              <h3>{t('qr.route2.title')}</h3>
              <p>{t('qr.route2.desc')}</p>
              <div className="qr-progress"><div className="qr-progress-fill" data-progress="48"></div></div>
            </Link>
            <Link to="/qr/awareness" className="qr-card">
              <span className="qr-chip">law tips</span>
              <h3>{t('deepfake.awareness')} and Indian cyber law</h3>
              <p>{t('qr.route3.desc')}</p>
              <div className="qr-progress"><div className="qr-progress-fill" data-progress="64"></div></div>
            </Link>
            <Link to="/qr/case-study" className="qr-card">
              <span className="qr-chip">cases</span>
              <h3>{t('qr.route4.title')}</h3>
              <p>{t('qr.route4.desc')}</p>
              <div className="qr-progress"><div className="qr-progress-fill" data-progress="54"></div></div>
            </Link>
            <Link to="/qr/report" className="qr-card">
              <span className="qr-chip red">response</span>
              <h3>{t('qr.route5.title')}</h3>
              <p>{t('qr.route5.desc')}</p>
              <div className="qr-progress"><div className="qr-progress-fill" data-progress="68"></div></div>
            </Link>
          </div>
        </section>
      </main>

      <footer className="qr-footer">
        <div className="qr-shell">{t('qr.footer')}</div>
      </footer>
    </div>
  );
}
