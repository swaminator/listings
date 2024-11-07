"use client";

import PropertyCard from './PropertyCard';

const SAMPLE_PROPERTIES = [
  {
    id: "1",
    title: "Modern Waterfront Villa",
    price: 1250000,
    location: "Miami Beach, FL",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
    beds: 4,
    baths: 3,
    sqft: 3200,
    type: "House"
  },
  {
    id: "2",
    title: "Downtown Luxury Apartment",
    price: 750000,
    location: "Manhattan, NY",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    beds: 2,
    baths: 2,
    sqft: 1800,
    type: "Apartment"
  },
  {
    id: "3",
    title: "Suburban Family Home",
    price: 550000,
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    beds: 3,
    baths: 2.5,
    sqft: 2400,
    type: "House"
  },
  {
    id: "4",
    title: "Mountain View Condo",
    price: 425000,
    location: "Denver, CO",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    beds: 2,
    baths: 2,
    sqft: 1500,
    type: "Condo"
  },
  {
    id: "5",
    title: "Beachfront Paradise",
    price: 2100000,
    location: "Malibu, CA",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    beds: 5,
    baths: 4,
    sqft: 4500,
    type: "House"
  },
  {
    id: "6",
    title: "Urban Townhouse",
    price: 875000,
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    beds: 3,
    baths: 2.5,
    sqft: 2100,
    type: "Townhouse"
  }
];

export default function PropertyGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
      {SAMPLE_PROPERTIES.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}