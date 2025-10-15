import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Play, Pause, Volume2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/data/translations';

interface AudioPlayerProps {
  audioUrl: string;
  title: string;
}

export const AudioPlayer = ({ audioUrl, title }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { language } = useLanguage();
  const copy = getTranslations(language);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = value[0];
    setCurrentTime(value[0]);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 space-y-3" style={{ boxShadow: 'var(--shadow-soft)' }}>
      <audio ref={audioRef} src={audioUrl} />
      
      <div className="flex items-center gap-3">
        <Volume2 className="w-5 h-5 text-primary" />
        <span className="text-sm font-medium text-foreground">{title}</span>
      </div>

      <Slider
        value={[currentTime]}
        max={duration || 100}
        step={1}
        onValueChange={handleSeek}
        className="cursor-pointer"
      />

      <div className="flex items-center justify-between">
        <Button
          variant="default"
          size="sm"
          onClick={togglePlay}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4 mr-2" />
              {copy.audioPlayer.pause}
            </>
          ) : (
            <>
              <Play className="w-4 h-4 mr-2" />
              {copy.audioPlayer.play}
            </>
          )}
        </Button>
        <span className="text-sm text-muted-foreground">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>
    </div>
  );
};
