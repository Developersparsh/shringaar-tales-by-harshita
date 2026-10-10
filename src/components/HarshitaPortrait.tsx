import React, { useState } from 'react';

interface HarshitaPortraitProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
  showBadge?: boolean;
}

export const HarshitaPortrait: React.FC<HarshitaPortraitProps> = ({
  className = '',
  size = 'md',
  showBadge = true,
}) => {
  const [imgSrc, setImgSrc] = useState('/harshita_tiwari.jpg');
  const [imgError, setImgError] = useState(false);

  const handleImageError = () => {
    if (imgSrc === '/harshita_tiwari.jpg') {
      // Fallback to the exact uploaded filename
      setImgSrc('/768144254_17892805713658857_4133881982579272671_n.jpg');
    } else {
      setImgError(true);
    }
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Outer Delicate Gold Frame */}
      <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-xl bg-gradient-to-b from-[#2C2420] to-[#1A1614] p-1.5">
        <div className="relative rounded-xl overflow-hidden aspect-square max-w-full bg-[#1A1614]">
          {!imgError ? (
            <img
              src={imgSrc}
              alt="Harshita Tiwari - Founder & Lead Bridal Makeup Artist at Shringaar Tales Kanpur"
              onError={handleImageError}
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
            />
          ) : (
            // Styled Resilient Vector Fallback
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#3D121A] via-[#2A1016] to-[#1A0A0E] text-[#FAF7F2] text-center">
              <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37] flex items-center justify-center mb-3 bg-[#6B1728]/40 shadow-inner">
                <span className="font-serif text-3xl font-medium text-[#D4AF37]">HT</span>
              </div>
              <h4 className="font-serif text-xl font-medium text-[#FAF7F2]">Harshita Tiwari</h4>
              <p className="text-xs text-[#D4AF37] uppercase tracking-widest mt-1">Lead Artist & Founder</p>
              <p className="text-[11px] text-[#FAF7F2]/70 mt-2 max-w-[200px]">Shringaar Tales by Harshita · Kanpur, UP</p>
            </div>
          )}

          {/* Luxury Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Caption on Image */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
            <span className="font-medium tracking-wide drop-shadow-md">Harshita Tiwari</span>
            <span className="text-[10px] text-[#D4AF37] tracking-widest uppercase drop-shadow-md">Kanpur, UP</span>
          </div>
        </div>
      </div>

      {/* Floating Trust Badge */}
      {showBadge && (
        <div className="absolute -bottom-3 -right-2 bg-gradient-to-r from-[#6B1728] to-[#4A0D17] text-white px-3 py-1.5 rounded-full border border-[#D4AF37]/50 shadow-lg flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 7.4h7.6l-6.1 4.5 2.3 7.1-6.2-4.6-6.2 4.6 2.3-7.1-6.1-4.5h7.6z" />
          </svg>
          <span className="text-[11px] font-medium tracking-wide whitespace-nowrap">Certified Bridal Artist</span>
        </div>
      )}
    </div>
  );
};
