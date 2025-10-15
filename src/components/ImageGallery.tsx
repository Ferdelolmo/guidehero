import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export const ImageGallery = ({ images, alt }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-medium)' }}>
      <img
        src={images[currentIndex]}
        alt={`${alt} - ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
      
      {images.length > 1 && (
        <>
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
            onClick={goToPrevious}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
            onClick={goToNext}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-6'
                    : 'bg-background/60 hover:bg-background/80'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
