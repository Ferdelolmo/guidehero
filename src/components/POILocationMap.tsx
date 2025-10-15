import { MapPin, Navigation } from 'lucide-react';
import { UserLocation } from '@/types/tour';
import { calculateDistance } from '@/utils/distance';

interface POILocationMapProps {
  poiCoordinates: [number, number];
  poiName: string;
  userLocation: UserLocation | null;
}

export const POILocationMap = ({ poiCoordinates, poiName, userLocation }: POILocationMapProps) => {
  const distance = userLocation 
    ? calculateDistance(
        userLocation.latitude,
        userLocation.longitude,
        poiCoordinates[0],
        poiCoordinates[1]
      )
    : null;

  return (
    <div className="bg-card border border-border rounded-lg p-4 space-y-3" style={{ boxShadow: 'var(--shadow-soft)' }}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Location</h3>
        {distance && (
          <span className="text-sm text-muted-foreground">{distance}</span>
        )}
      </div>

      {/* Mini Map Visualization */}
      <div className="relative w-full h-32 bg-muted/30 rounded-lg overflow-hidden border border-border/50">
        {/* Grid pattern for map effect */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
        
        {/* POI Marker - always centered */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="relative">
            <MapPin className="w-8 h-8 text-primary fill-primary/20" />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-foreground bg-background/90 px-2 py-1 rounded">
              {poiName}
            </div>
          </div>
        </div>

        {/* User Location Marker */}
        {userLocation && (
          <div 
            className="absolute z-20"
            style={{
              top: '70%',
              left: '30%',
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" style={{ width: '24px', height: '24px' }} />
              <Navigation className="w-6 h-6 text-primary fill-primary relative z-10" />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-primary bg-background/90 px-2 py-1 rounded">
                You
              </div>
            </div>
          </div>
        )}

        {/* Connection line between user and POI */}
        {userLocation && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <line
              x1="30%"
              y1="70%"
              x2="50%"
              y2="50%"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity="0.4"
            />
          </svg>
        )}
      </div>

      {!userLocation && (
        <p className="text-xs text-muted-foreground text-center">
          Enable location to see your position
        </p>
      )}
    </div>
  );
};
