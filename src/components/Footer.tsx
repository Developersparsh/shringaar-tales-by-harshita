import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Phone, MapPin, Instagram, MessageCircle, Heart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenAdmin: () => void;
  isAdminLoggedIn: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin, isAdminLoggedIn }) => {
  return (
    <footer className="bg-[#2C2420] text-[#FAF7F2] pt-16 pb-24 sm:pb-12 border-t border-[#4A3E39] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#4A3E39]">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo size="md" variant="horizontal" light={true} />
            <p className="text-xs text-[#FAF7F2]/75 leading-relaxed max-w-sm">
              Shringaar Tales by Harshita is a bespoke bridal and event makeup artistry studio based in Kanpur, Uttar Pradesh, specializing in royal North Indian bridal transformations, HD airbrush perfection, and luxury draping.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/make_overharshita/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#6B1728] flex items-center justify-center transition-colors text-white"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/918081520570"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-colors text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:+918081520570"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C5A059] flex items-center justify-center transition-colors text-white"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-[#D4AF37]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF7F2]/80">
              <li>
                <a href="#portfolio" className="hover:text-[#D4AF37] transition-colors">
                  Bridal Portfolio Gallery
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Services & Pricing Packages
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#D4AF37] transition-colors">
                  Check Wedding Date Availability
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#D4AF37] transition-colors">
                  Real Kanpur Bride Reviews
                </a>
              </li>
              <li>
                <a href="#journal" className="hover:text-[#D4AF37] transition-colors">
                  Bridal Skincare Journal
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">
                  About Harshita Tiwari
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Kanpur Locations */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-[#D4AF37]">
              Kanpur Studio & Inquiries
            </h4>
            <div className="space-y-2.5 text-xs text-[#FAF7F2]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  Swaroop Nagar & Civil Lines, Kanpur, Uttar Pradesh – 208001
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:+918081520570" className="hover:text-[#D4AF37] font-mono tabular-nums">
                  +91 8081520570
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href="https://www.instagram.com/make_overharshita/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37]"
                >
                  @make_overharshita
                </a>
              </div>
            </div>

            <p className="text-[11px] text-[#FAF7F2]/60 pt-2 leading-relaxed">
              Serving Landmark Towers, Status Club Cantt, Ganges Club, Regenta Central, Royal Cliff, and luxury destinations across Uttar Pradesh.
            </p>
          </div>

        </div>

        {/* Quiet Sub-Footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/60">
          <div>
            © {new Date().getFullYear()} Shringaar Tales by Harshita. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAdmin}
              className="hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isAdminLoggedIn ? 'Owner Dashboard (Harshita)' : 'Artist Portal Login'}</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
