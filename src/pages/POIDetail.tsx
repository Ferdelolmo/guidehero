import { useParams, useNavigate } from 'react-router-dom';
import { avilaPoints } from '@/data/avilaPoints';
import { Button } from '@/components/ui/button';
import { ImageGallery } from '@/components/ImageGallery';
import { AudioPlayer } from '@/components/AudioPlayer';
import { POILocationMap } from '@/components/POILocationMap';
import { useGeolocation } from '@/hooks/useGeolocation';
import { ArrowLeft, MapPin, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/data/translations';

const POIDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const poi = avilaPoints.find(p => p.id === id);
  const { location } = useGeolocation();
  const { language } = useLanguage();
  const copy = getTranslations(language);
  const totalStops = avilaPoints.length;

  if (!poi) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">{copy.poiDetail.notFoundTitle}</h2>
          <Button onClick={() => navigate('/spain/avila')} variant="default">
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
            onClick={() => navigate('/spain/avila')}
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
        <ImageGallery images={poi.images} alt={poi.name[language]} />

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
          <AudioPlayer audioUrl={poi.audioUrl} title={copy.poiDetail.audioGuideTitle(poi.name[language])} />
        )}

        {/* Navigation buttons */}
        <div className="flex gap-3 pt-4">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => {
              const currentIndex = avilaPoints.findIndex(p => p.id === poi.id);
              const prevPOI = avilaPoints[currentIndex - 1];
              if (prevPOI) navigate(`/spain/avila/poi/${prevPOI.id}`);
            }}
            disabled={poi.order === 1}
          >
            {copy.poiDetail.previous}
          </Button>
          <Button
            variant="default"
            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => {
              const currentIndex = avilaPoints.findIndex(p => p.id === poi.id);
              const nextPOI = avilaPoints[currentIndex + 1];
              if (nextPOI) navigate(`/spain/avila/poi/${nextPOI.id}`);
            }}
            disabled={poi.order === avilaPoints.length}
          >
            {copy.poiDetail.next}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default POIDetail;
