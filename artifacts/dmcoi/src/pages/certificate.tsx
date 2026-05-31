import React from 'react';
import { BulgarianHorse } from '@/components/BulgarianHorse';
import { Printer } from 'lucide-react';

export default function Certificate() {
  const params = Object.fromEntries(new URLSearchParams(window.location.search));

  const name = params.name || 'Recipient Name';
  const role = params.role || 'Digital Marketing Intern';
  const start = params.start || 'January 2025';
  const end = params.end || 'March 2025';
  const certId = params.id || `DMCOI-${Math.floor(10000 + Math.random() * 90000)}`;

  const handlePrint = () => window.print();

  return (
    <div className="bg-background min-h-screen py-12 px-4">
      {/* Controls — hidden on print */}
      <div className="no-print max-w-4xl mx-auto mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl mb-1">Certificate Generator</h1>
          <p className="text-muted-foreground text-sm">
            Customize via URL params: <code className="text-primary text-xs bg-card px-1.5 py-0.5 rounded">?name=John+Doe&role=Marketing+Intern&start=Jan+2025&end=Mar+2025&id=DMCOI-001</code>
          </p>
        </div>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(0,102,255,0.3)]"
        >
          <Printer className="w-4 h-4" /> Print / Save PDF
        </button>
      </div>

      {/* Certificate */}
      <div
        id="certificate"
        className="certificate-print relative max-w-4xl mx-auto"
        style={{
          background: 'linear-gradient(135deg, #050505 0%, #0a0a14 40%, #050510 100%)',
          border: '1px solid rgba(0,102,255,0.3)',
          borderRadius: '16px',
          overflow: 'hidden',
          minHeight: '600px',
          padding: '0',
        }}
      >
        {/* Outer gold border frame */}
        <div
          style={{
            position: 'absolute',
            inset: '12px',
            border: '1px solid rgba(212,175,55,0.4)',
            borderRadius: '8px',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: '16px',
            border: '1px solid rgba(212,175,55,0.15)',
            borderRadius: '6px',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Corner ornaments */}
        {['top-5 left-5', 'top-5 right-5', 'bottom-5 left-5', 'bottom-5 right-5'].map((pos, i) => (
          <div
            key={i}
            className={`absolute ${pos} w-8 h-8 z-10`}
            style={{
              borderTop: i < 2 ? '2px solid rgba(212,175,55,0.6)' : 'none',
              borderBottom: i >= 2 ? '2px solid rgba(212,175,55,0.6)' : 'none',
              borderLeft: i % 2 === 0 ? '2px solid rgba(212,175,55,0.6)' : 'none',
              borderRight: i % 2 === 1 ? '2px solid rgba(212,175,55,0.6)' : 'none',
            }}
          />
        ))}

        {/* Watermark Horse */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 0 }}>
          <BulgarianHorse
            variant="hero"
            className="w-[55%] max-w-[380px] opacity-[0.04] grayscale"
          />
        </div>

        {/* Blue glow top */}
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '400px',
            height: '200px',
            background: 'radial-gradient(ellipse, rgba(0,102,255,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-10 py-10 md:px-20 md:py-14">

          {/* Logo + Header row */}
          <div className="flex items-center gap-3 mb-1">
            <span className="font-display text-3xl tracking-widest text-white">
              DMCO<span style={{ color: '#0066FF' }}>I</span>
            </span>
          </div>
          <p
            className="text-xs tracking-[0.4em] mb-8"
            style={{ color: 'rgba(212,175,55,0.7)' }}
          >
            DIGITAL MARKETING COMPANY OF INDIA
          </p>

          {/* Divider line */}
          <div
            className="w-full max-w-sm mb-8"
            style={{
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.5), transparent)',
            }}
          />

          {/* Certificate heading */}
          <p className="text-xs tracking-[0.35em] text-muted-foreground mb-3">THIS IS TO CERTIFY THAT</p>
          <h2
            className="font-display mb-4 leading-none"
            style={{
              fontSize: 'clamp(2.2rem, 6vw, 4rem)',
              background: 'linear-gradient(135deg, #ffffff 30%, rgba(212,175,55,0.9) 70%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {name}
          </h2>

          <p className="text-muted-foreground text-sm mb-2 tracking-wider">has successfully completed an internship as</p>

          <div
            className="font-display text-2xl md:text-3xl mb-2 tracking-wide"
            style={{ color: '#0066FF' }}
          >
            {role}
          </div>

          <p className="text-muted-foreground text-sm mb-8 tracking-wider">
            at DMCOI from <span className="text-white font-semibold">{start}</span> to <span className="text-white font-semibold">{end}</span>
          </p>

          {/* Second divider */}
          <div
            className="w-full max-w-sm mb-8"
            style={{
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.5), transparent)',
            }}
          />

          {/* Achievement text */}
          <p
            className="text-sm max-w-lg leading-relaxed mb-10"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            During this internship, the individual demonstrated exceptional dedication, professionalism, and skill in digital marketing, content creation, and growth strategy — contributing meaningfully to our client campaigns and internal initiatives.
          </p>

          {/* Signatures */}
          <div className="grid grid-cols-2 gap-12 w-full max-w-md mb-10">
            {[
              { name: 'Sachin Chaudhari', title: 'Founder & CEO' },
              { name: 'Suryaansh Pandey', title: 'Co-Founder' },
            ].map((sig, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div
                  style={{
                    width: '100%',
                    height: '1px',
                    background: 'rgba(212,175,55,0.4)',
                    marginBottom: '6px',
                  }}
                />
                <p className="font-bold text-sm text-white">{sig.name}</p>
                <p className="text-xs tracking-widest" style={{ color: 'rgba(212,175,55,0.7)' }}>{sig.title.toUpperCase()}</p>
              </div>
            ))}
          </div>

          {/* Certificate ID + Date */}
          <div className="flex items-center gap-8 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            <span>Certificate No: <span className="text-white/60 font-mono">{certId}</span></span>
            <span style={{ color: 'rgba(212,175,55,0.3)' }}>·</span>
            <span>Issued: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
            <span style={{ color: 'rgba(212,175,55,0.3)' }}>·</span>
            <span>dmcoi.com</span>
          </div>

          {/* DMCOI seal */}
          <div
            className="absolute bottom-8 right-8 w-16 h-16 rounded-full flex items-center justify-center"
            style={{
              border: '2px solid rgba(0,102,255,0.4)',
              background: 'radial-gradient(circle, rgba(0,102,255,0.1) 0%, transparent 70%)',
            }}
          >
            <span className="font-display text-xs text-primary/70 tracking-widest">DMCOI</span>
          </div>
        </div>
      </div>

      {/* Print styles injected via style tag */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: #050505 !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          header, footer, .fixed { display: none !important; }
          #certificate { border-radius: 0 !important; max-width: 100% !important; page-break-inside: avoid; }
        }
      `}</style>
    </div>
  );
}
