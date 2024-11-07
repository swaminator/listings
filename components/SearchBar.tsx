"use client";

import { Search, MapPin, Home } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SearchBar() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Location
          </label>
          <Input placeholder="Enter location" className="w-full" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Home className="h-4 w-4" />
            Property Type
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Price Range</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-250000">$0 - $250,000</SelectItem>
              <SelectItem value="250000-500000">$250,000 - $500,000</SelectItem>
              <SelectItem value="500000-750000">$500,000 - $750,000</SelectItem>
              <SelectItem value="750000-1000000">$750,000 - $1,000,000</SelectItem>
              <SelectItem value="1000000+">$1,000,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end">
          <Button className="w-full bg-primary hover:bg-primary/90">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}