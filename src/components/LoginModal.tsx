import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { Lock, User, Key, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate credentials: username: harshita, password: 4321
    if (username.trim().toLowerCase() === 'harshita' && password.trim() === '4321') {
      setError('');
      onLoginSuccess();
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-md bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#E9E0D1] shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#7A6A61] hover:text-[#2C2420] rounded-full hover:bg-[#F4EEE5] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Header */}
        <div className="flex flex-col items-center text-center space-y-2">
          <BrandLogo size="sm" variant="full" />
          <div className="pt-2">
            <h3 className="font-serif text-2xl font-medium text-[#2C2420]">
              Artist Management Portal
            </h3>
            <p className="text-xs text-[#7A6A61] mt-0.5">
              Access real-time appointment calendar & client inquiries
            </p>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs text-center font-medium">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-[#5C4F48] font-medium block mb-1">
              Username
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-[#7A6A61] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#D6CAB8] bg-white text-xs focus:outline-none focus:ring-2 focus:ring-[#6B1728]"
                autoFocus
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-[#5C4F48] font-medium block mb-1">
              Password
            </label>
            <div className="relative">
              <Key className="w-4 h-4 text-[#7A6A61] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#D6CAB8] bg-white text-xs focus:outline-none focus:ring-2 focus:ring-[#6B1728]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#6B1728] hover:bg-[#54101E] text-white text-xs uppercase tracking-wider font-semibold rounded-xl shadow transition-colors flex items-center justify-center gap-2"
          >
            <span>Login to Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center">
          <p className="text-[11px] text-[#7A6A61]">
            For client bookings and inquiries, please return to the main website.
          </p>
        </div>

      </div>
    </div>
  );
};
