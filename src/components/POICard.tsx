import { PointOfInterest } from '@/types/tour';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin } from 'lucide-react';
import { formatDistance } from '@/utils/distance';

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
  return (
    <Card 
      className="overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02] bg-card border-border"
      onClick={onClick}
      style={{ boxShadow: 'var(--shadow-soft)' }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={poi.images[0]}
          alt={poi.name}
          className="w-full h-full object-cover transition-transform hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <Badge className={categoryColors[poi.category]}>
            {poi.category}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl text-foreground">{poi.name}</CardTitle>
        <CardDescription className="line-clamp-2 text-muted-foreground">
          {poi.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{poi.duration} min</span>
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
