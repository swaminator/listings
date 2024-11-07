import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bed, Bath, Square, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    price: number;
    location: string;
    image: string;
    beds: number;
    baths: number;
    sqft: number;
    type: string;
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white"
        >
          <Heart className="h-5 w-5" />
        </Button>
        <Badge className="absolute bottom-2 left-2">{property.type}</Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-1">{property.title}</h3>
        <p className="text-2xl font-bold text-primary mb-2">
          ${property.price.toLocaleString()}
        </p>
        <p className="text-muted-foreground text-sm mb-4">{property.location}</p>
        <div className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{property.beds} beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{property.baths} baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4" />
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
}