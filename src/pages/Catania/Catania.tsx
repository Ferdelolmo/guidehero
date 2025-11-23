import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGeolocation } from '@/hooks/useGeolocation';
import { calculateDistance } from '@/utils/distance';
import { POICard } from '@/components/POICard';
import { MapView } from '@/components/MapView';
import { BottomNav } from '@/components/BottomNav';
import { Button } from '@/components/ui/button';
import { Loader2, ArrowLeft, Car, UtensilsCrossed, ExternalLink } from 'lucide-react';
import { PointOfInterest } from '@/types/tour';
import { useLanguage } from '@/contexts/LanguageContext';
import { guideData } from '@/data/guideData';
import { getCataniaPlacesContent } from '@/pages/Catania/CataniaPlaces';
import { getCataniaParkContent } from '@/pages/Catania/CataniaPark';
import { getCataniaEatContent } from '@/pages/Catania/CataniaEat';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const CataniaPage = () => {
  const [activeTab, setActiveTab] = useState<'map' | 'places' | 'park' | 'eat'>('places');
  const { location, error, isLoading } = useGeolocation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const italy = guideData.find((country) => country.countrySlug === 'italy');
  const placesContent = getCataniaPlacesContent(language);
  const parkContent = getCataniaParkContent(language);
  const eatContent = getCataniaEatContent(language);

  const handlePOIClick = (poi: PointOfInterest) => {
    navigate(`/italy/catania/poi/${poi.id}`);
  };

  const sortedPoints = location
    ? [...placesContent.points].sort((a, b) => {
        const distA = calculateDistance(location.latitude, location.longitude, a.coordinates[0], a.coordinates[1]);
        const distB = calculateDistance(location.latitude, location.longitude, b.coordinates[0], b.coordinates[1]);
        return distA - distB;
      })
    : placesContent.points;

  const renderContent = () => {
    if (activeTab === 'map') {
      return (
        <div className="h-[calc(100vh-8rem)]">
          <MapView
            points={placesContent.points}
            userLocation={location}
            onPOISelect={handlePOIClick}
            translationKey="catania"
          />
        </div>
      );
    }

    if (activeTab === 'park') {
      return (
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          <div className="bg-card rounded-lg p-6 border border-border space-y-4 text-center" style={{ boxShadow: 'var(--shadow-soft)' }}>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Car className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">{parkContent.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {parkContent.description}
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === 'eat') {
      return (
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          <div className="bg-card rounded-xl border border-border overflow-hidden" style={{ boxShadow: 'var(--shadow-soft)' }}>
            <div className="h-48 w-full overflow-hidden">
              <img
                src={eatContent.heroImage}
                alt="Traditional Sicilian pranzo spread"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <UtensilsCrossed className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">{eatContent.title}</h2>
                  <p className="text-sm text-muted-foreground">{eatContent.description}</p>
                </div>
              </div>
            </div>
          </div>

          <Accordion type="multiple" className="space-y-4">
            <AccordionItem value="cuisine-basics" className="border border-border rounded-lg px-4" style={{ boxShadow: 'var(--shadow-soft)' }}>
              <AccordionTrigger className="text-left text-lg font-semibold">Sicilian cuisine essentials</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {eatContent.cuisineDescription}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="dishes" className="border border-border rounded-lg px-4" style={{ boxShadow: 'var(--shadow-soft)' }}>
              <AccordionTrigger className="text-left text-lg font-semibold">Typical dishes</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {eatContent.typicalDishes.map((dish) => (
                    <div key={dish.name} className="rounded-lg border border-border p-4 bg-muted/30">
                      <h3 className="text-base font-semibold text-foreground">{dish.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-1">{dish.description}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="restaurants" className="border border-border rounded-lg px-4" style={{ boxShadow: 'var(--shadow-soft)' }}>
              <AccordionTrigger className="text-left text-lg font-semibold">Restaurant recommendations</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {eatContent.restaurants.map((restaurant) => (
                    <div key={restaurant.name} className="rounded-lg border border-border p-4 space-y-3 bg-card/50">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-base font-semibold text-foreground">{restaurant.name}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{restaurant.description}</p>
                        </div>
                        <Badge variant="secondary" className="w-fit capitalize">
                          {restaurant.priceLabel}
                        </Badge>
                      </div>
                      <a
                        href={restaurant.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      >
                        View on Google Maps
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      );
    }

    return (
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">{placesContent.heading}</h1>
          {isLoading && (
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-sm">{placesContent.loading}</span>
            </div>
          )}
          {location && (
            <p className="text-sm text-primary font-medium">
              📍 {placesContent.locationActive}
            </p>
          )}
          {error && (
            <p className="text-sm text-destructive">
              {placesContent.locationError}
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
          onClick={() => navigate('/italy')}
          className="px-2"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {italy?.name[language] ?? 'Italy'}
        </Button>
      </div>
      {renderContent()}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} tabs={['map', 'places', 'park', 'eat']} />
    </div>
  );
};

export default CataniaPage;
