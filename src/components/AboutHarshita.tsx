import React from 'react';
import { HarshitaPortrait } from './HarshitaPortrait';
import { Phone, MessageCircle, Instagram, Sparkles, Award, Heart, Check } from 'lucide-react';

interface AboutHarshitaProps {
  onOpenBooking: () => void;
}

export const AboutHarshita: React.FC<AboutHarshitaProps> = ({ onOpenBooking }) => {
  const vanityBrands = [
    'Charlotte Tilbury',
    'MAC Cosmetics',
    'Dior Backstage',
    'Huda Beauty',
    'NARS',
    'Bobbi Brown',
    'Laura Mercier',
    'Temptu Airbrush',
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#F4EEE5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & Studio Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              <HarshitaPortrait size="full" />
              
              {/* Studio Info Card */}
              <div className="mt-6 bg-white rounded-2xl p-5 border border-[#E9E0D1] shadow-md space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-[#E9E0D1] pb-2.5">
                  <span className="font-serif font-medium text-[#2C2420]">Business Name</span>
                  <span className="text-[#6B1728] font-medium">Shringaar Tales by Harshita</span>
                </div>
                <div className="flex items-center justify-between text-xs border-b border-[#E9E0D1] pb-2.5">
                  <span className="font-serif font-medium text-[#2C2420]">Location</span>
                  <span className="text-[#5C4F48]">Kanpur, Uttar Pradesh</span>
                </div>
                <div className="flex items-center justify-between text-xs border-b border-[#E9E0D1] pb-2.5">
                  <span className="font-serif font-medium text-[#2C2420]">Direct Inquiries</span>
                  <a href="tel:+918081520570" className="text-[#6B1728] font-mono tabular-nums font-semibold hover:underline">
                    +91 8081520570
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-serif font-medium text-[#2C2420]">Instagram</span>
                  <a
                    href="https://www.instagram.com/make_overharshita/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B1728] font-medium hover:underline inline-flex items-center gap-1"
                  >
                    @make_overharshita
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio & Artistry Creed */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#6B1728]">
                Meet The Artist Behind The Magic
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2420] font-normal leading-tight">
                "Makeup is not about wearing a mask; it is about unveiling your most regal, luminous self."
              </h2>
            </div>

            <div className="space-y-4 text-base text-[#5C4F48] leading-relaxed">
              <p>
                Namaste! I am <strong className="text-[#2C2420] font-semibold">Harshita Tiwari</strong>, freelance bridal makeup artist and founder of <strong className="text-[#6B1728] font-semibold">Shringaar Tales by Harshita</strong>, based in Kanpur, Uttar Pradesh.
              </p>
              <p>
                My philosophy is rooted in celebrating the authentic charm of every North Indian bride. Whether you are draping a heritage crimson velvet lehenga for your pheras or wearing an ivory organza gown for a black-tie reception, I focus on sculpting flawless skin that breathes, stays luminous under spotlight cameras, and weathers emotional vidaai tears with 100% resilience.
              </p>
              <p>
                With hundreds of wedding ceremonies completed at premier Kanpur venues including The Landmark Hotel, Status Club Cantt, Ganges Club, and Royal Cliff, I bring calm confidence, precision timing, and bespoke artistry directly to your bridal suite.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3 bg-white/70 p-3.5 rounded-xl border border-[#E9E0D1]">
                <Award className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#2C2420]">Skin-First Preparation</h4>
                  <p className="text-xs text-[#7A6A61] mt-0.5">Hydration layering and facial lymphatic contour before any foundation touch.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/70 p-3.5 rounded-xl border border-[#E9E0D1]">
                <Heart className="w-5 h-5 text-[#6B1728] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#2C2420]">Complete Bridal Care</h4>
                  <p className="text-xs text-[#7A6A61] mt-0.5">From royal dupatta pleating to heirloom jewellery alignment and touchup kits.</p>
                </div>
              </div>
            </div>

            {/* Premium Vanity Kit Banner */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-[#6B5A52] font-semibold mb-2.5">
                Exclusively Authentic International Vanity Kit:
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {vanityBrands.map((brand) => (
                  <span
                    key={brand}
                    className="bg-white px-3 py-1.5 rounded-lg border border-[#E0D5C3] text-[#4A3E39] font-medium"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 text-sm font-semibold tracking-wide uppercase text-white bg-[#6B1728] hover:bg-[#54101E] rounded-xl shadow-sm transition-colors"
              >
                Inquire For Your Wedding
              </button>

              <a
                href="https://wa.me/918081520570?text=Hello%20Harshita%2C%20I%20am%20looking%20for%20a%20bridal%20makeup%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#075E54] bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="https://www.instagram.com/make_overharshita/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#6B1728] hover:text-[#4A0D17] transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>View Instagram</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
