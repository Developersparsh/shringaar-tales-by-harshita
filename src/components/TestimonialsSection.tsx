import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#6B1728]">
            Words of Love & Trust
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2420] font-normal tracking-tight">
            Real Kanpur Brides, Real Memories
          </h2>
          <p className="text-base text-[#5C4F48] leading-relaxed">
            Read heartfelt stories from our radiant brides who trusted Harshita Tiwari with the most photographed day of their lives.
          </p>
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E9E0D1] shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Rating & Look Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#C5A059]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A059]" />
                    ))}
                  </div>

                  {/* Clean unboxed metadata with typographic separator */}
                  <div className="text-xs text-[#7A6A61] flex items-center gap-2">
                    <span>{t.lookType}</span>
                    <span aria-hidden="true">·</span>
                    <span>{t.date}</span>
                  </div>
                </div>

                {/* Quote Body */}
                <p className="text-sm sm:text-base text-[#4A3E39] leading-relaxed italic">
                  "{t.quote}"
                </p>

              </div>

              {/* Bride Attribution Footer */}
              <div className="mt-6 pt-4 border-t border-[#F4EEE5] flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#2C2420]">
                    {t.brideName}
                  </h4>
                  <p className="text-xs text-[#6B1728] font-medium">
                    {t.event} · <span className="text-[#7A6A61]">{t.venue}</span>
                  </p>
                </div>

                <div className="flex items-center gap-1 text-xs text-[#075E54] bg-[#25D366]/10 px-2.5 py-1 rounded-md border border-[#25D366]/20">
                  <CheckCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span className="font-medium text-[11px]">Verified Bride</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Rating Summary Bar */}
        <div className="mt-12 bg-[#F4EEE5] rounded-2xl p-6 border border-[#E9E0D1] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="font-serif text-3xl font-semibold text-[#6B1728] tabular-nums">5.0 / 5.0</span>
            <div>
              <p className="text-xs font-semibold text-[#2C2420]">Flawless Client Satisfaction Score</p>
              <p className="text-[11px] text-[#7A6A61]">Across Google Reviews, WedMeGood & Personal Wedding Portfolios</p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/make_overharshita/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#6B1728] hover:underline whitespace-nowrap"
          >
            Watch Video Testimonials on Instagram →
          </a>
        </div>

      </div>
    </section>
  );
};
