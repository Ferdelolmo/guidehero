import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ImageGallery } from '@/components/ImageGallery';
import { AudioPlayer } from '@/components/AudioPlayer';
import { POILocationMap } from '@/components/POILocationMap';
import { useGeolocation } from '@/hooks/useGeolocation';
import { ArrowLeft, MapPin, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/data/translations';
import { cityDatasets } from '@/data/cityPoints';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const POIDetail = () => {
  const { countrySlug, citySlug, id } = useParams();
  const navigate = useNavigate();
  const { location } = useGeolocation();
  const { language } = useLanguage();
  const copy = getTranslations(language);
  const dataset = citySlug ? cityDatasets[citySlug] : undefined;
  const points = dataset?.points ?? [];
  const poi = points.find((p) => p.id === id);
  const totalStops = points.length;
  const expectedCountrySlug = dataset?.countrySlug;
  const cityRoute =
    expectedCountrySlug && citySlug
      ? `/${expectedCountrySlug}/${citySlug}`
      : countrySlug && citySlug
        ? `/${countrySlug}/${citySlug}`
        : '/';

  const isMismatch = countrySlug && expectedCountrySlug && countrySlug !== expectedCountrySlug;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [id]);

  if (!dataset || isMismatch) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">{copy.poiDetail.notFoundTitle}</h2>
          <Button onClick={() => navigate('/')} variant="default">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {copy.poiDetail.notFoundCta}
          </Button>
        </div>
      </div>
    );
  }

  if (!poi) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">{copy.poiDetail.notFoundTitle}</h2>
          <Button onClick={() => navigate(cityRoute)} variant="default">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {copy.poiDetail.notFoundCta}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-card border-b border-border" style={{ boxShadow: 'var(--shadow-soft)' }}>
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(cityRoute)}
            className="hover:bg-muted"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold text-foreground flex-1 truncate">{poi.name[language]}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Image Gallery */}
        <ImageGallery images={poi.images} alt={poi.name[language]} videoUrl={poi.videoUrl} />

        {/* Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              {copy.categories[poi.category]}
            </Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{copy.poiDetail.durationLabel(poi.duration)}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{copy.poiDetail.stopOf(poi.order, totalStops)}</span>
            </div>
          </div>

          <div className="prose prose-sm max-w-none">
            <p className="text-foreground leading-relaxed">{poi.description[language]}</p>
          </div>
        </div>

        {/* Location Map */}
        <POILocationMap 
          poiCoordinates={poi.coordinates}
          poiName={poi.name[language]}
          userLocation={location}
        />

        {/* Audio Player */}
        {poi.audioUrl && (
          <AudioPlayer audioUrl={poi.audioUrl[language]} title={copy.poiDetail.audioGuideTitle(poi.name[language])} />
        )}

        {poi.extendedSections?.length ? (
          <Accordion
            type="single"
            collapsible
            className="overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/5 via-amber-50/40 to-rose-50/60 shadow-inner"
          >
            <AccordionItem value="extended-description" className="border-none">
              <AccordionTrigger className="flex items-center gap-4 px-5 text-left no-underline hover:no-underline">
                <div className="flex flex-1 flex-col items-start gap-1 text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/70">
                    {copy.poiDetail.deepDiveHeading}
                  </p>
                  <h2 className="text-xl font-semibold text-foreground md:text-2xl">
                    {poi.name[language]}
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-6">
                <div className="space-y-4 text-base leading-7 text-foreground">
                  {poi.extendedSections.map((section, index) => (
                    <div key={index}>
                      {section.title && <h3 className="text-lg font-semibold">{section.title[language]}</h3>}
                      {section.paragraphs.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="relative overflow-hidden rounded-xl bg-white/70 px-4 py-3 text-base leading-7 text-foreground shadow-sm ring-1 ring-white/40 backdrop-blur"
                        >
                          {paragraph[language]}
                        </p>
                      ))}
                      {section.listItems && (
                        <ul className="list-disc pl-5">
                          {section.listItems.map((item, lIndex) => (
                            <li key={lIndex}>{item[language]}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : null}

        {/* Navigation buttons */}
        <div className="flex gap-3 pt-4">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => {
              const currentIndex = points.findIndex((p) => p.id === poi.id);
              const prevPOI = points[currentIndex - 1];
              if (prevPOI && expectedCountrySlug && citySlug) {
                navigate(`/${expectedCountrySlug}/${citySlug}/poi/${prevPOI.id}`);
              }
            }}
            disabled={poi.order === 1}
          >
            {copy.poiDetail.previous}
          </Button>
          <Button
            variant="default"
            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => {
              const currentIndex = points.findIndex((p) => p.id === poi.id);
              const nextPOI = points[currentIndex + 1];
              if (nextPOI && expectedCountrySlug && citySlug) {
                navigate(`/${expectedCountrySlug}/${citySlug}/poi/${nextPOI.id}`);
              }
            }}
            disabled={poi.order === points.length}
          >
            {copy.poiDetail.next}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default POIDetail;
