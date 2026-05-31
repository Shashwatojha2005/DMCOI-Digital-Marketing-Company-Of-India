import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="https://calendar.app.google/N9bU7euuWj3RUn5y9"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground font-bold px-5 py-3.5 rounded-full shadow-[0_0_30px_rgba(0,102,255,0.5)] hover:shadow-[0_0_45px_rgba(0,102,255,0.7)] hover:scale-105 transition-all duration-300 text-sm ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <Phone className="w-4 h-4" />
      <span className="hidden sm:inline">Book Strategy Call</span>
      <span className="sm:hidden">Call</span>
    </a>
  );
}
