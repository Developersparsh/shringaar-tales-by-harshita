import React, { useState } from 'react';
import { Booking, Inquiry, BookingStatus, ServiceCategory } from '../types';
import { BrandLogo } from './BrandLogo';
import { 
  Users, Calendar, Clock, DollarSign, Search, Filter, 
  MessageCircle, Phone, CheckCircle, XCircle, AlertCircle, 
  Download, Plus, LogOut, ArrowLeft, Edit3, Trash2, ShieldCheck, Check
} from 'lucide-react';

interface AdminDashboardProps {
  bookings: Booking[];
  inquiries: Inquiry[];
  onUpdateBookingStatus: (id: string, status: BookingStatus, internalNotes?: string, advancePaid?: number) => void;
  onUpdateInquiryStatus: (id: string, status: 'new' | 'contacted' | 'booked' | 'archived') => void;
  onAddBooking: (booking: Booking) => void;
  onDeleteBooking: (id: string) => void;
  onClose: () => void;
  onLogout: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  bookings,
  inquiries,
  onUpdateBookingStatus,
  onUpdateInquiryStatus,
  onAddBooking,
  onDeleteBooking,
  onClose,
  onLogout,
}) => {
  const [activeTab, setActiveTab] = useState<'bookings' | 'inquiries' | 'add' | 'analytics'>('bookings');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBookingForNotes, setSelectedBookingForNotes] = useState<Booking | null>(null);
  const [editingNotesText, setEditingNotesText] = useState<string>('');
  const [editingAdvanceAmount, setEditingAdvanceAmount] = useState<number>(0);

  // Quick form for offline booking
  const [offlineName, setOfflineName] = useState('');
  const [offlinePhone, setOfflinePhone] = useState('');
  const [offlineDate, setOfflineDate] = useState('');
  const [offlineService, setOfflineService] = useState<ServiceCategory>('Royal Bridal');
  const [offlineVenue, setOfflineVenue] = useState('Kanpur Venue');
  const [offlineTotal, setOfflineTotal] = useState(22000);
  const [offlineAdvance, setOfflineAdvance] = useState(5000);
  const [offlineNotes, setOfflineNotes] = useState('');

  // Filtering
  const filteredBookings = bookings.filter((b) => {
    const matchesStatus = statusFilter === 'all' || b.status === statusFilter;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      b.clientName.toLowerCase().includes(query) ||
      b.phone.toLowerCase().includes(query) ||
      b.venueAddress.toLowerCase().includes(query) ||
      b.id.toLowerCase().includes(query);
    return matchesStatus && matchesSearch;
  });

  // Analytics Metrics
  const totalBookingsCount = bookings.length;
  const confirmedCount = bookings.filter((b) => b.status === 'confirmed').length;
  const pendingCount = bookings.filter((b) => b.status === 'pending').length;
  const totalPipelineRevenue = bookings
    .filter((b) => b.status !== 'cancelled')
    .reduce((sum, b) => sum + (b.estimatedTotal || 0), 0);
  const totalAdvanceCollected = bookings
    .reduce((sum, b) => sum + (b.advancePaid || 0), 0);

  // Export to CSV
  const handleExportCSV = () => {
    const headers = ['Booking ID', 'Client Name', 'Phone', 'Event Date', 'Service', 'Venue', 'Status', 'Total (INR)', 'Advance Paid (INR)', 'Notes'];
    const rows = bookings.map(b => [
      b.id,
      `"${b.clientName}"`,
      `"${b.phone}"`,
      b.eventDate,
      `"${b.serviceType}"`,
      `"${b.venueAddress}"`,
      b.status,
      b.estimatedTotal,
      b.advancePaid,
      `"${(b.notes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `shringaar_tales_bookings_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAddOfflineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!offlineName || !offlinePhone || !offlineDate) return;

    const newB: Booking = {
      id: `ST-MAN-${Date.now().toString().slice(-4)}`,
      clientName: offlineName,
      phone: offlinePhone,
      email: `${offlineName.toLowerCase().replace(/\s+/g, '')}@client.com`,
      serviceType: offlineService,
      packageTier: 'Signature Royal Luxury',
      eventDate: offlineDate,
      eventTimeSlot: 'Evening (3:00 PM - 8:00 PM)',
      venueType: 'On-Location (Kanpur)',
      venueAddress: offlineVenue,
      guestCount: 0,
      estimatedTotal: Number(offlineTotal) || 22000,
      advancePaid: Number(offlineAdvance) || 0,
      notes: offlineNotes,
      internalNotes: `Manual entry by Harshita on ${new Date().toLocaleDateString()}`,
      status: Number(offlineAdvance) > 0 ? 'confirmed' : 'pending',
      createdAt: new Date().toISOString(),
    };

    onAddBooking(newB);
    alert(`Appointment for ${offlineName} on ${offlineDate} has been saved!`);
    // reset
    setOfflineName('');
    setOfflinePhone('');
    setOfflineDate('');
    setActiveTab('bookings');
  };

  return (
    <div className="min-h-screen bg-[#F4EEE5] text-[#2C2420] pb-16">
      
      {/* Top Header */}
      <header className="bg-white border-b border-[#E9E0D1] sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B1728] hover:text-[#4A0D17] px-3 py-1.5 rounded-lg hover:bg-[#FAF7F2] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Public Site</span>
            </button>

            <div className="h-5 w-px bg-[#E9E0D1] hidden sm:block" />

            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-base text-[#6B1728]">
                Shringaar Tales
              </span>
              <span className="text-[11px] font-mono uppercase bg-[#6B1728]/10 text-[#6B1728] px-2 py-0.5 rounded font-medium">
                Harshita's Portal
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-xs text-[#7A6A61]">
              Logged in as <strong className="text-[#2C2420]">harshita</strong>
            </span>
            <button
              onClick={onLogout}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-rose-700 hover:text-rose-900 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg transition-colors border border-rose-200"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* KPI Metric Summary Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E9E0D1] shadow-sm">
            <div className="flex items-center justify-between text-[#7A6A61] text-xs">
              <span>Total Bookings</span>
              <Calendar className="w-4 h-4 text-[#6B1728]" />
            </div>
            <div className="mt-2 text-2xl sm:text-3xl font-serif font-semibold text-[#2C2420] tabular-nums">
              {totalBookingsCount}
            </div>
            <p className="text-[11px] text-[#7A6A61] mt-1">{confirmedCount} Confirmed · {pendingCount} Pending</p>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E9E0D1] shadow-sm">
            <div className="flex items-center justify-between text-[#7A6A61] text-xs">
              <span>Pending Attention</span>
              <AlertCircle className="w-4 h-4 text-amber-600" />
            </div>
            <div className="mt-2 text-2xl sm:text-3xl font-serif font-semibold text-amber-700 tabular-nums">
              {pendingCount}
            </div>
            <p className="text-[11px] text-[#7A6A61] mt-1">Awaiting advance token or review</p>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E9E0D1] shadow-sm">
            <div className="flex items-center justify-between text-[#7A6A61] text-xs">
              <span>Pipeline Value</span>
              <DollarSign className="w-4 h-4 text-[#C5A059]" />
            </div>
            <div className="mt-2 text-2xl sm:text-3xl font-serif font-semibold text-[#6B1728] tabular-nums">
              ₹{totalPipelineRevenue.toLocaleString('en-IN')}
            </div>
            <p className="text-[11px] text-[#7A6A61] mt-1">Est. value of active wedding dates</p>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E9E0D1] shadow-sm">
            <div className="flex items-center justify-between text-[#7A6A61] text-xs">
              <span>Advance Collected</span>
              <CheckCircle className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="mt-2 text-2xl sm:text-3xl font-serif font-semibold text-emerald-700 tabular-nums">
              ₹{totalAdvanceCollected.toLocaleString('en-IN')}
            </div>
            <p className="text-[11px] text-[#7A6A61] mt-1">Confirmed token receipts</p>
          </div>
        </div>

        {/* Dashboard Tabs & Actions */}
        <div className="bg-white rounded-2xl border border-[#E9E0D1] p-4 sm:p-5 shadow-sm mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Segmented Tab Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-[#F4EEE5] rounded-xl overflow-x-auto">
            <button
              onClick={() => setActiveTab('bookings')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'bookings'
                  ? 'bg-white text-[#6B1728] shadow-sm'
                  : 'text-[#5C4F48] hover:text-[#2C2420]'
              }`}
            >
              Wedding Appointments ({bookings.length})
            </button>

            <button
              onClick={() => setActiveTab('inquiries')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'inquiries'
                  ? 'bg-white text-[#6B1728] shadow-sm'
                  : 'text-[#5C4F48] hover:text-[#2C2420]'
              }`}
            >
              <span>Consultation Queries</span>
              {inquiries.filter((q) => q.status === 'new').length > 0 && (
                <span className="w-2 h-2 rounded-full bg-rose-500" />
              )}
              <span className="tabular-nums">({inquiries.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('add')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'add'
                  ? 'bg-white text-[#6B1728] shadow-sm'
                  : 'text-[#5C4F48] hover:text-[#2C2420]'
              }`}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Offline Booking</span>
            </button>
          </div>

          {/* Export Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#4A3E39] bg-[#FAF7F2] hover:bg-[#F4EEE5] rounded-xl border border-[#D6CAB8] transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#6B1728]" />
              <span>Export CSV</span>
            </button>
          </div>

        </div>

        {/* TAB 1: BOOKINGS LIST */}
        {activeTab === 'bookings' && (
          <div className="space-y-4">
            
            {/* Search & Filter Toolbar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-[#E9E0D1] shadow-sm">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-[#7A6A61] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by bride name, phone, venue, or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-[#D6CAB8] bg-[#FAF7F2]/40 focus:outline-none focus:ring-2 focus:ring-[#6B1728]"
                />
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="text-[#7A6A61] font-medium">Status:</span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-[#D6CAB8] bg-[#FAF7F2]/40 text-xs focus:outline-none focus:ring-2 focus:ring-[#6B1728]"
                >
                  <option value="all">All Bookings</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            {/* Bookings Table / Cards */}
            <div className="bg-white rounded-2xl border border-[#E9E0D1] overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FAF7F2] text-[#5C4F48] font-semibold border-b border-[#E9E0D1]">
                    <tr>
                      <th className="py-3 px-4">Client & Contact</th>
                      <th className="py-3 px-4">Event Date & Time</th>
                      <th className="py-3 px-4">Service & Venue</th>
                      <th className="py-3 px-4">Payment & Advance</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Harshita Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F4EEE5]">
                    {filteredBookings.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-[#7A6A61]">
                          No wedding appointments match the current filter.
                        </td>
                      </tr>
                    ) : (
                      filteredBookings.map((b) => {
                        const statusColors: Record<BookingStatus, string> = {
                          pending: 'text-amber-800 bg-amber-50 border-amber-200',
                          confirmed: 'text-emerald-800 bg-emerald-50 border-emerald-200',
                          completed: 'text-blue-800 bg-blue-50 border-blue-200',
                          cancelled: 'text-slate-600 bg-slate-100 border-slate-200',
                        };

                        const whatsAppUrl = `https://wa.me/${b.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                          `Namaste ${b.clientName} ji! This is Harshita Tiwari from Shringaar Tales. Reaching out regarding your bridal makeup booking (Ref: ${b.id}) on ${b.eventDate} at ${b.venueAddress}.`
                        )}`;

                        return (
                          <tr key={b.id} className="hover:bg-[#FAF7F2]/60 transition-colors">
                            {/* Client */}
                            <td className="py-3.5 px-4">
                              <div className="font-semibold text-[#2C2420] text-sm">{b.clientName}</div>
                              <div className="font-mono text-[11px] text-[#7A6A61] mt-0.5">{b.phone}</div>
                              <div className="text-[10px] text-[#6B1728] font-mono mt-0.5">Ref: {b.id}</div>
                            </td>

                            {/* Date */}
                            <td className="py-3.5 px-4">
                              <div className="font-semibold text-[#2C2420] font-mono tabular-nums">{b.eventDate}</div>
                              <div className="text-[11px] text-[#7A6A61] mt-0.5">{b.eventTimeSlot}</div>
                            </td>

                            {/* Service */}
                            <td className="py-3.5 px-4 max-w-xs">
                              <div className="font-medium text-[#2C2420]">{b.serviceType}</div>
                              <div className="text-[11px] text-[#7A6A61] truncate mt-0.5">{b.venueAddress}</div>
                              {b.guestCount > 0 && (
                                <div className="text-[10px] text-[#6B1728] mt-0.5">
                                  +{b.guestCount} additional party makeups
                                </div>
                              )}
                            </td>

                            {/* Payment */}
                            <td className="py-3.5 px-4">
                              <div className="font-semibold text-[#2C2420] font-mono tabular-nums">
                                ₹{b.estimatedTotal.toLocaleString('en-IN')}
                              </div>
                              <div className="text-[11px] text-emerald-700 mt-0.5 font-medium">
                                Adv: ₹{b.advancePaid.toLocaleString('en-IN')}
                              </div>
                            </td>

                            {/* Status */}
                            <td className="py-3.5 px-4">
                              <select
                                value={b.status}
                                onChange={(e) => onUpdateBookingStatus(b.id, e.target.value as BookingStatus)}
                                className={`text-[11px] font-semibold px-2.5 py-1 rounded-md border ${statusColors[b.status]} focus:outline-none`}
                              >
                                <option value="pending">Pending</option>
                                <option value="confirmed">Confirmed</option>
                                <option value="completed">Completed</option>
                                <option value="cancelled">Cancelled</option>
                              </select>
                            </td>

                            {/* Actions */}
                            <td className="py-3.5 px-4 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <a
                                  href={whatsAppUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1.5 text-[#075E54] hover:bg-[#25D366]/20 rounded-lg transition-colors border border-[#25D366]/30"
                                  title="Send WhatsApp Message"
                                >
                                  <MessageCircle className="w-4 h-4" />
                                </a>

                                <a
                                  href={`tel:${b.phone}`}
                                  className="p-1.5 text-[#6B1728] hover:bg-[#6B1728]/10 rounded-lg transition-colors border border-[#6B1728]/20"
                                  title="Call Client"
                                >
                                  <Phone className="w-4 h-4" />
                                </a>

                                <button
                                  onClick={() => {
                                    setSelectedBookingForNotes(b);
                                    setEditingNotesText(b.internalNotes || '');
                                    setEditingAdvanceAmount(b.advancePaid || 0);
                                  }}
                                  className="p-1.5 text-[#4A3E39] hover:bg-[#F4EEE5] rounded-lg transition-colors border border-[#E9E0D1]"
                                  title="Edit Internal Notes & Advance"
                                >
                                  <Edit3 className="w-4 h-4" />
                                </button>

                                <button
                                  onClick={() => {
                                    if (confirm(`Are you sure you want to delete booking ${b.id} for ${b.clientName}?`)) {
                                      onDeleteBooking(b.id);
                                    }
                                  }}
                                  className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors border border-rose-200"
                                  title="Delete Appointment"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: INQUIRIES LIST */}
        {activeTab === 'inquiries' && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-[#E9E0D1] overflow-hidden shadow-sm">
              <div className="p-4 bg-[#FAF7F2] border-b border-[#E9E0D1] flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-base font-semibold text-[#2C2420]">
                    Direct Client Inquiries & Consultations
                  </h3>
                  <p className="text-xs text-[#7A6A61]">
                    Messages submitted through the public website contact form.
                  </p>
                </div>
              </div>

              <div className="divide-y divide-[#F4EEE5]">
                {inquiries.length === 0 ? (
                  <div className="p-8 text-center text-[#7A6A61] text-xs">
                    No inquiries received yet.
                  </div>
                ) : (
                  inquiries.map((inq) => {
                    const whatsAppUrl = `https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                      `Namaste ${inq.clientName}! This is Harshita Tiwari from Shringaar Tales. I received your inquiry regarding "${inq.serviceInterested}". Are you still looking for wedding makeup services?`
                    )}`;

                    return (
                      <div key={inq.id} className="p-4 sm:p-5 hover:bg-[#FAF7F2]/50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-1.5 max-w-xl">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm text-[#2C2420]">{inq.clientName}</span>
                            <span className="text-xs font-mono text-[#7A6A61]">{inq.phone}</span>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                              inq.status === 'new' ? 'bg-rose-100 text-rose-800' :
                              inq.status === 'contacted' ? 'bg-amber-100 text-amber-800' :
                              inq.status === 'booked' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-700'
                            }`}>
                              {inq.status.toUpperCase()}
                            </span>
                          </div>

                          <p className="text-xs text-[#6B1728] font-medium">
                            Service: {inq.serviceInterested} {inq.eventDate ? `· Date: ${inq.eventDate}` : ''}
                          </p>

                          <p className="text-xs text-[#4A3E39] bg-[#FAF7F2] p-2.5 rounded-xl border border-[#E9E0D1]/60">
                            "{inq.message}"
                          </p>

                          <span className="text-[10px] text-[#7A6A61] block">
                            Received on {new Date(inq.createdAt).toLocaleDateString()} at {new Date(inq.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <select
                            value={inq.status}
                            onChange={(e) => onUpdateInquiryStatus(inq.id, e.target.value as any)}
                            className="text-xs px-2.5 py-1.5 rounded-lg border border-[#D6CAB8] bg-white text-[#4A3E39]"
                          >
                            <option value="new">Mark New</option>
                            <option value="contacted">Mark Contacted</option>
                            <option value="booked">Convert to Booked</option>
                            <option value="archived">Archive</option>
                          </select>

                          <a
                            href={whatsAppUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-lg text-xs font-medium flex items-center gap-1.5 shadow-sm"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>WhatsApp Reply</span>
                          </a>

                          <a
                            href={`tel:${inq.phone}`}
                            className="p-1.5 text-[#6B1728] border border-[#6B1728]/30 rounded-lg hover:bg-[#6B1728]/10"
                            title="Call"
                          >
                            <Phone className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ADD OFFLINE BOOKING */}
        {activeTab === 'add' && (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-[#E9E0D1] shadow-sm">
            <h3 className="font-serif text-2xl font-medium text-[#2C2420] mb-2">
              Add Offline / Direct Client Booking
            </h3>
            <p className="text-xs text-[#7A6A61] mb-6">
              Enter bookings taken over direct phone call, in-studio consultation, or family referral in Kanpur.
            </p>

            <form onSubmit={handleAddOfflineSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#5C4F48] font-medium block mb-1">
                    Bride / Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Radhika Sharma"
                    value={offlineName}
                    onChange={(e) => setOfflineName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D6CAB8] bg-[#FAF7F2]/40 text-xs focus:ring-2 focus:ring-[#6B1728]"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#5C4F48] font-medium block mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98390 00000"
                    value={offlinePhone}
                    onChange={(e) => setOfflinePhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D6CAB8] bg-[#FAF7F2]/40 text-xs focus:ring-2 focus:ring-[#6B1728]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#5C4F48] font-medium block mb-1">
                    Wedding / Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={offlineDate}
                    onChange={(e) => setOfflineDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D6CAB8] bg-[#FAF7F2]/40 text-xs focus:ring-2 focus:ring-[#6B1728]"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#5C4F48] font-medium block mb-1">
                    Service Package
                  </label>
                  <select
                    value={offlineService}
                    onChange={(e) => setOfflineService(e.target.value as ServiceCategory)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D6CAB8] bg-[#FAF7F2]/40 text-xs focus:ring-2 focus:ring-[#6B1728]"
                  >
                    <option value="Royal Bridal">Royal Bridal (Pheras)</option>
                    <option value="HD Reception">HD Reception Glam</option>
                    <option value="Cocktail & Sangeet">Cocktail & Sangeet</option>
                    <option value="Engagement & Roka">Engagement & Roka</option>
                    <option value="Haldi & Mehendi">Haldi & Mehendi</option>
                    <option value="Party Guest Makeup">Party Guest Makeup</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs text-[#5C4F48] font-medium block mb-1">
                  Venue (Hotel / Hall / Location)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Landmark Towers / Swaroop Nagar Residence"
                  value={offlineVenue}
                  onChange={(e) => setOfflineVenue(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D6CAB8] bg-[#FAF7F2]/40 text-xs focus:ring-2 focus:ring-[#6B1728]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#5C4F48] font-medium block mb-1">
                    Agreed Total (INR)
                  </label>
                  <input
                    type="number"
                    value={offlineTotal}
                    onChange={(e) => setOfflineTotal(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D6CAB8] bg-[#FAF7F2]/40 text-xs focus:ring-2 focus:ring-[#6B1728]"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#5C4F48] font-medium block mb-1">
                    Advance Token Received (INR)
                  </label>
                  <input
                    type="number"
                    value={offlineAdvance}
                    onChange={(e) => setOfflineAdvance(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D6CAB8] bg-[#FAF7F2]/40 text-xs focus:ring-2 focus:ring-[#6B1728]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-[#5C4F48] font-medium block mb-1">
                  Internal Notes (e.g. Lehenga color, draping details)
                </label>
                <textarea
                  rows={2}
                  value={offlineNotes}
                  onChange={(e) => setOfflineNotes(e.target.value)}
                  placeholder="e.g. Maroon Sabyasachi lehenga, trial done, advance received in cash/UPI"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D6CAB8] bg-[#FAF7F2]/40 text-xs focus:ring-2 focus:ring-[#6B1728]"
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('bookings')}
                  className="px-4 py-2.5 text-xs text-[#7A6A61] hover:text-[#2C2420]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#6B1728] hover:bg-[#54101E] text-white rounded-xl text-xs font-semibold uppercase tracking-wider shadow"
                >
                  Save Booking to Calendar
                </button>
              </div>
            </form>
          </div>
        )}

      </main>

      {/* Edit Notes & Advance Modal */}
      {selectedBookingForNotes && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 border border-[#E9E0D1] shadow-2xl space-y-4">
            <h3 className="font-serif text-xl font-medium text-[#2C2420]">
              Update Booking: {selectedBookingForNotes.clientName}
            </h3>
            <p className="text-xs text-[#7A6A61]">
              Event Date: {selectedBookingForNotes.eventDate} · Ref: {selectedBookingForNotes.id}
            </p>

            <div>
              <label className="text-xs text-[#5C4F48] font-medium block mb-1">
                Advance Token Amount Paid (INR)
              </label>
              <input
                type="number"
                value={editingAdvanceAmount}
                onChange={(e) => setEditingAdvanceAmount(Number(e.target.value))}
                className="w-full px-3 py-2 text-xs rounded-xl border border-[#D6CAB8] bg-[#FAF7F2]/40"
              />
              <span className="text-[11px] text-[#7A6A61]">
                Total: ₹{selectedBookingForNotes.estimatedTotal.toLocaleString('en-IN')} (Remaining: ₹{(selectedBookingForNotes.estimatedTotal - editingAdvanceAmount).toLocaleString('en-IN')})
              </span>
            </div>

            <div>
              <label className="text-xs text-[#5C4F48] font-medium block mb-1">
                Harshita's Private Notes
              </label>
              <textarea
                rows={3}
                value={editingNotesText}
                onChange={(e) => setEditingNotesText(e.target.value)}
                placeholder="e.g. Trial completed. Bride prefers pink nude lip. Advance received via GPay."
                className="w-full px-3 py-2 text-xs rounded-xl border border-[#D6CAB8] bg-[#FAF7F2]/40"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedBookingForNotes(null)}
                className="px-4 py-2 text-xs text-[#7A6A61]"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onUpdateBookingStatus(
                    selectedBookingForNotes.id,
                    selectedBookingForNotes.status,
                    editingNotesText,
                    editingAdvanceAmount
                  );
                  setSelectedBookingForNotes(null);
                }}
                className="px-5 py-2 bg-[#6B1728] text-white rounded-xl text-xs font-semibold"
              >
                Save Updates
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
