import { Map, List, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BottomNavProps {
  activeTab: 'map' | 'list' | 'info';
  onTabChange: (tab: 'map' | 'list' | 'info') => void;
}

export const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
  const tabs = [
    { id: 'map' as const, icon: Map, label: 'Map' },
    { id: 'list' as const, icon: List, label: 'Places' },
    { id: 'info' as const, icon: Info, label: 'Info' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 safe-area-bottom">
      <div className="flex items-center justify-around h-16 max-w-2xl mx-auto px-4">
        {tabs.map(({ id, icon: Icon, label }) => (
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
