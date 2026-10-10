import React from 'react';
import { SERVICE_PACKAGES } from '../data/mockData';
import { Check, Clock, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface ServicesPricingProps {
  onSelectService: (serviceCategory: string, tierName?: string) => void;
}

export const ServicesPricing: React.FC<ServicesPricingProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-[#F4EEE5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#6B1728]">
            Transparent Luxury Pricing
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2420] font-normal tracking-tight">
            Curated Bridal & Event Packages
          </h2>
          <p className="text-base text-[#5C4F48] leading-relaxed">
            All bridal packages include luxury skin prep, international authentic cosmetics, custom false lashes, floral hair styling, jewellery alignment, and dupatta draping.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICE_PACKAGES.map((pkg) => {
            return (
              <div
                key={pkg.id}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.popular
                    ? 'bg-gradient-to-b from-white to-[#FAF7F2] border-2 border-[#C5A059] shadow-xl md:-translate-y-2'
                    : 'bg-white border border-[#E9E0D1] hover:border-[#C5A059]/60 shadow-sm hover:shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#6B1728] to-[#800020] text-white text-[11px] font-semibold uppercase tracking-widest px-4 py-1 rounded-full border border-[#D4AF37]/50 shadow">
                    Most Booked By Kanpur Brides
                  </div>
                )}

                <div className="space-y-4">
                  {/* Package Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl font-medium text-[#2C2420]">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#7A6A61] italic">{pkg.tagline}</p>
                  </div>

                  {/* Price & Duration */}
                  <div className="pt-2 pb-3 border-b border-[#E9E0D1] flex items-baseline justify-between">
                    <div>
                      <span className="font-serif text-3xl sm:text-4xl font-semibold text-[#6B1728] tabular-nums">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-[#7A6A61] ml-1.5">/ event</span>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-[#7A6A61]">
                      <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{pkg.time}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#5C4F48] leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="pt-2 space-y-2">
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-[#6B1728]">
                      What's Included:
                    </p>
                    <ul className="space-y-2 text-xs text-[#4A3E39]">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Select Package Action */}
                <div className="mt-6 pt-4 border-t border-[#E9E0D1]">
                  <button
                    onClick={() => onSelectService(pkg.category, pkg.name)}
                    className={`w-full py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-[#6B1728] to-[#800020] text-white hover:from-[#54101E] hover:to-[#6B1728] shadow-md hover:shadow-lg border border-[#D4AF37]/30'
                        : 'bg-[#FAF7F2] hover:bg-[#6B1728] text-[#2C2420] hover:text-white border border-[#D6CAB8]'
                    }`}
                  >
                    <span>Check Date & Book</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Kanpur Travel & Studio Information */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#E9E0D1] max-w-4xl mx-auto shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#5C4F48]">
            <div className="space-y-1.5">
              <span className="font-semibold text-sm text-[#2C2420] block">In-Studio or On-Location</span>
              <p>Harshita travels to all premier hotels and private homes in Kanpur (Civil Lines, Swaroop Nagar, Cantt, Tilak Nagar, Kakadeo) as well as Lucknow & destination venues.</p>
            </div>
            <div className="space-y-1.5">
              <span className="font-semibold text-sm text-[#2C2420] block">Bridal Trials Available</span>
              <p>Paid preview trials can be scheduled at our Swaroop Nagar studio on weekdays to test foundations, eyelash density, and lip combinations.</p>
            </div>
            <div className="space-y-1.5">
              <span className="font-semibold text-sm text-[#2C2420] block">Token Advance Confirmation</span>
              <p>Dates are reserved strictly on a first-come, advance token basis to ensure exclusivity for your auspicious wedding day.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
