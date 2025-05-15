import { Injectable } from '@angular/core';
import { TourPackage } from '../models/tour-package';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private tours: TourPackage[] = [
    {
      id: 1,
      name: 'Beach Paradise',
      location: 'Goa',
      description: 'Enjoy the sunny beaches and vibrant nightlife.',
      price: 15000,
      imageUrl: 'assets/images/beach.jpg'
    },
    {
      id: 2,
      name: 'Mountain Escape',
      location: 'Manali',
      description: 'Experience serene mountains and adventure sports.',
      price: 18000,
      imageUrl: 'assets/images/mountains.jpg'
    },
    {
      id: 3,
      name: 'Adventure',
      location: 'Rishikesh',
      description: 'Experience serene mountains and adventure sports.',
      price: 18000,
      imageUrl: 'assets/images/rishikesh.jpg'
    },
    {
      id: 4,
      name: 'Kedarnath',
      location: '',
      description: 'Experience serene mountains and sprituality.',
      price: 18000,
      imageUrl: 'assets/images/KEDARNATH.jpg'
    }
    ,
    {
      id: 4,
      name: 'Kedarnath',
      location: '',
      description: 'Experience serene mountains and sprituality.',
      price: 18000,
      imageUrl: 'assets/images/KEDARNATH.jpg'
    }
  ];

  getTours(): TourPackage[] {
    return this.tours;
  }

  getTourById(id: number): TourPackage | undefined {
    return this.tours.find(t => t.id === id);
  }
}
