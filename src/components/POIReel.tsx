import React from 'react';

interface POIReelProps {
  src: string;
}

export const POIReel: React.FC<POIReelProps> = ({ src }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[300px] mx-auto overflow-hidden rounded-lg shadow-lg" style={{ maxHeight: '60vh' }}>
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
