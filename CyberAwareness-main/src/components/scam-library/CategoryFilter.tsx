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
            className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all hover:scale-105 ${
              isSelected
                ? 'text-white'
                : 'text-slate-400 hover:text-white'
            }`}
            style={{
              background: isSelected
                ? `linear-gradient(135deg, ${categoryInfo.color}40, ${categoryInfo.color}20)`
                : 'rgba(255,255,255,0.04)',
              border: isSelected
                ? `1px solid ${categoryInfo.color}40`
                : '1px solid #1e293b'
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
