import React, { useState } from 'react';
import { Inquiry } from '../types';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Clock } from 'lucide-react';

interface ContactConsultationProps {
  onNewInquiry: (inquiry: Inquiry) => void;
}

export const ContactConsultation: React.FC<ContactConsultationProps> = ({ onNewInquiry }) => {
  const [clientName, setClientName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [serviceInterested, setServiceInterested] = useState('Royal Bridal Makeup');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !phone) {
      alert('Please provide your name and contact phone number.');
      return;
    }

    const newInq: Inquiry = {
      id: `INQ-${Date.now().toString().slice(-4)}`,
      clientName,
      phone,
      email: email || `${clientName.toLowerCase().replace(/\s+/g, '')}@gmail.com`,
      eventDate,
      serviceInterested,
      message,
      status: 'new',
      createdAt: new Date().toISOString(),
    };

    onNewInquiry(newInq);
    setSubmitted(true);
  };

  const getWhatsAppQuickLink = () => {
    const text = `Hi Harshita di, I saw your website Shringaar Tales. I would like to consult about ${serviceInterested} for my wedding on ${eventDate || 'upcoming date'}. My name is ${clientName || 'Bride'}.`;
    return `https://wa.me/918081520570?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#6B1728]">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2420] font-normal tracking-tight">
            Consultation & Service Inquiries
          </h2>
          <p className="text-base text-[#5C4F48] leading-relaxed">
            Have questions about dates, customized packages, or bridal trials? Send Harshita a direct message or call anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Studio Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E9E0D1] shadow-sm space-y-6">
              
              <h3 className="font-serif text-2xl font-medium text-[#2C2420]">
                Shringaar Tales by Harshita
              </h3>
              
              <p className="text-sm text-[#5C4F48] leading-relaxed">
                Directly managed by freelancing business owner <strong>Harshita Tiwari</strong>. Available for bookings across Kanpur and destination weddings across India.
              </p>

              {/* Direct Touchpoints */}
              <div className="space-y-4 pt-2">
                
                <a
                  href="tel:+918081520570"
                  className="flex items-start gap-4 p-3.5 rounded-2xl hover:bg-[#FAF7F2] transition-colors border border-transparent hover:border-[#E9E0D1]"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#6B1728]/10 flex items-center justify-center text-[#6B1728] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#7A6A61] uppercase tracking-wider block font-medium">Direct Phone & WhatsApp</span>
                    <span className="font-mono text-base font-semibold text-[#2C2420] tabular-nums hover:text-[#6B1728]">
                      +91 8081520570
                    </span>
                    <span className="text-[11px] text-[#075E54] block mt-0.5">Click to call or message</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3.5 rounded-2xl border border-transparent">
                  <div className="w-10 h-10 rounded-xl bg-[#C5A059]/15 flex items-center justify-center text-[#C5A059] shrink-0">
                    <MapPin className="w-5 h-5 text-[#8C6627]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#7A6A61] uppercase tracking-wider block font-medium">Studio & Service Area</span>
                    <span className="text-sm font-semibold text-[#2C2420]">
                      Kanpur, Uttar Pradesh
                    </span>
                    <p className="text-xs text-[#5C4F48] mt-0.5">
                      Studio in Swaroop Nagar · On-location travel across Civil Lines, Tilak Nagar, Cantt, Kakadeo, Kidwai Nagar, Lucknow & destinations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-2xl border border-transparent">
                  <div className="w-10 h-10 rounded-xl bg-[#6B1728]/10 flex items-center justify-center text-[#6B1728] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#7A6A61] uppercase tracking-wider block font-medium">Consultation Hours</span>
                    <span className="text-sm font-semibold text-[#2C2420]">
                      10:00 AM – 8:00 PM (Mon – Sun)
                    </span>
                    <p className="text-xs text-[#5C4F48] mt-0.5">
                      Early morning & late night bridal calls accommodated for confirmed bookings.
                    </p>
                  </div>
                </div>

              </div>

              {/* Fast WhatsApp Connect Button */}
              <div className="pt-2">
                <a
                  href="https://wa.me/918081520570?text=Hello%20Harshita%20di%2C%20I%20am%20interested%20in%20bridal%20makeup%20services%20in%20Kanpur."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl text-xs uppercase tracking-wider font-semibold shadow transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant WhatsApp Chat: +91 8081520570</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Contact & Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E9E0D1] shadow-sm">
              
              {submitted ? (
                <div className="text-center py-8 space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-[#25D366]/20 text-[#075E54] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[#2C2420]">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-[#5C4F48] max-w-md mx-auto">
                    Thank you, {clientName}. Your inquiry has been forwarded to Harshita Tiwari. She will reach out to you via WhatsApp / Call at {phone} within 2-4 hours.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppQuickLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider rounded-xl shadow flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Follow Up on WhatsApp Now</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setMessage('');
                      }}
                      className="text-xs text-[#7A6A61] hover:underline"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#2C2420]">
                      Send a Consultation Message
                    </h3>
                    <p className="text-xs text-[#7A6A61]">
                      Fill out the form below and Harshita will contact you with availability and details.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-[#5C4F48] font-medium block mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Shalini Dixit"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D6CAB8] bg-[#FAF7F2]/40 text-xs focus:outline-none focus:ring-2 focus:ring-[#6B1728]"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-[#5C4F48] font-medium block mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 80815 20570"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D6CAB8] bg-[#FAF7F2]/40 text-xs focus:outline-none focus:ring-2 focus:ring-[#6B1728]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-[#5C4F48] font-medium block mb-1">
                        Tentative Event Date
                      </label>
                      <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D6CAB8] bg-[#FAF7F2]/40 text-xs focus:outline-none focus:ring-2 focus:ring-[#6B1728]"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-[#5C4F48] font-medium block mb-1">
                        Service of Interest
                      </label>
                      <select
                        value={serviceInterested}
                        onChange={(e) => setServiceInterested(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D6CAB8] bg-[#FAF7F2]/40 text-xs focus:outline-none focus:ring-2 focus:ring-[#6B1728]"
                      >
                        <option value="Royal Bridal Makeup">Royal Bridal Makeup (Pheras)</option>
                        <option value="HD Reception Glam">HD Reception Glam</option>
                        <option value="Sangeet & Cocktail Night">Sangeet & Cocktail Night</option>
                        <option value="Engagement & Roka">Engagement & Roka</option>
                        <option value="Haldi & Mehendi Floral">Haldi & Mehendi Floral</option>
                        <option value="Bridal Trial & Vanity Consultation">Bridal Trial & Vanity Consultation</option>
                        <option value="Family / Party Makeups">Family / Party Makeups</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-[#5C4F48] font-medium block mb-1">
                      Your Message / Questions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell Harshita about your venue, wedding outfit details, or any specific questions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D6CAB8] bg-[#FAF7F2]/40 text-xs focus:outline-none focus:ring-2 focus:ring-[#6B1728]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#6B1728] hover:bg-[#54101E] text-white text-xs uppercase tracking-wider font-semibold rounded-xl shadow transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
