import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cataniaPoints } from '@/data/cataniaPoints';
import { useGeolocation } from '@/hooks/useGeolocation';
import { calculateDistance } from '@/utils/distance';
import { POICard } from '@/components/POICard';
import { MapView } from '@/components/MapView';
import { BottomNav } from '@/components/BottomNav';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Loader2, Landmark, ArrowLeft, Car, UtensilsCrossed } from 'lucide-react';
import { PointOfInterest } from '@/types/tour';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/data/translations';
import { guideData } from '@/data/guideData';

const CataniaPage = () => {
  const [activeTab, setActiveTab] = useState<'map' | 'list' | 'park' | 'eat' | 'info'>('list');
  const { location, error, isLoading } = useGeolocation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const copy = getTranslations(language);
  const italy = guideData.find((country) => country.countrySlug === 'italy');
  const totalDuration = cataniaPoints.reduce((sum, p) => sum + p.duration, 0);

  const handlePOIClick = (poi: PointOfInterest) => {
    navigate(`/italy/catania/poi/${poi.id}`);
  };

  const sortedPoints = location
    ? [...cataniaPoints].sort((a, b) => {
        const distA = calculateDistance(location.latitude, location.longitude, a.coordinates[0], a.coordinates[1]);
        const distB = calculateDistance(location.latitude, location.longitude, b.coordinates[0], b.coordinates[1]);
        return distA - distB;
      })
    : cataniaPoints;

  const historicPoints = sortedPoints.filter(p => p.category !== 'park' && p.category !== 'eat');
  const parkPoints = sortedPoints.filter(p => p.category === 'park');
  const eatPoints = sortedPoints.filter(p => p.category === 'eat');

  const renderContent = () => {
    if (activeTab === 'map') {
      return (
        <div className="h-[calc(100vh-8rem)]">
          <MapView
            points={cataniaPoints}
            userLocation={location}
            onPOISelect={handlePOIClick}
            translationKey="catania"
          />
        </div>
      );
    }

    if (activeTab === 'info') {
      return (
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          <div className="text-center space-y-3">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto" style={{ boxShadow: 'var(--shadow-medium)' }}>
              <Landmark className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">{copy.catania.infoHeroTitle}</h1>
            <p className="text-muted-foreground">
              {copy.catania.infoHeroSubtitle}
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border space-y-4" style={{ boxShadow: 'var(--shadow-soft)' }}>
            <h2 className="text-xl font-semibold text-foreground">{copy.catania.aboutTitle}</h2>
            <p className="text-foreground leading-relaxed">
              {copy.catania.aboutDescription}
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {copy.catania.features.poiCount(historicPoints.length)}</li>
              <li>• {copy.catania.features.gps}</li>
              <li>• {copy.catania.features.audio}</li>
              <li>• {copy.catania.features.gallery}</li>
              <li>• {copy.catania.features.totalDuration(totalDuration)}</li>
            </ul>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: copy.catania.parkAndGoTitle,
                description: copy.catania.parkAndGoDescription,
              },
              {
                title: copy.catania.foodTitle,
                description: copy.catania.foodDescription,
              },
            ].map((section) => (
              <div
                key={section.title}
                className="bg-card rounded-lg p-6 border border-border space-y-2"
                style={{ boxShadow: 'var(--shadow-soft)' }}
              >
                <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{section.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-lg p-6 border border-border space-y-3" style={{ boxShadow: 'var(--shadow-soft)' }}>
            <h3 className="font-semibold text-foreground">{copy.catania.howToUseTitle}</h3>
            <ol className="space-y-2 text-sm text-foreground list-decimal list-inside">
              {copy.catania.howToUseSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      );
    }

    if (activeTab === 'park') {
      return (
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-foreground">{copy.catania.parkAndGoTitle}</h1>
            <p className="text-muted-foreground">{copy.catania.parkAndGoDescription}</p>
          </div>
          <div className="space-y-4">
            {parkPoints.map((poi) => {
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
    }

    if (activeTab === 'eat') {
      return (
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
           <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-foreground">{copy.catania.foodTitle}</h1>
            <p className="text-muted-foreground">{copy.catania.foodDescription}</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {eatPoints.map((poi) => (
              <AccordionItem value={poi.id} key={poi.id}>
                <AccordionTrigger>{poi.name[language]}</AccordionTrigger>
                <AccordionContent>
                  <p>{poi.description[language]}</p>
                  <p>Price: {poi.price}</p>
                  <a href={poi.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    Open in Google Maps
                  </a>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      );
    }

    return (
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">{copy.catania.listHeading}</h1>
          {isLoading && (
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-sm">{copy.catania.loading}</span>
            </div>
          )}
          {location && (
            <p className="text-sm text-primary font-medium">
              📍 {copy.catania.locationActive}
            </p>
          )}
          {error && (
            <p className="text-sm text-destructive">
              {copy.catania.locationError}
              <span className="block text-xs text-muted-foreground mt-1">{error}</span>
            </p>
          )}
        </div>

        <div className="space-y-4">
          {historicPoints.map((poi) => {
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
      <img src="https://i.imgur.com/zlsGy90.jpeg" alt="Catania" className="w-full h-48 object-cover" />
      <div className="fixed top-0 left-0 z-40 p-4">
        <Button
          variant="ghost"
          onClick={() => navigate('/italy')}
          className="px-2"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {italy?.name[language] ?? 'Italy'}
        </Button>
      </div>
      {renderContent()}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default CataniaPage;
