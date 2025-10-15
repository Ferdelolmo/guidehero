import { useEffect, useRef } from 'react';
import { PointOfInterest, UserLocation } from '@/types/tour';
import { MapPin, Navigation } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface MapViewProps {
  points: PointOfInterest[];
  userLocation: UserLocation | null;
  onPOISelect: (poi: PointOfInterest) => void;
}

export const MapView = ({ points, userLocation, onPOISelect }: MapViewProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full h-full bg-muted">
      {/* Simplified map visualization */}
      <div className="absolute inset-0 overflow-auto">
        <div className="relative min-h-full p-4">
          {/* User location indicator */}
          {userLocation && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                <div className="relative flex items-center justify-center w-12 h-12 bg-primary rounded-full border-4 border-background shadow-lg">
                  <Navigation className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </div>
          )}

          {/* POI markers */}
          <div className="grid grid-cols-2 gap-4 mt-16">
            {points.map((poi, index) => (
              <button
                key={poi.id}
                onClick={() => onPOISelect(poi)}
                className="group relative p-4 bg-card rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg"
                style={{ boxShadow: 'var(--shadow-soft)' }}
              >
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {poi.name}
                  </span>
                  <Badge variant="secondary" className="text-xs">
                    Stop {poi.order}
                  </Badge>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Info overlay */}
      <div className="absolute top-4 left-4 right-4 bg-card/95 backdrop-blur-sm rounded-lg p-3 border border-border" style={{ boxShadow: 'var(--shadow-soft)' }}>
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="font-medium text-foreground">
            {points.length} Points of Interest
          </span>
        </div>
        {userLocation && (
          <p className="text-xs text-muted-foreground mt-1">
            GPS location active • Tap any location to explore
          </p>
        )}
      </div>
    </div>
  );
};
