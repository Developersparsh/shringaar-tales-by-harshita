export type ServiceCategory = 
  | 'Royal Bridal'
  | 'HD Reception'
  | 'Cocktail & Sangeet'
  | 'Engagement & Roka'
  | 'Haldi & Mehendi'
  | 'Editorial & Shoot'
  | 'Party Guest Makeup';

export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export interface Booking {
  id: string;
  clientName: string;
  phone: string;
  email: string;
  serviceType: ServiceCategory;
  packageTier: 'Essential HD' | 'Signature Royal Luxury' | 'Celebrity Airbrush & Styling';
  eventDate: string; // YYYY-MM-DD
  eventTimeSlot: string;
  venueType: 'Harshita Studio (Kanpur)' | 'On-Location (Kanpur)' | 'Destination (Outside Kanpur)';
  venueAddress: string;
  guestCount: number; // Additional party makeups
  estimatedTotal: number;
  advancePaid: number;
  notes: string;
  internalNotes?: string;
  status: BookingStatus;
  createdAt: string;
}

export interface Inquiry {
  id: string;
  clientName: string;
  phone: string;
  email: string;
  eventDate?: string;
  serviceInterested: string;
  message: string;
  status: 'new' | 'contacted' | 'booked' | 'archived';
  createdAt: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Reception' | 'Sangeet' | 'Engagement' | 'Haldi' | 'Editorial';
  image: string;
  brideName: string;
  venue: string;
  description: string;
  lookHighlights: string[];
  skinFinish: string;
  eyeLook: string;
  hairStyle: string;
}

export interface Testimonial {
  id: string;
  brideName: string;
  event: string;
  venue: string;
  date: string;
  rating: number;
  quote: string;
  image?: string;
  lookType: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  tips: string[];
}

export interface InstagramPost {
  id: string;
  caption: string;
  mediaType: 'reel' | 'post';
  likes: string;
  comments: string;
  thumbnail: string;
  instaUrl: string;
  tags: string[];
}
