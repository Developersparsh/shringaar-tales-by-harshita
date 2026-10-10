import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/mockData';
import { PortfolioItem } from '../types';
import { Sparkles, X, MapPin, Eye, Calendar, ArrowRight } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectLookForBooking: (category: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectLookForBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'Bridal', 'Reception', 'Sangeet', 'Engagement', 'Haldi', 'Editorial'];

  const filteredItems =
    activeCategory === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#6B1728]">
            Curated Bridal Portfolios
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2420] font-normal tracking-tight">
            The Gallery of Real Kanpur Brides
          </h2>
          <p className="text-base text-[#5C4F48] leading-relaxed">
            Every bride has her own story. Browse through our royal transformations captured at iconic heritage venues across Kanpur and Uttar Pradesh.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#F4EEE5] rounded-xl border border-[#E9E0D1] max-w-full overflow-x-auto">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold tracking-wide rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#6B1728] text-white shadow-sm'
                      : 'text-[#6B5A52] hover:text-[#2C2420] hover:bg-white/60'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Bento / Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#E9E0D1] hover:border-[#C5A059] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Media Container with Fallback */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#2C2420]">
                  <img
                    src={item.image}
                    alt={`${item.title} - Bridal makeup by Harshita Tiwari`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient Scrim for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Overlay Metadata */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="font-mono text-[11px] tracking-wider uppercase bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                      {item.category}
                    </span>
                    <span className="text-[11px] text-[#FAF7F2]/90 flex items-center gap-1 drop-shadow">
                      <MapPin className="w-3 h-3 text-[#D4AF37]" />
                      {item.venue.split(',')[0]}
                    </span>
                  </div>

                  {/* Bottom Text Over Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif text-xl font-medium leading-tight text-[#FAF7F2] group-hover:text-[#F5DF9E] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#E9E0D1]/90 mt-1">
                      Bride: <span className="font-medium text-white">{item.brideName}</span>
                    </p>
                  </div>

                  {/* Hover Inspect Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
                    <span className="bg-white/90 text-[#2C2420] text-xs font-semibold px-4 py-2 rounded-lg shadow flex items-center gap-1.5">
                      <Eye className="w-4 h-4 text-[#6B1728]" />
                      View Look Details
                    </span>
                  </div>
                </div>

                {/* Quiet Card Footer: Zero-Pill Clean Unboxed Metadata */}
                <div className="p-4 space-y-2 bg-white flex-1 flex flex-col justify-between">
                  <p className="text-xs text-[#5C4F48] line-clamp-2">
                    {item.description}
                  </p>
                  <div className="pt-2 border-t border-[#F4EEE5] flex items-center justify-between text-[11px] text-[#7A6A61]">
                    <span>{item.skinFinish}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.eyeLook}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Booking Kicker */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#5C4F48]">
            Looking for a customized wedding moodboard or multi-day bridal package?
          </p>
          <button
            onClick={() => onSelectLookForBooking('Royal Bridal')}
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#6B1728] hover:text-[#4A0D17] underline underline-offset-4"
          >
            <span>Discuss your dream bridal look with Harshita</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl border border-[#E9E0D1] max-h-[90vh] flex flex-col md:flex-row">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="md:w-1/2 relative bg-[#1A1614] min-h-[300px] md:min-h-full">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white text-xs">
                <span className="font-medium text-[#D4AF37]">{selectedItem.category} Look</span>
                <p className="text-[11px] text-white/80">{selectedItem.venue}</p>
              </div>
            </div>

            {/* Modal Content Details */}
            <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                
                {/* Unboxed Metadata with Typographic Separator */}
                <div className="flex items-center gap-2 text-xs text-[#7A6A61]">
                  <span>Bride: {selectedItem.brideName}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedItem.venue}</span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-medium text-[#2C2420]">
                  {selectedItem.title}
                </h3>

                <p className="text-sm text-[#5C4F48] leading-relaxed">
                  {selectedItem.description}
                </p>

                {/* Artistry Breakdown */}
                <div className="space-y-2.5 pt-2 border-t border-[#E9E0D1]">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#6B1728]">
                    Bespoke Artistry Breakdown
                  </h4>
                  
                  <div className="grid grid-cols-1 gap-2 text-xs">
                    <div className="bg-white p-2.5 rounded-lg border border-[#E9E0D1]">
                      <span className="text-[#7A6A61] block text-[10px] uppercase font-medium">Skin Complexion</span>
                      <span className="text-[#2C2420] font-medium">{selectedItem.skinFinish}</span>
                    </div>

                    <div className="bg-white p-2.5 rounded-lg border border-[#E9E0D1]">
                      <span className="text-[#7A6A61] block text-[10px] uppercase font-medium">Eye Styling</span>
                      <span className="text-[#2C2420] font-medium">{selectedItem.eyeLook}</span>
                    </div>

                    <div className="bg-white p-2.5 rounded-lg border border-[#E9E0D1]">
                      <span className="text-[#7A6A61] block text-[10px] uppercase font-medium">Hair & Ornamentation</span>
                      <span className="text-[#2C2420] font-medium">{selectedItem.hairStyle}</span>
                    </div>
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="space-y-1.5 pt-1">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#6B1728]">
                    Signature Techniques Used:
                  </h4>
                  <ul className="space-y-1 text-xs text-[#5C4F48]">
                    {selectedItem.lookHighlights.map((hl, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Button inside Lightbox */}
              <div className="pt-4 border-t border-[#E9E0D1]">
                <button
                  onClick={() => {
                    const cat = selectedItem.category === 'Bridal' ? 'Royal Bridal' : selectedItem.category;
                    setSelectedItem(null);
                    onSelectLookForBooking(cat);
                  }}
                  className="w-full py-3 px-4 bg-[#6B1728] hover:bg-[#54101E] text-white text-xs uppercase tracking-wider font-semibold rounded-xl shadow transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>Request This Look For My Wedding</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};
