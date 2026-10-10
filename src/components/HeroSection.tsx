import React from 'react';
import { BrandLogo } from './BrandLogo';
import { HarshitaPortrait } from './HarshitaPortrait';
import { Calendar, Sparkles, MapPin, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExplorePortfolio: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onExplorePortfolio,
}) => {
  return (
    <section className="relative overflow-hidden pt-4 pb-12 lg:pt-8 lg:pb-16 bg-[#FAF7F2]">
      {/* Subtle background luxury ambient gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#6B1728]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial Location Kicker */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-medium text-[#6B1728] bg-[#F4EEE5] px-3.5 py-1.5 rounded-full border border-[#E9E0D1]">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Kanpur, Uttar Pradesh · Luxury Bridal & Event Artist</span>
            </div>

            {/* Display Headline */}
            <div className="space-y-2">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2C2420] font-normal tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
                Where Timeless Indian Elegance Meets Modern <span className="font-display italic font-semibold text-[#6B1728]">Shringaar</span>
              </h1>
              <p className="text-sm uppercase tracking-[0.2em] font-sans font-medium text-[#C5A059]">
                Bespoke Artistry by Harshita Tiwari
              </p>
            </div>

            {/* Lead Prose */}
            <p className="text-base sm:text-lg text-[#5C4F48] font-normal leading-relaxed max-w-2xl">
              Elevating brides across Kanpur and royal destination venues with 100% waterproof HD formulas, customized skin conditioning, and refined Nawabi regal aesthetics that stay flawless from sacred pheras to midnight receptions.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 text-sm font-semibold tracking-wide uppercase text-white bg-gradient-to-r from-[#6B1728] to-[#800020] hover:from-[#52101E] hover:to-[#6B1728] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 border border-[#D4AF37]/40"
              >
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span>Reserve Your Wedding Date</span>
              </button>

              <button
                onClick={onExplorePortfolio}
                className="px-6 py-3.5 text-sm font-medium text-[#2C2420] bg-white/90 hover:bg-white rounded-xl border border-[#D6CAB8] hover:border-[#C5A059] shadow-sm transition-all duration-200 flex items-center gap-2"
              >
                <span>View Bridal Portfolios</span>
                <ArrowUpRight className="w-4 h-4 text-[#6B1728]" />
              </button>
            </div>

            {/* Fast Touchpoints */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#6B5A52]">
              <a
                href="https://wa.me/918081520570?text=Hi%20Harshita%2C%20I%20would%20like%20to%20inquire%20about%20bridal%20dates."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#075E54] hover:underline font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                WhatsApp Direct: +91 8081520570
              </a>

              <a
                href="https://www.instagram.com/make_overharshita/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#6B1728] hover:underline font-medium"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                @make_overharshita on Instagram
              </a>
            </div>

          </div>

          {/* Right Column: Visual Showcase Container with Harshita Portrait & Brand Emblem */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Visual Frame */}
            <div className="w-full max-w-md bg-gradient-to-b from-white to-[#F4EEE5] p-6 rounded-3xl border border-[#E9E0D1] shadow-xl relative">
              
              {/* Centered Brand Emblem Header */}
              <div className="flex flex-col items-center pb-4 border-b border-[#E9E0D1]/80">
                <BrandLogo size="md" variant="full" />
              </div>

              {/* Harshita Portrait Showcase */}
              <div className="mt-5 flex flex-col items-center text-center">
                <HarshitaPortrait size="lg" />
                
                <div className="mt-4 space-y-1">
                  <h3 className="font-serif text-lg font-medium text-[#2C2420]">
                    Harshita Tiwari
                  </h3>
                  <p className="text-xs text-[#6B1728] font-medium tracking-wide">
                    Lead Makeup Artist & Founder · Kanpur, UP
                  </p>
                  <p className="text-[12px] text-[#7A6A61] pt-1">
                    Specializing in Royal Pheras, HD Airbrush, Sangeet Glam & Personal Vanity Masterclasses.
                  </p>
                </div>

                {/* Instant Verification Points */}
                <div className="mt-4 pt-3 border-t border-[#E9E0D1] w-full grid grid-cols-2 gap-2 text-left text-[11px] text-[#5C4F48]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                    <span>MAC & CT Certified</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                    <span>On-Location & Studio</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                    <span>100% Tears-Proof Base</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                    <span>Complete Drape & Styling</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Full-Width Key Trust Strip Below Split */}
        <div className="mt-12 pt-8 border-t border-[#E9E0D1] grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-8">
          <div className="bg-white/80 rounded-xl p-4 border border-[#E9E0D1] text-center">
            <span className="font-serif text-2xl lg:text-3xl font-semibold text-[#6B1728] tabular-nums">
              600+
            </span>
            <p className="text-xs text-[#6B5A52] uppercase tracking-wider font-medium mt-1">
              Kanpur & UP Brides Styled
            </p>
          </div>

          <div className="bg-white/80 rounded-xl p-4 border border-[#E9E0D1] text-center">
            <span className="font-serif text-2xl lg:text-3xl font-semibold text-[#C5A059] tabular-nums">
              5.0 ★
            </span>
            <p className="text-xs text-[#6B5A52] uppercase tracking-wider font-medium mt-1">
              Top Rated Bridal Artist
            </p>
          </div>

          <div className="bg-white/80 rounded-xl p-4 border border-[#E9E0D1] text-center">
            <span className="font-serif text-2xl lg:text-3xl font-semibold text-[#6B1728] tabular-nums">
              100%
            </span>
            <p className="text-xs text-[#6B5A52] uppercase tracking-wider font-medium mt-1">
              Waterproof Longevity
            </p>
          </div>

          <div className="bg-white/80 rounded-xl p-4 border border-[#E9E0D1] text-center">
            <span className="font-serif text-2xl lg:text-3xl font-semibold text-[#C5A059] tabular-nums">
              100+
            </span>
            <p className="text-xs text-[#6B5A52] uppercase tracking-wider font-medium mt-1">
              Kanpur Hotel Venues Served
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
