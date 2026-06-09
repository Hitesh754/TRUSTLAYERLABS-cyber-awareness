import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function UPIHome() {
  const { t } = useTranslation();

  const sections = [
    {
      title: t('upi.sections.awareness.title'),
      description: t('upi.sections.awareness.desc'),
      href: '/upi/awareness',
    },
    {
      title: t('upi.sections.caseStudy.title'),
      description: t('upi.sections.caseStudy.desc'),
      href: '/upi/case-study',
    },
    {
      title: t('upi.sections.demo.title'),
      description: t('upi.sections.demo.desc'),
      href: '/upi/demo',
    },
    {
      title: t('upi.sections.report.title'),
      description: t('upi.sections.report.desc'),
      href: '/upi/report',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-slate-950 dark:text-white transition-colors duration-300">
      <div className="border-b border-gray-200 bg-white dark:border-slate-800 dark:bg-slate-950/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link to="/" className="flex items-center gap-1.5 text-xs text-gray-700 hover:text-cyan-400 dark:text-slate-400 dark:hover:text-cyan-300 transition-colors">
            {t('common.backHome')}
          </Link>
          <span className="text-gray-500 dark:text-slate-500">/</span>
          <span className="text-xs text-gray-600 dark:text-slate-400">{t('upi.breadcrumb')}</span>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        <section className="rounded-3xl border border-gray-200 bg-white dark:border-slate-800 dark:bg-slate-900/80 p-8 shadow-xl shadow-cyan-500/5 transition-colors duration-300">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-4">{t('upi.hero.kicker')}</p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">{t('upi.hero.title')}</h1>
              <p className="text-gray-700 dark:text-slate-400 leading-relaxed text-base sm:text-lg max-w-2xl">{t('upi.hero.desc')}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/upi/awareness" className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">{t('upi.hero.btnStart')}</Link>
                <Link to="/upi/demo" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-500/30 dark:hover:text-cyan-300 transition-colors">{t('upi.hero.btnDemo')}</Link>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-gray-50 dark:border-slate-800 dark:bg-slate-900 p-6 transition-colors duration-300">
              <div className="mb-6">
                <h2 className="text-sm uppercase tracking-[0.3em] text-gray-700 dark:text-slate-400 mb-3">{t('upi.why.title')}</h2>
                <p className="text-gray-700 dark:text-slate-400 leading-relaxed">{t('upi.why.desc')}</p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-2xl border border-gray-200 bg-white dark:border-slate-800 dark:bg-slate-900 p-4">
                  <p className="text-sm text-gray-700 dark:text-slate-300">{t('upi.why.bullet1')}</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white dark:border-slate-800 dark:bg-slate-900 p-4">
                  <p className="text-sm text-gray-700 dark:text-slate-300">{t('upi.why.bullet2')}</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white dark:border-slate-800 dark:bg-slate-900 p-4">
                  <p className="text-sm text-gray-700 dark:text-slate-300">{t('upi.why.bullet3')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-700 dark:text-slate-400">{t('upi.sections.kicker')}</p>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('upi.sections.title')}</h2>
            </div>
            <p className="text-sm text-gray-700 dark:text-slate-400 max-w-xl">{t('upi.sections.desc')}</p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {sections.map((section) => (
              <Link key={section.title} to={section.href} className="group rounded-3xl border border-gray-200 bg-white dark:border-slate-800 dark:bg-slate-900/80 p-6 transition hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{section.title}</h3>
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">Open</span>
                </div>
                <p className="mt-4 text-gray-700 dark:text-slate-400 leading-relaxed">{section.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-gray-200 bg-white dark:border-slate-800 dark:bg-slate-900/80 p-6 transition-colors duration-300">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-700 dark:text-slate-400 mb-3">{t('upi.facts.title')}</p>
            <ul className="space-y-3 text-sm leading-relaxed text-gray-700 dark:text-slate-400">
              <li>{t('upi.facts.bullet1')}</li>
              <li>{t('upi.facts.bullet2')}</li>
              <li>{t('upi.facts.bullet3')}</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-white dark:border-slate-800 dark:bg-slate-900/80 p-6 transition-colors duration-300">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-700 dark:text-slate-400 mb-3">{t('upi.watch.title')}</p>
            <ul className="space-y-3 text-sm leading-relaxed text-gray-700 dark:text-slate-400">
              <li>{t('upi.watch.bullet1')}</li>
              <li>{t('upi.watch.bullet2')}</li>
              <li>{t('upi.watch.bullet3')}</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-white dark:border-slate-800 dark:bg-slate-900/80 p-6 transition-colors duration-300">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-700 dark:text-slate-400 mb-3">{t('upi.reportQuick.title')}</p>
            <ul className="space-y-3 text-sm leading-relaxed text-gray-700 dark:text-slate-400">
              <li>{t('upi.reportQuick.bullet1')}</li>
              <li>{t('upi.reportQuick.bullet2')}</li>
              <li>{t('upi.reportQuick.bullet3')}</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
