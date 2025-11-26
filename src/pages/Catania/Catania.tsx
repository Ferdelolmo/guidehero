import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGeolocation } from '@/hooks/useGeolocation';
import { calculateDistance } from '@/utils/distance';
import { POICard } from '@/components/POICard';
import { MapView } from '@/components/MapView';
import { BottomNav } from '@/components/BottomNav';
import { Button } from '@/components/ui/button';
import { Loader2, ArrowLeft, Car, UtensilsCrossed, ExternalLink, Sparkles } from 'lucide-react';
import { PointOfInterest } from '@/types/tour';
import { useLanguage } from '@/contexts/LanguageContext';
import { guideData } from '@/data/guideData';
import { getCataniaPlacesContent } from '@/pages/Catania/CataniaPlaces';
import { getCataniaParkContent } from '@/pages/Catania/CataniaPark';
import { getCataniaEatContent } from '@/pages/Catania/CataniaEat';
import { getCataniaFunFactsContent } from '@/pages/Catania/CataniaFunFacts';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const CataniaPage = () => {
  const [activeTab, setActiveTab] = useState<'map' | 'places' | 'park' | 'eat' | 'fun-facts'>('places');
  const { location, error, isLoading } = useGeolocation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const italy = guideData.find((country) => country.countrySlug === 'italy');
  const placesContent = getCataniaPlacesContent(language);
  const parkContent = getCataniaParkContent(language);
  const eatContent = getCataniaEatContent(language);
  const funFactsContent = getCataniaFunFactsContent(language);
  const renderCuisineParagraph = (paragraph: string, index: number) => (
    <p
      key={`cuisine-paragraph-${index}`}
      className="m-0"
      dangerouslySetInnerHTML={{ __html: paragraph }}
    />
  );

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
        <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
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

          <div className="space-y-4">
            <div className="grid gap-4 xl:grid-cols-2">
              {parkContent.sections.map((section) => (
                <section
                  key={section.title}
                  className="rounded-xl border border-border bg-card/70 p-5 text-sm shadow-sm"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-semibold text-foreground">{section.title}</h3>
                    <Badge
                      variant="outline"
                      className="text-[0.65rem] font-semibold uppercase tracking-wide"
                    >
                      {parkContent.labels[section.type]}
                    </Badge>
                  </div>

                  {section.hints.length > 0 && (
                    <ul className="mt-3 space-y-1 text-xs text-muted-foreground list-disc list-inside">
                      {section.hints.map((hint) => (
                        <li key={hint}>{hint}</li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-4 space-y-3">
                    {section.spots.map((spot) => (
                      <article
                        key={spot.name}
                        className="rounded-lg border border-border/70 bg-muted/20 p-4"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="text-sm font-semibold text-foreground">{spot.name}</h4>
                          <Badge
                            variant="secondary"
                            className="text-[0.65rem] font-semibold uppercase tracking-wide"
                          >
                            {parkContent.labels[spot.type]}
                          </Badge>
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                          {spot.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
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
              <AccordionTrigger className="text-left text-lg font-semibold">{eatContent.cuisineHeading}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed space-y-4">
                {eatContent.cuisineDescription.split('\n\n').map((paragraph, index) => renderCuisineParagraph(paragraph, index))}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="dishes" className="border border-border rounded-lg px-4" style={{ boxShadow: 'var(--shadow-soft)' }}>
              <AccordionTrigger className="text-left text-lg font-semibold">{eatContent.typicalDishesHeading}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {eatContent.typicalDishes.map((dish) => (
                    <div key={dish.name} className="rounded-lg border border-border bg-muted/30 overflow-hidden">
                      <div className="h-40 w-full overflow-hidden">
                        <img src={dish.image} alt={dish.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="p-4">
                        <h3 className="text-base font-semibold text-foreground">{dish.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-1">{dish.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="restaurants" className="border border-border rounded-lg px-4" style={{ boxShadow: 'var(--shadow-soft)' }}>
              <AccordionTrigger className="text-left text-lg font-semibold">{eatContent.restaurantsHeading}</AccordionTrigger>
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
                        {eatContent.viewOnMapsLabel}
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

    if (activeTab === 'fun-facts') {
      return (
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          <div className="bg-card rounded-xl border border-border overflow-hidden" style={{ boxShadow: 'var(--shadow-soft)' }}>
            <div className="h-48 w-full overflow-hidden">
              <img
                src={funFactsContent.heroImage}
                alt="Catania Fun Facts"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">{funFactsContent.title}</h2>
                  <p className="text-sm text-muted-foreground">{funFactsContent.description}</p>
                </div>
              </div>
            </div>
          </div>

          <Accordion type="multiple" className="space-y-4">
            {funFactsContent.facts.map((fact, index) => (
              <AccordionItem key={index} value={`fact-${index}`} className="border border-border rounded-lg px-4" style={{ boxShadow: 'var(--shadow-soft)' }}>
                <AccordionTrigger className="text-left text-lg font-semibold">{fact.title}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {fact.content}
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

        <div className="w-full flex justify-center">
          <div className="w-full max-w-[300px] mx-auto overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/cCLAG7wuWIg?autoplay=1&loop=1&mute=1&playlist=cCLAG7wuWIg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              style={{ aspectRatio: '9 / 16' }}
            ></iframe>
          </div>
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
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} tabs={['map', 'places', 'park', 'eat', 'fun-facts']} />
    </div>
  );
};

export default CataniaPage;
