import React, { useState } from 'react';
import { Booking, ServiceCategory } from '../types';
import { Calendar, Clock, MapPin, Users, Phone, MessageCircle, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

interface BookingEngineProps {
  onNewBooking: (booking: Booking) => void;
  initialService?: ServiceCategory;
  initialTier?: string;
}

export const BookingEngine: React.FC<BookingEngineProps> = ({
  onNewBooking,
  initialService = 'Royal Bridal',
  initialTier = 'Signature Royal Luxury',
}) => {
  const [serviceType, setServiceType] = useState<ServiceCategory>(initialService);
  const [packageTier, setPackageTier] = useState<'Essential HD' | 'Signature Royal Luxury' | 'Celebrity Airbrush & Styling'>(
    initialTier as any || 'Signature Royal Luxury'
  );
  const [eventDate, setEventDate] = useState<string>('');
  const [eventTimeSlot, setEventTimeSlot] = useState<string>('Evening (3:00 PM - 8:00 PM)');
  const [venueType, setVenueType] = useState<'Harshita Studio (Kanpur)' | 'On-Location (Kanpur)' | 'Destination (Outside Kanpur)'>(
    'On-Location (Kanpur)'
  );
  const [venueAddress, setVenueAddress] = useState<string>('');
  const [guestCount, setGuestCount] = useState<number>(0);
  const [clientName, setClientName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  
  const [submittedBooking, setSubmittedBooking] = useState<Booking | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dynamic price calculation
  const getBasePrice = () => {
    switch (serviceType) {
      case 'Royal Bridal':
        if (packageTier === 'Celebrity Airbrush & Styling') return 28000;
        if (packageTier === 'Signature Royal Luxury') return 22000;
        return 18000;
      case 'HD Reception':
        return 18000;
      case 'Cocktail & Sangeet':
        return 14000;
      case 'Engagement & Roka':
        return 14000;
      case 'Haldi & Mehendi':
        return 10500;
      case 'Party Guest Makeup':
        return 4500;
      default:
        return 15000;
    }
  };

  const basePrice = getBasePrice();
  const guestMakeupPrice = guestCount * 4500;
  const travelFee = venueType === 'Destination (Outside Kanpur)' ? 5000 : 0;
  const estimatedTotal = basePrice + guestMakeupPrice + travelFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !phone || !eventDate) {
      alert('Please fill in your name, contact phone, and wedding/event date.');
      return;
    }

    setIsSubmitting(true);

    const newBooking: Booking = {
      id: `ST-${Date.now().toString().slice(-5)}`,
      clientName,
      phone,
      email: email || `${clientName.toLowerCase().replace(/\s+/g, '')}@gmail.com`,
      serviceType,
      packageTier,
      eventDate,
      eventTimeSlot,
      venueType,
      venueAddress: venueAddress || (venueType.includes('Studio') ? 'Harshita Studio, Swaroop Nagar, Kanpur' : 'Kanpur Venue'),
      guestCount,
      estimatedTotal,
      advancePaid: 0,
      notes,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    setTimeout(() => {
      onNewBooking(newBooking);
      setSubmittedBooking(newBooking);
      setIsSubmitting(false);
    }, 400);
  };

  const getWhatsAppBookingLink = (booking: Booking) => {
    const text = `Namaste Harshita ji!%0A%0AI have requested an appointment on your website for Shringaar Tales:%0A%0A*Booking Ref:* ${booking.id}%0A*Bride/Client:* ${booking.clientName}%0A*Phone:* ${booking.phone}%0A*Event Date:* ${booking.eventDate}%0A*Time:* ${booking.eventTimeSlot}%0A*Service:* ${booking.serviceType} (${booking.packageTier})%0A*Venue:* ${booking.venueAddress}%0A*Family/Party Makeups:* ${booking.guestCount}%0A*Estimated Total:* ₹${booking.estimatedTotal.toLocaleString('en-IN')}%0A*Notes:* ${booking.notes || 'None'}%0A%0APlease check availability and share advance payment details.`;
    return `https://wa.me/918081520570?text=${text}`;
  };

  return (
    <section id="booking" className="py-16 lg:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#6B1728]">
            Instant Date Reservation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2420] font-normal tracking-tight">
            Check Availability & Reserve Your Date
          </h2>
          <p className="text-base text-[#5C4F48]">
            Select your preferred event details below. Your reservation is immediately tracked on Harshita’s dashboard and can be confirmed with 1 tap on WhatsApp.
          </p>
        </div>

        {/* Booking Form or Success Card */}
        {submittedBooking ? (
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E9E0D1] shadow-xl text-center space-y-6 animate-in fade-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center mx-auto text-[#075E54]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#6B1728]">
                Appointment Request Submitted · ID: {submittedBooking.id}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#2C2420]">
                Thank You, {submittedBooking.clientName}!
              </h3>
              <p className="text-sm text-[#5C4F48] max-w-md mx-auto">
                Your wedding date <strong className="text-[#2C2420]">{submittedBooking.eventDate}</strong> ({submittedBooking.eventTimeSlot}) has been registered in Harshita Tiwari's appointment calendar.
              </p>
            </div>

            {/* Summary Box */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#E9E0D1] max-w-lg mx-auto text-left text-xs space-y-2.5">
              <div className="flex justify-between border-b border-[#E9E0D1] pb-2">
                <span className="text-[#7A6A61]">Service:</span>
                <span className="font-semibold text-[#2C2420]">{submittedBooking.serviceType} ({submittedBooking.packageTier})</span>
              </div>
              <div className="flex justify-between border-b border-[#E9E0D1] pb-2">
                <span className="text-[#7A6A61]">Venue:</span>
                <span className="font-medium text-[#2C2420]">{submittedBooking.venueAddress}</span>
              </div>
              <div className="flex justify-between border-b border-[#E9E0D1] pb-2">
                <span className="text-[#7A6A61]">Additional Party Makeups:</span>
                <span className="font-medium text-[#2C2420]">{submittedBooking.guestCount} member(s)</span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-[#6B1728] pt-1">
                <span>Estimated Quote:</span>
                <span className="tabular-nums">₹{submittedBooking.estimatedTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* WhatsApp & Call Direct Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={getWhatsAppBookingLink(submittedBooking)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Instantly via WhatsApp (+91 8081520570)</span>
              </a>

              <a
                href="tel:+918081520570"
                className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-[#FAF7F2] text-[#2C2420] border border-[#D6CAB8] rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#6B1728]" />
                <span>Call Harshita</span>
              </a>
            </div>

            <button
              onClick={() => setSubmittedBooking(null)}
              className="text-xs text-[#7A6A61] hover:text-[#2C2420] underline underline-offset-4"
            >
              Book Another Service / Edit Details
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E9E0D1] shadow-xl space-y-8"
          >
            {/* Step 1: Select Service & Tier */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#6B1728]">
                <span>Step 1</span>
                <span aria-hidden="true">·</span>
                <span>Select Event & Artistry Style</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  'Royal Bridal',
                  'HD Reception',
                  'Cocktail & Sangeet',
                  'Engagement & Roka',
                  'Haldi & Mehendi',
                  'Party Guest Makeup',
                ].map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setServiceType(st as ServiceCategory)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      serviceType === st
                        ? 'border-[#6B1728] bg-[#6B1728]/5 text-[#6B1728] font-semibold ring-1 ring-[#6B1728]'
                        : 'border-[#E9E0D1] bg-[#FAF7F2]/50 hover:bg-[#FAF7F2] text-[#4A3E39]'
                    }`}
                  >
                    <span className="text-xs block leading-tight">{st}</span>
                  </button>
                ))}
              </div>

              {/* Package Tier if Bridal */}
              {serviceType === 'Royal Bridal' && (
                <div className="pt-2">
                  <label className="text-xs text-[#5C4F48] font-medium block mb-2">
                    Bridal Package Tier:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { name: 'Essential HD', price: '₹18,000', desc: 'Flawless HD cream formulation' },
                      { name: 'Signature Royal Luxury', price: '₹22,000', desc: 'Full Banarasi drape, 3D lashes & Mogra bun' },
                      { name: 'Celebrity Airbrush & Styling', price: '₹28,000', desc: 'Temptu silicone micro-mist finish' },
                    ].map((tier) => (
                      <button
                        key={tier.name}
                        type="button"
                        onClick={() => setPackageTier(tier.name as any)}
                        className={`p-3 rounded-xl text-left border transition-all ${
                          packageTier === tier.name
                            ? 'border-[#C5A059] bg-[#C5A059]/10 text-[#2C2420] ring-1 ring-[#C5A059]'
                            : 'border-[#E9E0D1] hover:bg-[#FAF7F2] text-[#5C4F48]'
                        }`}
                      >
                        <span className="text-xs font-semibold block">{tier.name}</span>
                        <span className="text-xs font-serif text-[#6B1728] font-semibold">{tier.price}</span>
                        <span className="text-[11px] text-[#7A6A61] block mt-1">{tier.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Step 2: Date, Time & Venue */}
            <div className="space-y-4 pt-4 border-t border-[#E9E0D1]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#6B1728]">
                <span>Step 2</span>
                <span aria-hidden="true">·</span>
                <span>Date, Time & Venue in Kanpur</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#5C4F48] font-medium block mb-1.5">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D6CAB8] bg-[#FAF7F2]/40 text-xs focus:outline-none focus:ring-2 focus:ring-[#6B1728]"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#5C4F48] font-medium block mb-1.5">
                    Target Makeup Completion Time Slot
                  </label>
                  <select
                    value={eventTimeSlot}
                    onChange={(e) => setEventTimeSlot(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D6CAB8] bg-[#FAF7F2]/40 text-xs focus:outline-none focus:ring-2 focus:ring-[#6B1728]"
                  >
                    <option value="Morning (6:00 AM - 11:00 AM)">Morning (6:00 AM - 11:00 AM) · Haldi/Day Pheras</option>
                    <option value="Afternoon (11:00 AM - 3:00 PM)">Afternoon (11:00 AM - 3:00 PM) · Engagement/Roka</option>
                    <option value="Evening (3:00 PM - 8:00 PM)">Evening (3:00 PM - 8:00 PM) · Varmala & Pheras</option>
                    <option value="Late Evening (5:00 PM - 10:00 PM)">Late Evening (5:00 PM - 10:00 PM) · Reception Stage</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#5C4F48] font-medium block mb-1.5">
                    Venue Type
                  </label>
                  <select
                    value={venueType}
                    onChange={(e) => setVenueType(e.target.value as any)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D6CAB8] bg-[#FAF7F2]/40 text-xs focus:outline-none focus:ring-2 focus:ring-[#6B1728]"
                  >
                    <option value="On-Location (Kanpur)">On-Location (Kanpur Hotel or Residence)</option>
                    <option value="Harshita Studio (Kanpur)">Harshita's Studio (Swaroop Nagar, Kanpur)</option>
                    <option value="Destination (Outside Kanpur)">Destination / Outstation (Lucknow, Agra, etc.)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-[#5C4F48] font-medium block mb-1.5">
                    Venue Name or Address
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Landmark Hotel / Status Club / Civil Lines"
                    value={venueAddress}
                    onChange={(e) => setVenueAddress(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D6CAB8] bg-[#FAF7F2]/40 text-xs focus:outline-none focus:ring-2 focus:ring-[#6B1728]"
                  />
                </div>
              </div>

              {/* Guest Count Selector */}
              <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E9E0D1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold text-[#2C2420] block">Additional Family / Bridal Party Makeups</span>
                  <p className="text-[11px] text-[#7A6A61]">Mother of the bride, sisters, bridesmaids (+₹4,500 each)</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setGuestCount(Math.max(0, guestCount - 1))}
                    className="w-8 h-8 rounded-lg bg-white border border-[#D6CAB8] text-[#2C2420] font-bold flex items-center justify-center hover:bg-[#F4EEE5]"
                  >
                    -
                  </button>
                  <span className="font-mono text-sm font-semibold tabular-nums px-2">
                    {guestCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setGuestCount(guestCount + 1)}
                    className="w-8 h-8 rounded-lg bg-white border border-[#D6CAB8] text-[#2C2420] font-bold flex items-center justify-center hover:bg-[#F4EEE5]"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Step 3: Bride's Details */}
            <div className="space-y-4 pt-4 border-t border-[#E9E0D1]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#6B1728]">
                <span>Step 3</span>
                <span aria-hidden="true">·</span>
                <span>Client & Contact Information</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs text-[#5C4F48] font-medium block mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priyanka Awasthi"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D6CAB8] bg-[#FAF7F2]/40 text-xs focus:outline-none focus:ring-2 focus:ring-[#6B1728]"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#5C4F48] font-medium block mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98390 00000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D6CAB8] bg-[#FAF7F2]/40 text-xs focus:outline-none focus:ring-2 focus:ring-[#6B1728]"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#5C4F48] font-medium block mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="name@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D6CAB8] bg-[#FAF7F2]/40 text-xs focus:outline-none focus:ring-2 focus:ring-[#6B1728]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-[#5C4F48] font-medium block mb-1.5">
                  Outfit Color, Skin Concerns or Special Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Deep crimson lehenga with gold zari. Skin is dry and sensitive. Need help with heavy dupatta draping."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D6CAB8] bg-[#FAF7F2]/40 text-xs focus:outline-none focus:ring-2 focus:ring-[#6B1728]"
                />
              </div>
            </div>

            {/* Price Estimator & Submission Strip */}
            <div className="pt-6 border-t border-[#E9E0D1] flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#F4EEE5]/50 -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-6 sm:p-8 rounded-b-3xl">
              <div>
                <span className="text-[11px] text-[#7A6A61] uppercase tracking-wider block">Estimated Investment</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl sm:text-4xl font-semibold text-[#6B1728] tabular-nums">
                    ₹{estimatedTotal.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-[#7A6A61]">
                    (Base: ₹{basePrice.toLocaleString('en-IN')} {guestCount > 0 ? `+ Party: ₹${guestMakeupPrice.toLocaleString('en-IN')}` : ''})
                  </span>
                </div>
                <p className="text-[11px] text-[#5C4F48] mt-0.5">
                  * No hidden fees. Token advance of ₹5,000 to ₹10,000 required upon confirmation.
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#6B1728] to-[#800020] hover:from-[#54101E] hover:to-[#6B1728] text-white rounded-xl text-xs uppercase tracking-wider font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 border border-[#D4AF37]/30"
                >
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>{isSubmitting ? 'Registering...' : 'Request Date Reservation'}</span>
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};
