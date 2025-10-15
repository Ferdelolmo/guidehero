import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
import { guideData } from '@/data/guideData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/data/translations';

const CountryPage = () => {
  const { countrySlug } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const copy = getTranslations(language);

  const country = useMemo(
    () => guideData.find((item) => item.countrySlug === countrySlug),
    [countrySlug]
  );

  if (!country) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-semibold text-foreground">{copy.country.notFoundTitle}</h2>
          <p className="text-muted-foreground">
            {copy.country.notFoundMessage}
          </p>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {copy.country.notFoundCta}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="fixed top-0 right-0 z-40 p-4">
        <LanguageSelector />
      </div>

      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-10 md:py-16">
        <div className="flex items-center gap-3">
          <Button variant="ghost" onClick={() => navigate('/')} className="px-2">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {copy.country.back}
          </Button>
          <div className="h-12 w-12 overflow-hidden rounded-full border border-border bg-card">
            <img
              src={country.flagImageUrl}
              alt={`Flag of ${country.name[language]}`}
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">{country.name[language]}</h1>
        </div>
        <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">{country.description[language]}</p>

        <div className="relative mt-8 overflow-hidden rounded-2xl border border-border" style={{ boxShadow: 'var(--shadow-medium)' }}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${country.backgroundImageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/70 to-background/90" />
          <div className="relative flex flex-col gap-4 p-8 text-foreground md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">{copy.country.heroTitle}</h2>
              <p className="text-sm text-muted-foreground md:text-base">
                {copy.country.heroSubtitle}
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {copy.country.cityCount(country.cities.length)}
            </div>
          </div>
        </div>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          {country.cities.map((city) => (
            <Card key={city.citySlug} className="flex h-full flex-col overflow-hidden">
              <div className="h-44 w-full bg-muted">
                <img
                  src={city.imageUrl}
                  alt={`${city.name[language]} city highlight`}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{city.name[language]}</CardTitle>
                <CardDescription>{city.description[language]}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                {city.available ? (
                  <p className="text-sm text-muted-foreground">
                    {copy.country.availableMessage}
                  </p>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    {copy.country.comingSoonMessage}
                  </p>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() => city.available && navigate(`/${country.countrySlug}/${city.citySlug}`)}
                  disabled={!city.available}
                >
                  {city.available ? copy.country.ctaAvailable : copy.country.ctaUnavailable}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </section>
      </div>
    </div>
  );
};

export default CountryPage;
