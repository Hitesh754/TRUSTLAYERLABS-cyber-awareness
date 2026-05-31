import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const supported = (i18n.options.supportedLngs || []).filter(Boolean) as string[];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lng = params.get('lng');
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [location.search]);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lng = e.target.value;
    const params = new URLSearchParams(location.search);
    params.set('lng', lng);
    // update i18n and navigate to same path preserving other params
    i18n.changeLanguage(lng);
    navigate({ pathname: location.pathname, search: params.toString() });
  };

  return (
    <select
      aria-label={t('navbar.languageSelector')}
      value={i18n.language}
      onChange={onChange}
      className="hidden lg:inline-flex px-2 py-1 rounded-md text-sm border border-slate-700 text-slate-200 bg-transparent"
      style={{ fontFamily: "'Rajdhani', sans-serif" }}
    >
      {supported.map((code) => (
        <option key={code} value={code}>{code.toUpperCase()}</option>
      ))}
    </select>
  );
}
