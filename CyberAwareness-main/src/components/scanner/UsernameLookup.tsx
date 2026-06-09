'use client';

import React, { useState } from 'react';
import { Search, UserSearch, ShieldAlert, CheckCircle, XCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface PlatformResult {
  name: string;
  url: string;
  status: 'FOUND' | 'NOT_FOUND' | 'ERROR' | 'PENDING';
}

const PLATFORMS = [
  { id: 'github', name: 'GitHub', getUrl: (u: string) => `https://github.com/${u}` },
  { id: 'hackernews', name: 'HackerNews', getUrl: (u: string) => `https://news.ycombinator.com/user?id=${u}` },
  { id: 'chesscom', name: 'Chess.com', getUrl: (u: string) => `https://www.chess.com/member/${u}` },
  { id: 'wikipedia', name: 'Wikipedia', getUrl: (u: string) => `https://en.wikipedia.org/wiki/User:${u}` },
  { id: 'reddit', name: 'Reddit', getUrl: (u: string) => `https://www.reddit.com/user/${u}` },
  { id: 'vimeo', name: 'Vimeo', getUrl: (u: string) => `https://vimeo.com/${u}` },
  { id: 'patreon', name: 'Patreon', getUrl: (u: string) => `https://www.patreon.com/${u}` }
];

export default function UsernameLookup() {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<PlatformResult[]>([]);
  const [error, setError] = useState('');

  const runScan = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setResults([]);

    const cleanUsername = username.trim();
    if (!cleanUsername) {
      setError('Please enter a username');
      return;
    }

    if (!/^[a-zA-Z0-9_-]+$/.test(cleanUsername)) {
      setError('Username contains invalid characters');
      return;
    }

    setLoading(true);

    // Initialize results as pending
    const initialResults: PlatformResult[] = PLATFORMS.map(p => ({
      name: p.name,
      url: p.getUrl(cleanUsername),
      status: 'PENDING'
    }));
    setResults(initialResults);

    // Helper to update a single result
    const updateResult = (name: string, status: 'FOUND' | 'NOT_FOUND' | 'ERROR') => {
      setResults(prev => prev.map(r => r.name === name ? { ...r, status } : r));
    };

    // Execute checks concurrently
    const checks = PLATFORMS.map(async (platform) => {
      try {
        if (platform.id === 'github') {
          const res = await fetch(`https://api.github.com/users/${cleanUsername}`);
          updateResult(platform.name, res.status === 200 ? 'FOUND' : 'NOT_FOUND');
        } else if (platform.id === 'hackernews') {
          const res = await fetch(`https://hacker-news.firebaseio.com/v0/user/${cleanUsername}.json`);
          const data = await res.json();
          updateResult(platform.name, data !== null ? 'FOUND' : 'NOT_FOUND');
        } else if (platform.id === 'chesscom') {
          const res = await fetch(`https://api.chess.com/pub/player/${cleanUsername}`);
          updateResult(platform.name, res.status === 200 ? 'FOUND' : 'NOT_FOUND');
        } else if (platform.id === 'wikipedia') {
          const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=users&ususers=${cleanUsername}&format=json&origin=*`);
          const data = await res.json();
          const userObj = data?.query?.users?.[0];
          updateResult(platform.name, (userObj && !userObj.missing) ? 'FOUND' : 'NOT_FOUND');
        } else {
          // Fallback to proxy for generic websites (Reddit, Vimeo, Patreon)
          const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(platform.getUrl(cleanUsername))}`;
          const res = await fetch(proxyUrl);
          const data = await res.json();
          if (data.status && data.status.http_code) {
             const code = data.status.http_code;
             if (code === 200) updateResult(platform.name, 'FOUND');
             else if (code === 404) updateResult(platform.name, 'NOT_FOUND');
             else updateResult(platform.name, 'ERROR');
          } else {
             updateResult(platform.name, 'ERROR');
          }
        }
      } catch (err) {
        updateResult(platform.name, 'ERROR');
      }
    });

    await Promise.allSettled(checks);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 rounded-2xl border border-gray-250 dark:border-cyan-900/30 shadow-2xl overflow-hidden text-slate-800 dark:text-slate-100">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <UserSearch className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400">
            {t('usernameLookup.title', 'Username OSINT Search')}
          </h2>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          {t('usernameLookup.description', 'Check username availability and presence across digital platforms and social media.')}
        </p>
      </div>

      {/* Input Form */}
      <form onSubmit={runScan} className="mb-8">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username (e.g. john_doe)..."
              className="w-full h-12 pl-4 pr-12 bg-white dark:bg-slate-800/40 border border-gray-300 dark:border-cyan-800/40 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
            <UserSearch className="absolute right-4 top-3.5 w-5 h-5 text-slate-400 dark:text-slate-500" />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="h-12 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:from-slate-700 disabled:to-slate-600 text-white font-semibold rounded-lg flex items-center gap-2 transition duration-200 shadow-lg hover:shadow-cyan-500/30 disabled:cursor-not-allowed"
          >
            <Search className="w-4 h-4" />
            {loading ? t('usernameLookup.searching', 'Searching...') : t('usernameLookup.searchBtn', 'Search')}
          </button>
        </div>
      </form>

      {/* Error Output */}
      {error && (
        <div className="mb-6 p-4 bg-red-900/10 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 rounded-lg flex items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-red-650 dark:text-red-400 flex-shrink-0" />
          <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
        </div>
      )}

      {/* Scanning Step animation */}
      {loading && results.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 gap-4">
          <div className="w-10 h-10 border-3 border-cyan-200 dark:border-cyan-500/20 border-t-cyan-600 dark:border-t-cyan-400 rounded-full animate-spin" />
        </div>
      )}

      {/* Results View */}
      <AnimatePresence>
        {results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {results.map((res, i) => (
                <div key={i} className="p-4 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{res.name}</span>
                    <div className="flex items-center gap-1.5 text-xs">
                      {res.status === 'PENDING' && <span className="text-slate-500 animate-pulse">Checking...</span>}
                      {res.status === 'FOUND' && <><CheckCircle className="w-3.5 h-3.5 text-emerald-500" /><span className="text-emerald-600 dark:text-emerald-400 font-medium">{t('usernameLookup.found', 'Found')}</span></>}
                      {res.status === 'NOT_FOUND' && <><XCircle className="w-3.5 h-3.5 text-slate-400" /><span className="text-slate-500 dark:text-slate-400">{t('usernameLookup.notFound', 'Not Found')}</span></>}
                      {res.status === 'ERROR' && <><AlertCircle className="w-3.5 h-3.5 text-amber-500" /><span className="text-amber-600 dark:text-amber-400">{t('usernameLookup.error', 'Error')}</span></>}
                    </div>
                  </div>
                  {res.status === 'FOUND' && (
                    <a href={res.url} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-lg transition-colors" title={t('usernameLookup.viewProfile', 'View Profile')}>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
