import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { avilaPoints } from '@/data/avilaPoints';
import { useGeolocation } from '@/hooks/useGeolocation';
import { calculateDistance } from '@/utils/distance';
import { POICard } from '@/components/POICard';
import { MapView } from '@/components/MapView';
import { BottomNav } from '@/components/BottomNav';
import { LanguageSelector } from '@/components/LanguageSelector';
import { Button } from '@/components/ui/button';
import { Loader2, Castle, ArrowLeft } from 'lucide-react';
import { PointOfInterest } from '@/types/tour';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/data/translations';
import { guideData } from '@/data/guideData';

const AvilaPage = () => {
  const [activeTab, setActiveTab] = useState<'map' | 'list' | 'info'>('list');
  const { location, error, isLoading } = useGeolocation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const copy = getTranslations(language);
  const spain = guideData.find((country) => country.countrySlug === 'spain');
  const totalDuration = avilaPoints.reduce((sum, p) => sum + p.duration, 0);

  const handlePOIClick = (poi: PointOfInterest) => {
    navigate(`/spain/avila/poi/${poi.id}`);
  };

  const sortedPoints = location
    ? [...avilaPoints].sort((a, b) => {
        const distA = calculateDistance(location.latitude, location.longitude, a.coordinates[0], a.coordinates[1]);
        const distB = calculateDistance(location.latitude, location.longitude, b.coordinates[0], b.coordinates[1]);
        return distA - distB;
      })
    : avilaPoints;

  const renderContent = () => {
    if (activeTab === 'map') {
      return (
        <div className="h-[calc(100vh-8rem)]">
          <MapView 
            points={avilaPoints} 
            userLocation={location} 
            onPOISelect={handlePOIClick}
          />
        </div>
      );
    }

    if (activeTab === 'info') {
      return (
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          <div className="text-center space-y-3">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto" style={{ boxShadow: 'var(--shadow-medium)' }}>
              <Castle className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">{copy.avila.infoHeroTitle}</h1>
            <p className="text-muted-foreground">
              {copy.avila.infoHeroSubtitle}
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border space-y-4" style={{ boxShadow: 'var(--shadow-soft)' }}>
            <h2 className="text-xl font-semibold text-foreground">{copy.avila.aboutTitle}</h2>
            <p className="text-foreground leading-relaxed">
              {copy.avila.aboutDescription}
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {copy.avila.features.poiCount(avilaPoints.length)}</li>
              <li>• {copy.avila.features.gps}</li>
              <li>• {copy.avila.features.audio}</li>
              <li>• {copy.avila.features.gallery}</li>
              <li>• {copy.avila.features.totalDuration(totalDuration)}</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border space-y-3" style={{ boxShadow: 'var(--shadow-soft)' }}>
            <h3 className="font-semibold text-foreground">{copy.avila.howToUseTitle}</h3>
            <ol className="space-y-2 text-sm text-foreground list-decimal list-inside">
              {copy.avila.howToUseSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      );
    }

    return (
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">{copy.avila.listHeading}</h1>
          {isLoading && (
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-sm">{copy.avila.loading}</span>
            </div>
          )}
          {location && (
            <p className="text-sm text-primary font-medium">
              📍 {copy.avila.locationActive}
            </p>
          )}
          {error && (
            <p className="text-sm text-destructive">
              {copy.avila.locationError}
              <span className="block text-xs text-muted-foreground mt-1">{error}</span>
            </p>
          )}
        </div>

        <div className="space-y-4">
          {sortedPoints.map((poi) => {
            const distance = location
              ? calculateDistance(location.latitude, location.longitude, poi.coordinates[0], poi.coordinates[1])
              : undefined;
            
            return (
              <POICard
                key={poi.id}
                poi={poi}
                distance={distance}
                onClick={() => handlePOIClick(poi)}
              />
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="fixed top-0 left-0 z-40 p-4">
        <Button
          variant="ghost"
          onClick={() => navigate('/spain')}
          className="px-2"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {spain?.name[language] ?? 'Spain'}
        </Button>
      </div>
      <div className="fixed top-0 right-0 z-40 p-4">
        <LanguageSelector />
      </div>
      {renderContent()}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default AvilaPage;
