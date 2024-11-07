import { Building2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[500px] bg-gradient-to-r from-primary/90 to-primary">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9')] bg-cover bg-center mix-blend-overlay" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="h-8 w-8" />
            <h1 className="text-2xl font-bold">DreamDwelling</h1>
          </div>
          <h2 className="text-5xl font-bold mb-4">Find Your Perfect Home</h2>
          <p className="text-xl text-white/90 max-w-2xl">
            Discover an extensive collection of properties tailored to your lifestyle. From cozy apartments to luxury estates, find your dream home today.
          </p>
        </div>
      </div>
    </div>
  );
}