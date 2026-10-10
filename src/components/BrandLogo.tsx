import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'horizontal' | 'icon';
  light?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  light = false,
}) => {
  // SVG Emblem recreation of the uploaded logo with gold leaf wreath, bride profile, and brush
  const renderEmblem = (dimensions: number) => (
    <svg
      width={dimensions}
      height={dimensions}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 hover:scale-105"
      aria-label="Shringaar Tales by Harshita Logo"
    >
      <defs>
        {/* Luxury Gold Gradients */}
        <linearGradient id="goldShimmer" x1="20" y1="20" x2="220" y2="220" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#DFBA6E" />
          <stop offset="30%" stopColor="#C5A059" />
          <stop offset="50%" stopColor="#F5DF9E" />
          <stop offset="70%" stopColor="#B38B3F" />
          <stop offset="100%" stopColor="#8C6627" />
        </linearGradient>

        <linearGradient id="brushWood" x1="160" y1="140" x2="200" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8C6627" />
          <stop offset="50%" stopColor="#B38B3F" />
          <stop offset="100%" stopColor="#DFBA6E" />
        </linearGradient>

        <linearGradient id="brushBristles" x1="180" y1="100" x2="205" y2="65" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#9E763B" />
          <stop offset="60%" stopColor="#6E4A1E" />
          <stop offset="100%" stopColor="#3E240D" />
        </linearGradient>
      </defs>

      {/* Background Soft Glow Aura */}
      <circle cx="120" cy="115" r="92" fill="#FAF5ED" fillOpacity="0.4" />

      {/* Outer Fine Astrological Ring */}
      <circle
        cx="120"
        cy="115"
        r="90"
        stroke="url(#goldShimmer)"
        strokeWidth="1.2"
        strokeDasharray="3 4"
        opacity="0.6"
      />

      {/* Main Botanical Wreath Ring */}
      <circle
        cx="120"
        cy="115"
        r="84"
        stroke="url(#goldShimmer)"
        strokeWidth="1.8"
      />

      {/* Twinkling Stars & Astral Dots */}
      <g fill="url(#goldShimmer)">
        <polygon points="120,18 122,24 128,26 122,28 120,34 118,28 112,26 118,24" />
        <polygon points="42,56 43,60 47,61 43,62 42,66 41,62 37,61 41,60" />
        <polygon points="198,82 199,85 202,86 199,87 198,90 197,87 194,86 197,85" />
        <polygon points="192,176 193,179 196,180 193,181 192,184 191,181 188,180 191,179" />
        <polygon points="46,168 47,171 50,172 47,173 46,176 45,173 42,172 45,171" />
        <circle cx="140" cy="24" r="1.5" />
        <circle cx="32" cy="100" r="1.5" />
        <circle cx="160" cy="204" r="1.5" />
        <circle cx="80" cy="204" r="1.5" />
      </g>

      {/* Left Floral Vine & Jasmine Leaves */}
      <g stroke="url(#goldShimmer)" strokeWidth="1.4" fill="none" strokeLinecap="round">
        <path d="M 52,142 C 42,122 45,92 58,70 C 66,56 82,42 102,36" />
        {/* Leaves */}
        <path d="M 46,132 C 40,130 38,122 42,118 C 46,114 50,122 46,132 Z" fill="url(#goldShimmer)" fillOpacity="0.3" />
        <path d="M 44,110 C 36,108 34,98 40,94 C 45,90 49,98 44,110 Z" fill="url(#goldShimmer)" fillOpacity="0.3" />
        <path d="M 50,88 C 42,82 46,74 54,76 C 58,78 56,86 50,88 Z" fill="url(#goldShimmer)" fillOpacity="0.3" />
        <path d="M 68,60 C 64,52 72,46 78,50 C 82,54 78,62 68,60 Z" fill="url(#goldShimmer)" fillOpacity="0.3" />
        <path d="M 88,44 C 86,36 94,32 98,36 C 102,40 96,46 88,44 Z" fill="url(#goldShimmer)" fillOpacity="0.3" />
        {/* Flower buds */}
        <circle cx="48" cy="148" r="4" stroke="url(#goldShimmer)" fill="#FAF5ED" />
        <circle cx="48" cy="148" r="2" fill="url(#goldShimmer)" />
        <circle cx="60" cy="74" r="3.5" stroke="url(#goldShimmer)" fill="#FAF5ED" />
      </g>

      {/* Right Top Floral Vine */}
      <g stroke="url(#goldShimmer)" strokeWidth="1.4" fill="none" strokeLinecap="round">
        <path d="M 136,36 C 158,42 178,56 190,76" />
        <path d="M 160,42 C 166,36 174,38 172,46 C 170,52 162,50 160,42 Z" fill="url(#goldShimmer)" fillOpacity="0.3" />
        <path d="M 180,56 C 188,52 194,58 190,64 C 186,68 180,64 180,56 Z" fill="url(#goldShimmer)" fillOpacity="0.3" />
        {/* Little blossom */}
        <circle cx="198" cy="70" r="4" stroke="url(#goldShimmer)" fill="#FAF5ED" />
        <circle cx="198" cy="70" r="1.8" fill="url(#goldShimmer)" />
      </g>

      {/* Bride Profile Silhouette */}
      <g stroke="url(#goldShimmer)" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Forehead, Nose, Lips, Chin, Neck Line */}
        <path d="M 118,74 C 117,80 114,86 112,94 C 111,99 108,103 111,105 C 115,106 117,105 119,109 C 116,112 114,113 116,116 C 118,119 123,118 122,122 C 120,125 117,126 118,129 C 119,132 124,133 125,137 C 126,142 124,148 125,154 C 126,160 130,165 136,170" />

        {/* Serene Eyelid & Winged Lashes */}
        <path d="M 115,96 C 118,97 122,98 125,97" strokeWidth="1.6" />
        <path d="M 118,97 C 120,101 123,101 125,98" strokeWidth="1.3" />
        <line x1="126" y1="97" x2="129" y2="95" strokeWidth="1.2" />

        {/* Delicate Brow */}
        <path d="M 114,91 C 119,89 125,89 130,92" strokeWidth="1.5" />

        {/* Traditional Bindi */}
        <circle cx="115" cy="88" r="1.5" fill="url(#goldShimmer)" stroke="none" />

        {/* Bridal Nath (Nose Ring) with fine beaded chain */}
        <circle cx="114" cy="113" r="5" stroke="url(#goldShimmer)" strokeWidth="1.2" fill="none" />
        <circle cx="112" cy="116" r="1.2" fill="url(#goldShimmer)" />
        <path d="M 118,112 C 124,110 132,112 138,118" stroke="url(#goldShimmer)" strokeWidth="1" strokeDasharray="1.5 2" />

        {/* Hair Waves & Traditional Parting */}
        <path d="M 118,74 C 124,72 132,73 138,76 C 146,82 152,90 154,102" />
        <path d="M 126,82 C 134,80 142,84 148,92" opacity="0.7" />

        {/* Maang Tikka (Royal Head Ornament) */}
        <line x1="119" y1="73" x2="119" y2="83" strokeWidth="1.2" />
        <path d="M 115,83 C 117,80 121,80 123,83 C 121,86 117,86 115,83 Z" fill="url(#goldShimmer)" />
        <circle cx="119" cy="87" r="1.2" fill="url(#goldShimmer)" />

        {/* Jhumka Earring */}
        <g transform="translate(136, 118)">
          <circle cx="4" cy="3" r="2" fill="url(#goldShimmer)" />
          <path d="M 0,8 C 2,6 6,6 8,8 L 9,13 L -1,13 Z" fill="url(#goldShimmer)" stroke="none" />
          <line x1="1" y1="14" x2="1" y2="16" strokeWidth="1" />
          <line x1="4" y1="14" x2="4" y2="17" strokeWidth="1" />
          <line x1="7" y1="14" x2="7" y2="16" strokeWidth="1" />
        </g>

        {/* Royal Choker & Necklaces */}
        <path d="M 128,154 C 134,152 142,154 148,158" strokeWidth="1.8" />
        <path d="M 127,158 C 135,157 144,160 150,165" strokeWidth="1.4" strokeDasharray="2 2" />
        <path d="M 128,164 C 137,163 146,168 152,174" strokeWidth="1.6" />

        {/* Royal Sheer Dupatta Veil Drape */}
        <path d="M 132,73 C 146,74 160,82 168,96 C 176,110 180,128 178,148 C 176,164 170,178 160,192" strokeWidth="1.6" />
        <path d="M 142,88 C 152,98 160,114 162,134 C 164,152 158,168 150,182" opacity="0.4" strokeDasharray="3 4" />
        {/* Zari dots on dupatta */}
        <circle cx="152" cy="112" r="1" fill="url(#goldShimmer)" />
        <circle cx="162" cy="122" r="1" fill="url(#goldShimmer)" />
        <circle cx="166" cy="144" r="1" fill="url(#goldShimmer)" />
        <circle cx="154" cy="158" r="1" fill="url(#goldShimmer)" />
        <circle cx="146" cy="138" r="1" fill="url(#goldShimmer)" />
      </g>

      {/* Makeup Artist Brush Swirling Through */}
      <g>
        {/* Bristles plume */}
        <path
          d="M 184,86 C 182,78 186,66 195,62 C 204,58 206,68 204,78 C 202,86 196,96 186,106 Z"
          fill="url(#brushBristles)"
          opacity="0.9"
        />
        {/* Brush Ferrule (Gold metallic collar) */}
        <path
          d="M 183,103 L 191,96 L 198,103 L 190,110 Z"
          fill="url(#goldShimmer)"
          stroke="#8C6627"
          strokeWidth="0.8"
        />
        {/* Wooden Brush Handle */}
        <path
          d="M 187,106 L 152,156 C 150,158 147,159 145,157 C 143,155 144,152 146,150 L 181,100 Z"
          fill="url(#brushWood)"
          stroke="url(#goldShimmer)"
          strokeWidth="0.6"
        />
      </g>
    </svg>
  );

  const getDimension = () => {
    switch (size) {
      case 'sm':
        return 44;
      case 'lg':
        return 120;
      case 'xl':
        return 160;
      case 'md':
      default:
        return 72;
    }
  };

  const dim = getDimension();

  if (variant === 'icon') {
    return <div className={`inline-flex items-center justify-center ${className}`}>{renderEmblem(dim)}</div>;
  }

  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        {renderEmblem(dim)}
        <div className="flex flex-col">
          <span
            className={`font-serif tracking-tight font-medium leading-none ${
              light ? 'text-[#FAF7F2]' : 'text-[#6B1728]'
            } ${size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl'}`}
          >
            shringaar
          </span>
          <span
            className={`font-display italic text-[#C5A059] leading-tight -mt-1 ${
              size === 'sm' ? 'text-base' : size === 'lg' ? 'text-xl' : 'text-lg'
            }`}
          >
            tales
          </span>
          <span
            className={`text-[9px] uppercase tracking-[0.28em] font-sans font-medium ${
              light ? 'text-[#D4AF37]/90' : 'text-[#6B1728]/80'
            }`}
          >
            by harshita
          </span>
        </div>
      </div>
    );
  }

  // Full Stacked Centered Logo (like the brand image)
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {renderEmblem(dim)}
      <div className="mt-2 flex flex-col items-center">
        <h1
          className={`font-serif tracking-tight font-medium ${
            light ? 'text-[#FAF7F2]' : 'text-[#6B1728]'
          } ${
            size === 'sm'
              ? 'text-lg leading-tight'
              : size === 'lg'
              ? 'text-3xl leading-tight'
              : size === 'xl'
              ? 'text-4xl leading-tight'
              : 'text-2xl leading-tight'
          }`}
        >
          shringaar
        </h1>
        <span
          className={`font-display italic font-semibold text-[#C5A059] -mt-1.5 ${
            size === 'sm'
              ? 'text-base'
              : size === 'lg'
              ? 'text-2xl'
              : size === 'xl'
              ? 'text-3xl'
              : 'text-xl'
          }`}
        >
          tales
        </span>
        <p
          className={`uppercase font-sans font-medium tracking-[0.32em] mt-0.5 ${
            light ? 'text-[#D4AF37]/90' : 'text-[#6B1728]/80'
          } ${size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-xs' : 'text-[10px]'}`}
        >
          by harshita
        </p>
      </div>
    </div>
  );
};
