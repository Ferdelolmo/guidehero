import { PointOfInterest } from '@/types/tour';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin } from 'lucide-react';
import { formatDistance } from '@/utils/distance';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/data/translations';

interface POICardProps {
  poi: PointOfInterest;
  distance?: number;
  onClick: () => void;
}

const categoryColors = {
  monument: 'bg-primary/10 text-primary border-primary/20',
  church: 'bg-accent/10 text-accent border-accent/20',
  museum: 'bg-secondary text-secondary-foreground border-border',
  viewpoint: 'bg-primary/15 text-primary border-primary/30',
  square: 'bg-muted text-muted-foreground border-border',
};

export const POICard = ({ poi, distance, onClick }: POICardProps) => {
  const { language } = useLanguage();
  const copy = getTranslations(language);

  return (
    <Card 
      className="overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02] bg-card border-border"
      onClick={onClick}
      style={{ boxShadow: 'var(--shadow-soft)' }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={poi.images[0]}
          alt={poi.name[language]}
          className="w-full h-full object-cover transition-transform hover:scale-110"
        />
      </div>
      <CardHeader className="pb-3 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl text-foreground">{poi.name[language]}</CardTitle>
          <Badge className={`${categoryColors[poi.category]} shrink-0`}>
            {copy.categories[poi.category]}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2 text-muted-foreground">
          {poi.description[language]}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{poi.duration} {copy.general.minutesShort}</span>
        </div>
        {distance !== undefined && (
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">{formatDistance(distance)}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
