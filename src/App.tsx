import React, { useState, useEffect } from 'react';
import { Booking, Inquiry, ServiceCategory, BookingStatus } from './types';
import { INITIAL_BOOKINGS, INITIAL_INQUIRIES } from './data/mockData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutHarshita } from './components/AboutHarshita';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesPricing } from './components/ServicesPricing';
import { BookingEngine } from './components/BookingEngine';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { InstagramFeed } from './components/InstagramFeed';
import { ContactConsultation } from './components/ContactConsultation';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { AdminDashboard } from './components/AdminDashboard';
import { LoginModal } from './components/LoginModal';

const BOOKINGS_STORAGE_KEY = 'shringaar_tales_bookings_v1';
const INQUIRIES_STORAGE_KEY = 'shringaar_tales_inquiries_v1';
const ADMIN_AUTH_KEY = 'shringaar_tales_admin_auth';

export default function App() {
  // Persistent state for bookings & inquiries
  const [bookings, setBookings] = useState<Booking[]>(() => {
    try {
      const saved = localStorage.getItem(BOOKINGS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : INITIAL_BOOKINGS;
    } catch {
      return INITIAL_BOOKINGS;
    }
  });

  const [inquiries, setInquiries] = useState<Inquiry[]>(() => {
    try {
      const saved = localStorage.getItem(INQUIRIES_STORAGE_KEY);
      return saved ? JSON.parse(saved) : INITIAL_INQUIRIES;
    } catch {
      return INITIAL_INQUIRIES;
    }
  });

  // Admin state
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(ADMIN_AUTH_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const [showAdminDashboard, setShowAdminDashboard] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Selected booking parameters from other sections
  const [bookingPrefillService, setBookingPrefillService] = useState<ServiceCategory>('Royal Bridal');
  const [bookingPrefillTier, setBookingPrefillTier] = useState<string>('Signature Royal Luxury');

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(bookings));
    } catch (e) {
      console.error('Failed to sync bookings to localStorage', e);
    }
  }, [bookings]);

  useEffect(() => {
    try {
      localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(inquiries));
    } catch (e) {
      console.error('Failed to sync inquiries to localStorage', e);
    }
  }, [inquiries]);

  // Handlers
  const handleNewBooking = (newBooking: Booking) => {
    setBookings((prev) => [newBooking, ...prev]);
  };

  const handleNewInquiry = (newInquiry: Inquiry) => {
    setInquiries((prev) => [newInquiry, ...prev]);
  };

  const handleUpdateBookingStatus = (
    id: string,
    status: BookingStatus,
    internalNotes?: string,
    advancePaid?: number
  ) => {
    setBookings((prev) =>
      prev.map((b) => {
        if (b.id === id) {
          return {
            ...b,
            status,
            internalNotes: internalNotes !== undefined ? internalNotes : b.internalNotes,
            advancePaid: advancePaid !== undefined ? advancePaid : b.advancePaid,
          };
        }
        return b;
      })
    );
  };

  const handleUpdateInquiryStatus = (
    id: string,
    status: 'new' | 'contacted' | 'booked' | 'archived'
  ) => {
    setInquiries((prev) =>
      prev.map((inq) => (inq.id === id ? { ...inq, status } : inq))
    );
  };

  const handleDeleteBooking = (id: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  const handleLoginSuccess = () => {
    setIsAdminLoggedIn(true);
    try {
      sessionStorage.setItem(ADMIN_AUTH_KEY, 'true');
    } catch {}
    setShowLoginModal(false);
    setShowAdminDashboard(true);
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    try {
      sessionStorage.removeItem(ADMIN_AUTH_KEY);
    } catch {}
    setShowAdminDashboard(false);
  };

  const handleOpenAdminTrigger = () => {
    if (isAdminLoggedIn) {
      setShowAdminDashboard(true);
    } else {
      setShowLoginModal(true);
    }
  };

  const scrollToBooking = (service?: string, tier?: string) => {
    if (service) {
      setBookingPrefillService(service as ServiceCategory);
    }
    if (tier) {
      setBookingPrefillTier(tier);
    }
    const elem = document.getElementById('booking');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const elem = document.getElementById('portfolio');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If Harshita is viewing her management dashboard
  if (showAdminDashboard && isAdminLoggedIn) {
    return (
      <AdminDashboard
        bookings={bookings}
        inquiries={inquiries}
        onUpdateBookingStatus={handleUpdateBookingStatus}
        onUpdateInquiryStatus={handleUpdateInquiryStatus}
        onAddBooking={handleNewBooking}
        onDeleteBooking={handleDeleteBooking}
        onClose={() => setShowAdminDashboard(false)}
        onLogout={handleLogout}
      />
    );
  }

  // Public High-End Website
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2420] flex flex-col font-sans selection:bg-[#6B1728]/15 selection:text-[#6B1728]">
      
      {/* Navigation */}
      <Navbar
        onOpenBooking={() => scrollToBooking()}
        onOpenAdmin={handleOpenAdminTrigger}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      {/* Hero Section */}
      <HeroSection
        onOpenBooking={() => scrollToBooking()}
        onExplorePortfolio={scrollToPortfolio}
      />

      {/* About Harshita Tiwari Spotlight */}
      <AboutHarshita onOpenBooking={() => scrollToBooking()} />

      {/* Bridal Portfolios Gallery */}
      <PortfolioSection
        onSelectLookForBooking={(category) => scrollToBooking(category)}
      />

      {/* Services & Transparent Packages */}
      <ServicesPricing
        onSelectService={(category, tier) => scrollToBooking(category, tier)}
      />

      {/* Real-time Interactive Booking Engine */}
      <BookingEngine
        onNewBooking={handleNewBooking}
        initialService={bookingPrefillService}
        initialTier={bookingPrefillTier}
      />

      {/* Real Kanpur Brides Testimonials */}
      <TestimonialsSection />

      {/* Beauty Tips & Bridal Glow Blog Journal */}
      <BlogSection />

      {/* Instagram Feed Integration (@make_overharshita) */}
      <InstagramFeed />

      {/* Contact & Consultation Form */}
      <ContactConsultation onNewInquiry={handleNewInquiry} />

      {/* Footer */}
      <Footer
        onOpenAdmin={handleOpenAdminTrigger}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      {/* Mobile Sticky Bottom Floating Action Bar */}
      <MobileBottomBar onOpenBooking={() => scrollToBooking()} />

      {/* Login Modal for Harshita */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />

    </div>
  );
}
