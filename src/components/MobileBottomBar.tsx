import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E9E0D1] p-2.5 px-4 shadow-lg flex items-center justify-between gap-2.5">
      {/* 1-Tap Call */}
      <a
        href="tel:+918081520570"
        className="flex-1 py-2 px-3 rounded-xl bg-white border border-[#D6CAB8] text-[#2C2420] text-xs font-semibold flex items-center justify-center gap-1.5 active:bg-[#F4EEE5]"
        aria-label="Call Harshita"
      >
        <Phone className="w-3.5 h-3.5 text-[#6B1728]" />
        <span>Call</span>
      </a>

      {/* 1-Tap WhatsApp */}
      <a
        href="https://wa.me/918081520570?text=Hello%20Harshita%2C%20I%20am%20interested%20in%20bridal%20makeup%20services%20in%20Kanpur."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2 px-3 rounded-xl bg-[#25D366] text-white text-xs font-semibold flex items-center justify-center gap-1.5 active:bg-[#20ba5a] shadow-sm"
        aria-label="WhatsApp Harshita"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      {/* 1-Tap Book */}
      <button
        onClick={onOpenBooking}
        className="flex-[1.2] py-2 px-3 rounded-xl bg-gradient-to-r from-[#6B1728] to-[#800020] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm active:from-[#54101E]"
      >
        <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
        <span>Book Date</span>
      </button>
    </div>
  );
};
