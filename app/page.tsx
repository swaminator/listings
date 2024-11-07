import PropertyGrid from '@/components/PropertyGrid';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <SearchBar />
        <PropertyGrid />
      </div>
    </main>
  );
}