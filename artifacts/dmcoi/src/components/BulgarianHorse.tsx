import React from 'react';

type HorseVariant = 'hero' | 'service' | 'quote';

interface BulgarianHorseProps extends React.SVGProps<SVGSVGElement> {
  variant?: HorseVariant;
}

export function BulgarianHorse({ variant = 'hero', className = '', ...props }: BulgarianHorseProps) {
  if (variant === 'hero') {
    return (
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full drop-shadow-2xl ${className}`}
        {...props}
      >
        <path d="M120 380 C 140 280, 80 180, 160 80 C 180 50, 220 50, 260 90 C 280 120, 260 160, 240 200 C 280 240, 320 280, 280 380 Z" fill="#0B0B0B" stroke="#0066FF" strokeWidth="8" />
        <circle cx="210" cy="110" r="8" fill="#0066FF" />
        <path d="M 190 70 Q 210 50 230 80" stroke="#0066FF" strokeWidth="6" fill="none" />
        <path d="M 260 140 Q 280 160 250 190" stroke="#0066FF" strokeWidth="4" fill="none" />
        <path d="M 150 200 L 120 240" stroke="#0066FF" strokeWidth="6" strokeLinecap="round" />
        <path d="M 250 280 L 280 320" stroke="#0066FF" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === 'quote') {
    return (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full opacity-20 ${className}`}
        {...props}
      >
        <path d="M40 180 C 60 120, 80 60, 140 40 C 160 30, 180 60, 150 90 C 120 120, 100 150, 80 180 Z" fill="#0066FF" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-16 h-16 ${className}`}
      {...props}
    >
      <path d="M30 80 C 40 60, 30 40, 50 20 C 60 10, 70 20, 70 40 C 70 60, 60 70, 50 80 Z" fill="#0B0B0B" stroke="#0066FF" strokeWidth="4" />
      <circle cx="55" cy="30" r="3" fill="#0066FF" />
    </svg>
  );
}
