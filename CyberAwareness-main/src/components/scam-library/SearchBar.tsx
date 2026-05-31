import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-cyan-300/70" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search archives, indicators, or prevention protocols..."
        className="w-full pl-11 pr-4 py-3.5 rounded-[1.5rem] bg-[#06111f] border border-cyan-500/15 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/15 transition-all"
      />
    </div>
  );
}