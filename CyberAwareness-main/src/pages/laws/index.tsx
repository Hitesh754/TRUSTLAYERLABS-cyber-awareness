import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "./css/laws.css";
import "./js/laws.js";

export default function LawsDashboard() {
  const { t } = useTranslation();
  return (
    <main className="law-shell">
      <nav className="law-nav" aria-label="Cyber law navigation">
        <Link className="brand-link" to="/laws/dashboard">
          <span className="brand-mark">CL</span>Cyber Law SOC
        </Link>
        <div className="law-links">
          <Link className="dashboard-link" to="/">
            {t('common.backToDashboard')}
          </Link>
          <Link className="active" to="/laws/dashboard">
            Dashboard
          </Link>
          <Link to="/laws/ipc">IPC</Link>
          <Link to="/laws/bns">BNS</Link>
          <Link to="/laws/it-act">IT Act</Link>
          <Link to="/laws/reporting">Reporting</Link>
          <Link to="/laws/rights">Rights</Link>
          <Link to="/laws/awareness">Awareness</Link>
          <Link to="/laws/penalties">Penalties</Link>
          <Link to="/laws/case-study">Cases</Link>
        </div>
      </nav>

      <section className="hero-grid">
        <div className="hero-panel">
          <div>
            <span className="eyebrow">{t('laws.socKicker')}</span>
            <h1>{t('laws.socTitle')}</h1>
            <p className="lead">
              Explore Indian cyber law pathways through a SOC-style interface with searchable sections, reporting workflows, penalties, rights,
              awareness tips, and case-response drills.
            </p>
            <div className="hero-actions">
              <Link className="law-btn primary" to="/laws/ipc">
                {t('laws.btnSections')}
              </Link>
              <Link className="law-btn danger" to="/laws/reporting">
                {t('laws.btnReport')}
              </Link>
            </div>
          </div>

          <div className="progress-panel">
            <strong>{t('laws.socProgress')}</strong>
            <div className="progress-track">
              <div className="progress-fill" data-progress-fill></div>
            </div>
            <span data-progress-text>0/9 {t('laws.socModules')}</span>
          </div>
        </div>

        <aside className="soc-panel">
          <div className="soc-header">
            <h2>{t('laws.socTerminal')}</h2>
            <div className="terminal-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="terminal" aria-label="Cyber law terminal">
            <div className="terminal-line">&gt; loading legal response matrix...</div>
            <div className="terminal-line">&gt; IPC legacy references: <strong>indexed</strong></div>
            <div className="terminal-line">&gt; BNS updates: <strong>mapped</strong></div>
            <div className="terminal-line">&gt; IT Act controls: <strong>active</strong></div>
            <div className="terminal-line">&gt; citizen reporting mode: <strong>ready</strong></div>
          </div>
        </aside>
      </section>

      <section className="metric-grid" aria-label="Cyber law stats">
        <article className="metric-card">
          <span>{t('laws.metric1.label')}</span>
          <span className="metric-value" data-count="24" data-suffix="h">0h</span>
          <p>{t('laws.metric1.desc')}</p>
        </article>
        <article className="metric-card">
          <span>{t('laws.metric2.label')}</span>
          <span className="metric-value" data-count="9">0</span>
          <p>{t('laws.metric2.desc')}</p>
        </article>
        <article className="metric-card">
          <span>{t('laws.metric3.label')}</span>
          <span className="metric-value" data-count="6">0</span>
          <p>{t('laws.metric3.desc')}</p>
        </article>
        <article className="metric-card">
          <span>{t('laws.metric4.label')}</span>
          <span className="metric-value" data-count="7">0</span>
          <p>{t('laws.metric4.desc')}</p>
        </article>
      </section>

      <section className="section-block">
        <div className="section-head">
          <div>
            <h2>{t('laws.stationTitle')}</h2>
            <p>{t('laws.stationDesc')}</p>
          </div>
        </div>
        <div className="card-grid">
          <Link className="law-card" to="/laws/ipc">
            <span className="card-code">IPC</span>
            <h3>{t('laws.card1.title')}</h3>
            <p>{t('laws.card1.desc')}</p>
          </Link>
          <Link className="law-card" to="/laws/bns">
            <span className="card-code">BNS</span>
            <h3>{t('laws.card2.title')}</h3>
            <p>{t('laws.card2.desc')}</p>
          </Link>
          <Link className="law-card" to="/laws/it-act">
            <span className="card-code">IT</span>
            <h3>{t('laws.card3.title')}</h3>
            <p>{t('laws.card3.desc')}</p>
          </Link>
          <Link className="law-card danger" to="/laws/penalties">
            <span className="card-code">PENALTY</span>
            <h3>{t('laws.card4.title')}</h3>
            <p>{t('laws.card4.desc')}</p>
          </Link>
          <Link className="law-card" to="/laws/rights">
            <span className="card-code">RIGHTS</span>
            <h3>{t('laws.card5.title')}</h3>
            <p>{t('laws.card5.desc')}</p>
          </Link>
          <Link className="law-card" to="/laws/awareness">
            <span className="card-code">AWARE</span>
            <h3>{t('laws.card6.title')}</h3>
            <p>{t('laws.card6.desc')}</p>
          </Link>
          <Link className="law-card" to="/laws/case-study">
            <span className="card-code">CASES</span>
            <h3>{t('laws.card7.title')}</h3>
            <p>{t('laws.card7.desc')}</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
