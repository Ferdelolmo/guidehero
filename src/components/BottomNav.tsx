import { Map, List, Info, Car, UtensilsCrossed, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/data/translations';

interface BottomNavProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  tabs?: TabId[];
}

type TabId = 'map' | 'places' | 'park' | 'eat' | 'info' | 'fun-facts';

export const BottomNav = ({ activeTab, onTabChange, tabs }: BottomNavProps) => {
  const { language } = useLanguage();
  const copy = getTranslations(language);

  const tabConfig: Record<TabId, { icon: typeof Map; label: string }> = {
    map: { icon: Map, label: copy.bottomNav.map },
    places: { icon: List, label: copy.bottomNav.places },
    park: { icon: Car, label: copy.bottomNav.park },
    eat: { icon: UtensilsCrossed, label: copy.bottomNav.eat },
    info: { icon: Info, label: copy.bottomNav.info },
    'fun-facts': { icon: Sparkles, label: copy.bottomNav.funFacts },
  };

  const renderedTabs = (tabs ?? ['map', 'places', 'park', 'eat', 'info']).map((id) => ({
    id,
    icon: tabConfig[id].icon,
    label: tabConfig[id].label,
  }));

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 safe-area-bottom">
      <div className="flex items-center justify-around h-16 max-w-2xl mx-auto px-4">
        {renderedTabs.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={cn(
              'flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transition-all',
              activeTab === id
                ? 'text-primary bg-primary/10'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            )}
          >
            <Icon className={cn('w-5 h-5', activeTab === id && 'scale-110')} />
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
