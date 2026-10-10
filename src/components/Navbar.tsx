import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Phone, MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenAdmin: () => void;
  isAdminLoggedIn: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenAdmin,
  isAdminLoggedIn,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services & Pricing', href: '#services' },
    { label: 'Real Brides', href: '#testimonials' },
    { label: 'Beauty Journal', href: '#journal' },
    { label: 'About Harshita', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E9E0D1]/80 py-2.5'
            : 'bg-[#FAF7F2]/80 backdrop-blur-sm border-b border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: Exactly 3 Zones */}
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text / brand emblem lockup */}
            <a
              href="#"
              className="inline-flex items-center gap-3 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B1728] rounded-md"
              aria-label="Shringaar Tales by Harshita Home"
            >
              <BrandLogo size="sm" variant="horizontal" />
            </a>

            {/* Zone 2: 4-5 single-line clean text links with subtle hover underlines */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A3E39]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#6B1728] transition-colors whitespace-nowrap shrink-0 relative group py-1"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6B1728] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 primary action + discreet admin indicator */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href="tel:+918081520570"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6B1728] hover:text-[#4A0D17] px-2.5 py-1.5 rounded transition-colors"
                title="Call Harshita Tiwari"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="font-mono tabular-nums">+91 8081520570</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="px-4 py-2 text-xs font-semibold tracking-wide uppercase text-white bg-gradient-to-r from-[#6B1728] to-[#800020] rounded-lg shadow-sm hover:from-[#54101E] hover:to-[#6B1728] hover:shadow transition-all duration-200 whitespace-nowrap shrink-0 border border-[#D4AF37]/30"
              >
                Book Date
              </button>

              {/* Owner Portal Quick Access */}
              <button
                onClick={onOpenAdmin}
                className={`p-2 rounded-lg text-xs transition-colors ${
                  isAdminLoggedIn
                    ? 'bg-[#C5A059]/15 text-[#6B1728] border border-[#C5A059]/40'
                    : 'text-[#8C7A72] hover:text-[#6B1728] hover:bg-[#F4EEE5]'
                }`}
                title={isAdminLoggedIn ? 'Open Owner Dashboard' : 'Artist Login (Harshita)'}
                aria-label="Artist Dashboard Login"
              >
                <ShieldCheck className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white bg-[#6B1728] rounded-md shadow-sm"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#4A3E39] hover:text-[#6B1728] rounded-md"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#FAF7F2] border-b border-[#E9E0D1] px-4 pt-3 pb-6 mt-2 space-y-3 shadow-lg">
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-[#4A3E39] hover:text-[#6B1728] hover:bg-[#F4EEE5] rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#E9E0D1] space-y-2.5">
              <div className="flex items-center justify-between text-xs text-[#6B1728] px-3">
                <span className="font-medium">Direct Line:</span>
                <a href="tel:+918081520570" className="font-mono tabular-nums font-semibold">
                  +91 8081520570
                </a>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://wa.me/918081520570?text=Hi%20Harshita%2C%20I%20am%20interested%20in%20bridal%20makeup%20services%20in%20Kanpur."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-[#075E54] bg-[#25D366]/15 rounded-lg border border-[#25D366]/30"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmin();
                  }}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-[#6B1728] bg-[#F4EEE5] rounded-lg border border-[#E9E0D1]"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                  Artist Portal
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
};
