
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/data/translations';
import { palaces } from '@/data/palaces';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MapPin } from 'lucide-react';

const RutaDeLosPalaciosPage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const copy = getTranslations(language);
  const detailsCopy = copy.rutaDeLosPalacios;
  const fallbackImage = 'https://placehold.co/600x400?text=Palacio';

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="fixed top-0 left-0 z-40 p-4">
        <Button
          variant="ghost"
          onClick={() => navigate('/spain/avila')}
          className="px-2"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {copy.avila.title}
        </Button>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">{copy.rutaDeLosPalacios.title}</h1>
          <p className="text-muted-foreground text-lg">
            {copy.rutaDeLosPalacios.description}
          </p>
        </div>

        <div className="space-y-12">
          {palaces.map((palace) => {
            const name = palace.name[language] ?? palace.name.en;
            const description = palace.description[language] ?? palace.description.en;
            const addressValue = palace.address[language] ?? palace.address.en;
            const address = addressValue?.trim();
            const addressText = address && address.length > 0 ? address : detailsCopy.notAvailable;
            const accessLabel = detailsCopy.accessTags[palace.publicAccess];
            const entryLabel = detailsCopy.entryTags[palace.entryType];
            const imageSrc = palace.image || fallbackImage;

            return (
              <div
                key={palace.id}
                className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="aspect-video w-full bg-muted">
                  <img
                    src={imageSrc}
                    alt={name}
                    onError={(event) => {
                      if (event.currentTarget.src !== fallbackImage) {
                        event.currentTarget.src = fallbackImage;
                      }
                    }}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h2 className="text-2xl font-semibold text-primary">{name}</h2>
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`${palace.id}-details`} className="border-none">
                      <AccordionTrigger className="px-0 text-left text-base font-medium">
                        {detailsCopy.accordionLabel}
                      </AccordionTrigger>
                      <AccordionContent className="space-y-5 px-0 pt-4">
                        <div className="grid gap-3 sm:grid-cols-2">
                          <div className="space-y-1">
                            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                              {detailsCopy.detailLabels.access}
                            </p>
                            <Badge variant="secondary" className="w-fit">
                              {accessLabel}
                            </Badge>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                              {detailsCopy.detailLabels.entry}
                            </p>
                            <Badge variant="secondary" className="w-fit">
                              {entryLabel}
                            </Badge>
                          </div>
                        </div>
                        <div className="space-y-4 text-sm leading-relaxed text-foreground">
                          <div>
                            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              <span>{detailsCopy.detailLabels.address}</span>
                            </div>
                            <p className="mt-1 text-base">{addressText}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                              {detailsCopy.detailLabels.description}
                            </p>
                            <p className="mt-1 text-base">{description}</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="bg-card rounded-xl p-6 border border-border mt-12 space-y-4">
            <h2 className="text-xl font-semibold text-foreground">{copy.rutaDeLosPalacios.historicalContextTitle}</h2>
            <p className="text-foreground leading-relaxed">
              {copy.rutaDeLosPalacios.historicalContext}
            </p>
          </div>

      </div>
    </div>
  );
};

export default RutaDeLosPalaciosPage;
