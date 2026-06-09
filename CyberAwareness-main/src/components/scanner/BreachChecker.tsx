'use client';

import { useState } from 'react';
import { ShieldAlert, CheckCircle, Search, Key, ShieldCheck } from 'lucide-react';
import hibpService from '../../services/hibp';
import { useTranslation } from 'react-i18next';

type Breach = {
	id: string;
	name: string;
	date: string;
	compromised_data: string[];
	description?: string;
};

export default function BreachChecker() {
	const { t } = useTranslation();
	const [email, setEmail] = useState('');
	const [passwordToCheck, setPasswordToCheck] = useState('');
	const [activeTab, setActiveTab] = useState<'email' | 'password'>('email');
	const [loading, setLoading] = useState(false);
	const [results, setResults] = useState<Breach[] | null>(null);
	const [pwnedCount, setPwnedCount] = useState<number | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [infoMessage, setInfoMessage] = useState<string | null>(null);

	const apiKey = import.meta.env.VITE_HIBP_API_KEY;

	const runEmailScan = async () => {
		setError(null);
		setResults(null);
		setInfoMessage(null);

		if (!email.includes('@')) {
			setError('Invalid email address format');
			return;
		}

		setLoading(true);

		if (apiKey) {
			try {
				const response = await hibpService.checkEmailBreach(email);
				if (response.breaches && response.breaches.length > 0) {
					const mapped: Breach[] = response.breaches.map((b, idx) => ({
						id: String(idx + 1),
						name: b.Title || b.Name,
						date: b.BreachDate,
						compromised_data: b.DataClasses || [],
						description: b.Description
					}));
					setResults(mapped);
				} else {
					setResults([]);
				}
			} catch (e: any) {
				setError(e?.message || 'Failed to query Have I Been Pwned API.');
			} finally {
				setLoading(false);
			}
		} else {
			setInfoMessage('No VITE_HIBP_API_KEY configured. Set a real Have I Been Pwned key to query live breach data.');
			setResults(null);
			setLoading(false);
		}
	};

	const runPasswordScan = async () => {
		setError(null);
		setPwnedCount(null);
		setInfoMessage(null);

		if (!passwordToCheck) {
			setError('Please enter a password to evaluate');
			return;
		}

		setLoading(true);

		try {
			const count = await hibpService.checkPassword(passwordToCheck);
			setPwnedCount(count);
		} catch (e: any) {
			setError('Failed to query the live Pwned Passwords API. Try again.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 via-slate-900 to-black text-slate-200 border border-cyan-900/30 shadow-xl max-w-3xl mx-auto">
			<div className="flex items-center justify-between mb-6">
				<h2 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
					{t('breachChecker.title')}
				</h2>
				<span className="text-xs text-slate-400">{t('breachChecker.subtitle')}</span>
			</div>

			{/* Tabs */}
			<div className="flex gap-2 mb-6 border-b border-slate-800 pb-3">
				<button
					onClick={() => {
						setActiveTab('email');
						setResults(null);
						setPwnedCount(null);
						setError(null);
						setInfoMessage(null);
					}}
					className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
						activeTab === 'email' ? 'bg-cyan-500 text-black' : 'text-slate-400 hover:text-white'
					}`}
				>
					{t('breachChecker.emailTab')}
				</button>
				<button
					onClick={() => {
						setActiveTab('password');
						setResults(null);
						setPwnedCount(null);
						setError(null);
						setInfoMessage(null);
					}}
					className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
						activeTab === 'password' ? 'bg-cyan-500 text-black' : 'text-slate-400 hover:text-white'
					}`}
				>
					{t('breachChecker.passwordTab')}
				</button>
			</div>

			{/* Info Message Banner */}
			{infoMessage && (
				<div className="mb-4 p-3 bg-amber-950/40 border border-amber-800/40 text-amber-400 rounded-lg text-xs">
					⚠️ {infoMessage}
				</div>
			)}

			{/* Error Banner */}
			{error && (
				<div className="mb-4 p-3 bg-red-950/40 border border-red-800/40 text-red-400 rounded-lg text-xs">
					{error}
				</div>
			)}

			{/* Tab Contents */}
			{activeTab === 'email' ? (
				<div className="space-y-6">
					<div className="grid gap-3 sm:grid-cols-3">
						<div className="col-span-2">
							<input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="name@example.com"
								className="w-full h-12 px-4 rounded-lg bg-slate-850 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder:text-slate-500"
								aria-label="email"
							/>
						</div>
						<button
							onClick={runEmailScan}
							disabled={loading}
							className="h-12 w-full px-4 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:from-slate-700 disabled:to-slate-600 text-white font-semibold flex items-center justify-center gap-2 transition duration-200"
						>
							<Search className="w-4 h-4" />
							{loading ? t('breachChecker.auditing') : t('breachChecker.auditBtn')}
						</button>
					</div>

					{loading && (
						<div className="flex flex-col items-center justify-center py-8 gap-3">
							<div className="w-8 h-8 border-2 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin" />
							<p className="text-slate-400 text-xs font-mono animate-pulse">{t('breachChecker.queryingRegistry')}</p>
						</div>
					)}

					{results && !loading && (
						<div className="space-y-4">
							{results.length > 0 ? (
								<>
									<div className="text-sm text-red-400 font-semibold flex items-center gap-2">
										<ShieldAlert className="w-4 h-4" /> Found {results.length} breach exposure(s)
									</div>
									<ul className="space-y-3">
										{results.map((b) => (
											<li key={b.id} className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
												<div className="flex justify-between items-start">
													<div>
														<h4 className="font-bold text-white text-sm">{b.name}</h4>
														<p className="text-[10px] text-slate-500 mt-0.5">{b.date}</p>
													</div>
												</div>
												{b.description && (
													<p className="mt-2 text-xs text-slate-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: b.description }}></p>
												)}
												<div className="mt-3">
													<p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">{t('breachChecker.exposedParameters')}</p>
													<div className="flex flex-wrap gap-1.5">
														{b.compromised_data.map((d) => (
															<span key={d} className="text-[9px] px-2 py-0.5 bg-red-950/40 text-red-400 border border-red-900/40 rounded-full">
																{d}
															</span>
														))}
													</div>
												</div>
											</li>
										))}
									</ul>
								</>
							) : (
								<div className="p-5 bg-emerald-950/15 border border-emerald-900/30 rounded-xl flex gap-3.5 items-center">
									<ShieldCheck className="w-6 h-6 text-emerald-400" />
									<div>
										<h3 className="text-sm font-bold text-emerald-300">{t('breachChecker.noLeaks')}</h3>
										<p className="text-slate-400 text-xs mt-0.5">{t('breachChecker.noLeaksDesc')}</p>
									</div>
								</div>
							)}
						</div>
					)}
				</div>
			) : (
				<div className="space-y-6">
					<div className="grid gap-3 sm:grid-cols-3">
						<div className="col-span-2">
							<input
								type="password"
								value={passwordToCheck}
								onChange={(e) => setPasswordToCheck(e.target.value)}
								placeholder="Enter password to check..."
								className="w-full h-12 px-4 rounded-lg bg-slate-850 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder:text-slate-500"
							/>
						</div>
						<button
							onClick={runPasswordScan}
							disabled={loading}
							className="h-12 w-full px-4 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:from-slate-700 disabled:to-slate-600 text-white font-semibold flex items-center justify-center gap-2 transition duration-200"
						>
							<Key className="w-4 h-4" />
							{loading ? t('breachChecker.checking') : t('breachChecker.checkBtn')}
						</button>
					</div>

					{loading && (
						<div className="flex flex-col items-center justify-center py-8 gap-3">
							<div className="w-8 h-8 border-2 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin" />
							<p className="text-slate-400 text-xs font-mono animate-pulse">{t('breachChecker.checkingPasswords')}</p>
						</div>
					)}

					{pwnedCount !== null && !loading && (
						<div className="p-5 rounded-xl border transition-all duration-300">
							{pwnedCount > 0 ? (
								<div className="space-y-2">
									<div className="text-red-400 font-bold text-sm flex items-center gap-2">
										<ShieldAlert className="w-5 h-5" /> {t('breachChecker.passwordLeaked')}
									</div>
									<p className="text-xs text-slate-300 leading-relaxed">
										This password has been seen <span className="text-red-400 font-bold font-mono text-sm">{pwnedCount.toLocaleString()}</span> times in credentials dumps.
										Do not use this password for any profile or account!
									</p>
								</div>
							) : (
								<div className="space-y-2">
									<div className="text-emerald-400 font-bold text-sm flex items-center gap-2">
										<CheckCircle className="w-5 h-5" /> {t('breachChecker.noPasswordLeaks')}
									</div>
									<p className="text-xs text-slate-300 leading-relaxed">
										{t('breachChecker.noPasswordLeaksDesc')}
									</p>
								</div>
							)}
						</div>
					)}
				</div>
			)}
		</div>
	);
}
