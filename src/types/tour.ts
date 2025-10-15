export interface PointOfInterest {
  id: string;
  name: string;
  description: string;
  coordinates: [number, number]; // [latitude, longitude]
  images: string[];
  audioUrl?: string;
  category: 'monument' | 'church' | 'museum' | 'viewpoint' | 'square';
  duration: number; // minutes
  order: number;
}

export interface UserLocation {
  latitude: number;
  longitude: number;
  accuracy: number;
}
