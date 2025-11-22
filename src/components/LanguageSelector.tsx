import { Languages } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Language } from '@/types/i18n';

const languages = [
  { code: 'en' as Language, flag: '🇬🇧' },
  { code: 'es' as Language, flag: '🇪🇸' },
  { code: 'it' as Language, flag: '🇮🇹' },
  { code: 'pt' as Language, flag: '🇵🇹' },
  { code: 'fr' as Language, flag: '🇫🇷' },
];

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const currentLanguage = languages.find(l => l.code === language);

  return (
    <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
      <SelectTrigger className="w-auto bg-card border-border px-3">
        <div className="flex items-center gap-2">
          <Languages className="w-4 h-4" />
          <SelectValue>
            <span>{currentLanguage?.flag}</span>
          </SelectValue>
        </div>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            <span className="flex items-center gap-2">
              <span>{lang.flag}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
