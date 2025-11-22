import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { guideData } from '@/data/guideData';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/data/translations';
import guideHeroLogo from '@/gallery/logo.png';

const Index = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const copy = getTranslations(language);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-amber-200/40">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-16">
        <header className="mx-auto max-w-4xl text-center space-y-5">
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-3xl bg-white shadow-xl ring-1 ring-border/40">
            <img
              src={guideHeroLogo}
              alt="GuideHero logo"
              className="h-32 w-32 object-contain"
            />
          </div>
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/70"> </span>
            <h1 className="text-4xl font-bold text-foreground"></h1>
          </div>
          <p className="text-base text-muted-foreground">
            {copy.home.tagline}
          </p>

        </header>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          {guideData.map((country) => (
            <Card
              key={country.countrySlug}
              className="relative h-72 overflow-hidden border-none text-white shadow-lg transition-transform hover:translate-y-[-4px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${country.backgroundImageUrl})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
              <div className="relative flex h-full flex-col justify-between p-6">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/70">{copy.home.countryGuideLabel}</p>
                  <h2 className="text-3xl font-semibold">{country.name[language]}</h2>
                  <p className="max-w-sm text-sm text-white/80">{country.description[language]}</p>
                </div>
                <Button
                  variant="secondary"
                  className="self-start bg-white/90 text-primary hover:bg-white"
                  onClick={() => navigate(`/${country.countrySlug}`)}
                >
                  {copy.home.viewCitiesCta}
                </Button>
              </div>
            </Card>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Index;
