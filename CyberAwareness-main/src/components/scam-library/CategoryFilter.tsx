import { ScamCategory, scamCategories } from '../../data/scamDatabase';

interface CategoryFilterProps {
  selectedCategory: ScamCategory | 'all';
  onCategoryChange: (category: ScamCategory | 'all') => void;
}

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const categories: (ScamCategory | 'all')[] = ['all', ...Object.keys(scamCategories) as ScamCategory[]];
  
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const categoryInfo = category === 'all' 
          ? { name: 'All Scams', icon: '📚', color: '#22d3ee' }
          : scamCategories[category];
        
        const isSelected = selectedCategory === category;
        
        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2.5 rounded-full text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 ${
              isSelected
                ? 'text-white border border-cyan-400/40 shadow-[0_0_30px_rgba(34,211,238,0.15)]'
                : 'text-slate-400 border border-slate-700/50 hover:text-cyan-300 hover:border-cyan-500/20'
            }`}
            style={{
              background: isSelected
                ? `linear-gradient(135deg, rgba(34,211,238,0.1), rgba(34,211,238,0.04))`
                : 'rgba(15,23,42,0.6)',
            }}
          >
            <span className="mr-2">{categoryInfo.icon}</span>
            {categoryInfo.name}
          </button>
        );
      })}
    </div>
  );
}