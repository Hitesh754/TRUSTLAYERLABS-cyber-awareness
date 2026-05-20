import { TrendingUp, Users, Building2, GraduationCap, ChevronRight, Activity } from 'lucide-react';

const scamData = [
  { label: 'Banking Fraud', value: 84, color: 'bg-red-500' },
  { label: 'Fake Job Scams', value: 63, color: 'bg-orange-500' },
  { label: 'Crypto Fraud', value: 57, color: 'bg-yellow-500' },
  { label: 'Phishing Attacks', value: 71, color: 'bg-blue-500' },
  { label: 'OTP/SIM Swap', value: 49, color: 'bg-cyan-500' },
];

const quickActions = [
  {
    icon: GraduationCap,
    audience: 'Students',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    actions: [
      'Spot fake scholarship scams',
      'Secure your social media accounts',
      'Report cyberbullying incidents',
    ],
  },
  {
    icon: Users,
    audience: 'Senior Citizens',
    color: 'text-teal-400',
    bg: 'bg-teal-500/10',
    actions: [
      'Avoid KYC fraud calls',
      'Identify fake lottery winnings',
      'Safe UPI & banking practices',
    ],
  },
  {
    icon: Building2,
    audience: 'Small Businesses',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    actions: [
      'Protect against ransomware',
      'Secure payment gateways',
      'Employee phishing awareness',
    ],
  },
];

export default function DashboardPreview() {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Intelligence Dashboard</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Threat Insights &amp; Guided Actions
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real-time threat intelligence combined with personalized guidance for every type of user.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Threat Intelligence */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-bold text-lg">Threat Intelligence</h3>
                <p className="text-slate-500 text-sm mt-0.5">Active scam categories — May 2026</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-green-400 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full">
                <Activity className="w-3 h-3" />
                Live
              </div>
            </div>

            {/* Bar Chart */}
            <div className="flex flex-col gap-4">
              {scamData.map((item) => (
                <div key={item.label} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300 font-medium">{item.label}</span>
                    <span className="text-slate-500 font-semibold tabular-nums">{item.value}%</span>
                  </div>
                  <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-auto pt-4 border-t border-slate-800 flex items-center gap-2 text-sm text-slate-400">
              <TrendingUp className="w-4 h-4 text-red-400 flex-shrink-0" />
              Banking Fraud up <span className="text-red-400 font-semibold">+12%</span> from last month
            </div>
          </div>

          {/* Right: Quick Actions */}
          <div className="flex flex-col gap-5">
            {quickActions.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.audience} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex gap-4 group hover:border-slate-700 transition-colors">
                  <div className={`w-11 h-11 rounded-xl ${group.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <Icon className={`w-5 h-5 ${group.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-bold mb-2">{group.audience}</h4>
                    <ul className="space-y-1.5">
                      {group.actions.map((action) => (
                        <li key={action} className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 cursor-pointer transition-colors">
                          <ChevronRight className={`w-3.5 h-3.5 ${group.color} flex-shrink-0`} />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
