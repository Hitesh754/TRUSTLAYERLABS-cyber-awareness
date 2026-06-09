import { ScamCategory, scamCategories } from '../../data/scamDatabase';
import { useTranslation } from 'react-i18next';

interface CategoryFilterProps {
  selectedCategory: ScamCategory | 'all';
  onCategoryChange: (category: ScamCategory | 'all') => void;
}

// Map database category keys to i18n keys
const categoryI18nKeys: Record<string, string> = {
  'all': 'scamLibrary.allScams',
  'Financial-Fraud': 'scamLibraryExt.cat.financialFraud',
  'Phishing-Social-Engineering': 'scamLibraryExt.cat.phishingSocial',
  'Technical-Attacks': 'scamLibraryExt.cat.technicalAttacks',
  'Crypto-Fraud': 'scamLibraryExt.cat.cryptoFraud',
  'Identity-Crimes': 'scamLibraryExt.cat.identityCrimes',
};


export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const { t } = useTranslation();
  const categories: (ScamCategory | 'all')[] = ['all', ...Object.keys(scamCategories) as ScamCategory[]];
  
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const categoryInfo = category === 'all' 
          ? { name: t('scamLibrary.allScams'), icon: '📚', color: '#22d3ee' }
          : { ...scamCategories[category], name: t(categoryI18nKeys[category] || `scamLibrary.cat.${category}`) };
        
        const isSelected = selectedCategory === category;
        
        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-xl border font-semibold text-sm transition-all hover:scale-105 ${
              isSelected
                ? ''
                : 'bg-slate-100 hover:bg-slate-200 border-gray-200 text-slate-600 hover:text-slate-900 dark:bg-white/5 dark:hover:bg-white/10 dark:border-slate-800 dark:text-slate-400 dark:hover:text-white'
            }`}
            style={{
              background: isSelected
                ? `linear-gradient(135deg, ${categoryInfo.color}30, ${categoryInfo.color}15)`
                : undefined,
              borderColor: isSelected
                ? `${categoryInfo.color}40`
                : undefined,
              color: isSelected
                ? categoryInfo.color
                : undefined
            }}
          >
            <span className="mr-1.5">{categoryInfo.icon}</span>
            {categoryInfo.name}
          </button>
        );
      })}
    </div>
  );
}
