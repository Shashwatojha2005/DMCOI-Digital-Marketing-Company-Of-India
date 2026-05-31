import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'wouter';

import img_yt_channel from '@assets/dmcoi-brisbane-logan-best-affordable-social-media-marketing-ag_1780200203807.png';
import img_yt_video from '@assets/dmcoi-australia-best-affordable-social-media-marketing-agency_1780200203806.png';
import img_instagram_views from '@assets/Copy_of_Screenshot_20260314_142228_Instagram_1780200203805.jpg';
import img_ikaanya_1 from '@assets/Ikaanya_meta-portfolio-1120x543_(1)_1780200214069.png';
import img_ikaanya_2 from '@assets/Ikaanya_meta-portfolio-1120x543_(2)_1780200214069.png';
import img_ikaanya_3 from '@assets/dmcoi-Ikaanya_meta-portfolio_1780200214069.jpg';
import img_ikaanya_4 from '@assets/dmcoi-Ikaanya_meta-portfolio_1780200214070.webp';
import img_ikaanya_australia from '@assets/dmcoi-meta-ads-client-result-australia_1780200214067.jpg';
import img_ikaanya_usa from '@assets/dmcoi-meta-ads-client-results-usa_1780200214068.jpg';
import img_ikaanya_canada from '@assets/dmcoi-meta-ads-client-resula-canada_1780200214070.jpg';
import img_ikaanya_result from '@assets/dmcoi-meta-ads-client-result_1780200214070.jpg';
import img_hindostan from '@assets/dmcoi-meta-ads-result-brand-11_1780200214068.jpg';
import img_pathpavers from '@assets/dmcoi-Path-Pavers_meta-portfolio_1780200214068.jpg';
import img_playbox from '@assets/dmcoi-meta-ads-result-brand-1_1780200214068.webp';

const DRIVE_LINK = 'https://drive.google.com/drive/folders/1LKrpxDJj5Lv6p_2yXOxaIRnaQ0vwHVWC?usp=drive_link';
const CONTENT_DRIVE_LINK = 'https://drive.google.com/drive/folders/18rKADsfp5RWQM9RBuapQuaMKbK_kqEjz?usp=drive_link';
const CALENDAR_LINK = 'https://calendar.app.google/N9bU7euuWj3RUn5y9';

const driveEmbed = (id: string) => `https://drive.google.com/file/d/${id}/preview?rm=minimal`;
const driveImg = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1200`;

const INSTA_GROWTH_VIDEOS = [
  driveEmbed('1-cUm3DNyp-TdpfTnWNuq79cnSCkkfJ2G'),
  driveEmbed('17V3x8kcQ4aacdfoi7pFSQd4KkR8HiWkH'),
  driveEmbed('1JHAR-wzpDtI1c6iDzj3Iok_fg-J5LlrT'),
];

const CONTENT_VIDEOS = [
  driveEmbed('1m39uyjVJhNrPpJfO87z9PA3TAkCERP7n'),
  driveEmbed('1QFAgg6XDb-h46Prf82R25TSlXeJxR1LM'),
  driveEmbed('1I0aCrHV6n_K84dV8E6f5ZQ3yiwfQqQTW'),
  driveEmbed('1el4xCETMPYymT4A15Tc3FfXtGt_TGkTM'),
  driveEmbed('11zaePrKqhP9vfM8q7lQ21DRZidCDjBmz'),
];

interface ClientResult {
  client: string;
  category: string;
  stats: { label: string; value: string }[];
  images: string[];
  period?: string;
  portraitImages?: boolean;
}

const clients: ClientResult[] = [
  {
    client: 'Jexx — YouTube Growth',
    category: 'Content & Growth',
    period: 'May 2026 (28 days)',
    stats: [
      { label: 'Views (28 days)', value: '17.4K' },
      { label: 'Watch Time', value: '779.5 hrs' },
      { label: 'New Subscribers', value: '+469' },
      { label: 'Growth vs Prior', value: '+999%' },
    ],
    images: [img_yt_channel, img_yt_video, driveImg('11qp9GapNvpEUpvPocO6R0yziw4jyv8ox')],
  },
  {
    client: 'Instagram Reels Client',
    category: 'Content & Growth',
    period: 'Feb – Mar 2026',
    stats: [
      { label: 'Total Views', value: '124,879' },
      { label: 'Accounts Reached', value: '75,795' },
      { label: 'Reach Growth', value: '+26,036%' },
      { label: 'Non-follower Reach', value: '99.5%' },
    ],
    images: [
      img_instagram_views,
      driveImg('1LIK0auD1Tiy9emRlwXe3_ZoS5R6ThRWN'),
      driveImg('1K8xMja1Knq-PulovbFhKC8zH8k9x_n6w'),
      driveImg('1a2slfNa008JvCRP7v6xVFnUXhTUaVUMM'),
    ],
    portraitImages: true,
  },
  {
    client: 'Ikaanya Web',
    category: 'Meta Ads',
    period: 'Dec 2024 – Feb 2025',
    stats: [
      { label: 'Avg ROAS', value: '2.59x' },
      { label: 'Total Purchases', value: '280' },
      { label: 'Revenue Generated', value: '₹7.22L' },
      { label: 'Ad Spend', value: '₹2.78L' },
    ],
    images: [img_ikaanya_1, img_ikaanya_2, img_ikaanya_3, img_ikaanya_4, img_ikaanya_australia, img_ikaanya_usa, img_ikaanya_canada, img_ikaanya_result],
  },
  {
    client: 'Hindostan Archive',
    category: 'Meta Ads',
    period: 'Jan – Mar 2025',
    stats: [
      { label: 'Avg ROAS', value: '5.15x' },
      { label: 'Total Purchases', value: '56' },
      { label: 'Revenue Generated', value: '₹4.94L' },
      { label: 'Ad Spend', value: '₹95.9K' },
    ],
    images: [img_hindostan],
  },
  {
    client: 'Path Pavers',
    category: 'Meta Ads',
    period: 'Oct 2024 – Feb 2025',
    stats: [
      { label: 'Avg ROAS', value: '8.30x' },
      { label: 'Total Purchases', value: '116' },
      { label: 'Revenue Generated', value: '₹7.63L' },
      { label: 'Ad Spend', value: '₹91.9K' },
    ],
    images: [img_pathpavers],
  },
  {
    client: 'Playbox India',
    category: 'SEO / Search',
    period: 'Feb – Nov 2024',
    stats: [
      { label: 'Total Impressions', value: '370K' },
      { label: 'Total Clicks', value: '3.59K' },
      { label: 'Avg CTR', value: '1%' },
      { label: 'Avg Position', value: '14.1' },
    ],
    images: [img_playbox],
  },
];

function ImageLightbox({ images, startIndex, onClose }: { images: string[]; startIndex: number; onClose: () => void }) {
  const [current, setCurrent] = useState(startIndex);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={onClose}>
      <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors" onClick={onClose}>
        <X className="w-8 h-8" />
      </button>
      <div className="relative max-w-5xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <img src={images[current]} alt="" className="w-full max-h-[80vh] object-contain rounded-lg" />
        {images.length > 1 && (
          <>
            <button className="absolute left-[-48px] top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors" onClick={prev}>
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button className="absolute right-[-48px] top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors" onClick={next}>
              <ChevronRight className="w-10 h-10" />
            </button>
            <div className="text-center mt-4 text-white/50 text-sm">{current + 1} / {images.length}</div>
          </>
        )}
      </div>
    </div>
  );
}

function ClientCard({ client }: { client: ClientResult }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  };

  const primary = client.images[0];
  const extras = client.images.slice(1);
  const isPortrait = client.portraitImages;

  return (
    <>
      {lightboxOpen && (
        <ImageLightbox images={client.images} startIndex={lightboxIndex} onClose={() => setLightboxOpen(false)} />
      )}
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="p-8 border-b border-border">
          <div className="text-xs font-bold tracking-widest text-primary uppercase mb-2">{client.category}</div>
          <h2 className="font-display text-3xl md:text-4xl">{client.client}</h2>
          {client.period && <div className="text-sm text-muted-foreground mt-1">{client.period}</div>}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-border">
          {client.stats.map((stat, i) => (
            <div key={i} className={`p-6 ${i < client.stats.length - 1 ? 'border-r border-border' : ''}`}>
              <div className="font-display text-3xl md:text-4xl text-primary leading-none mb-1">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="p-6">
          {isPortrait ? (
            /* Portrait gallery: horizontal scroll of tall cards */
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {client.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => openLightbox(i)}
                  className="relative overflow-hidden rounded-xl group cursor-zoom-in bg-zinc-900"
                >
                  <img
                    src={img}
                    alt={`${client.client} result ${i + 1}`}
                    className="w-full h-64 object-contain object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-bold text-xs bg-black/60 px-2 py-1 rounded-full">View</span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            /* Landscape gallery */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <button onClick={() => openLightbox(0)} className="relative overflow-hidden rounded-xl group cursor-zoom-in bg-zinc-900">
                <img
                  src={primary}
                  alt={`${client.client} result`}
                  className="w-full h-64 object-contain object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-bold text-sm bg-black/60 px-3 py-1.5 rounded-full">View Full</span>
                </div>
              </button>

              {extras.length > 0 && (
                <div className={`grid gap-3 ${extras.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                  {extras.slice(0, 3).map((img, i) => (
                    <button key={i} onClick={() => openLightbox(i + 1)} className="relative overflow-hidden rounded-xl group cursor-zoom-in bg-zinc-900">
                      <img
                        src={img}
                        alt={`${client.client} result ${i + 2}`}
                        className={`w-full object-contain object-top group-hover:scale-105 transition-transform duration-500 ${extras.length === 1 ? 'h-64' : 'h-[120px]'}`}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        {i === 2 && extras.length > 3 && (
                          <span className="font-bold text-white text-lg bg-black/70 px-3 py-1.5 rounded-full">+{extras.length - 3} more</span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

/* Centered portrait embed — overflows its container to hide Drive player chrome */
function DriveVideoEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative bg-black rounded-xl overflow-hidden border border-border" style={{ aspectRatio: '9 / 16' }}>
      <iframe
        src={src}
        title={title}
        allow="autoplay"
        allowFullScreen
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '120%',
          height: '120%',
          transform: 'translate(-50%, -50%)',
          border: 'none',
        }}
      />
    </div>
  );
}

export default function Work() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-4">

        <div className="max-w-3xl mb-20">
          <div className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Real Clients. Real Numbers.</div>
          <h1 className="font-display text-7xl md:text-9xl mb-6">THE SCOREBOARD</h1>
          <p className="text-xl text-muted-foreground">
            No stock photos. No made-up case studies. These are actual dashboards from actual client accounts — Meta Ads Manager, YouTube Studio, Google Search Console.
          </p>
        </div>

        {/* 1. Jexx YouTube Growth */}
        <ClientCard client={clients[0]} />

        {/* 2. Instagram Growth — Video Proof (right after Jexx) */}
        <div className="mt-10">
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="p-8 border-b border-border">
              <div className="text-xs font-bold tracking-widest text-primary uppercase mb-2">Screen Recordings — Last 28 Days</div>
              <h2 className="font-display text-3xl md:text-4xl">Instagram Growth Proof</h2>
              <p className="text-muted-foreground mt-1">Real-time screen recordings showing follower growth, reach, and engagement analytics.</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 justify-items-center">
                {INSTA_GROWTH_VIDEOS.map((src, i) => (
                  <div key={i} className="w-full max-w-xs">
                    <DriveVideoEmbed src={src} title={`Instagram Growth Proof ${i + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Instagram Reels Client data card */}
        <div className="mt-10">
          <ClientCard client={clients[1]} />
        </div>

        {/* 4. Scroll-Stopping Content (right after Instagram section) */}
        <div className="mt-10">
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="p-8 border-b border-border">
              <div className="text-xs font-bold tracking-widest text-primary uppercase mb-2">Video Editing & Content Creation</div>
              <h2 className="font-display text-3xl md:text-4xl">Scroll-Stopping Content</h2>
              <p className="text-muted-foreground mt-1">Videos we create for clients — built for maximum retention, shares, and conversions.</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center">
                {CONTENT_VIDEOS.map((src, i) => (
                  <div key={i} className="w-full">
                    <DriveVideoEmbed src={src} title={`Content Creation Sample ${i + 1}`} />
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a
                  href={CONTENT_DRIVE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-primary/40 text-primary font-bold px-7 py-3.5 rounded-lg hover:bg-primary/10 transition-colors text-sm uppercase tracking-wider"
                >
                  See More Videos <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 5–8. Remaining Meta Ads + SEO clients */}
        <div className="flex flex-col gap-10 mt-10">
          {clients.slice(2).map((client, i) => (
            <ClientCard key={i} client={client} />
          ))}
        </div>

        {/* Full Proof Folder */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4 items-center justify-center bg-card border border-border rounded-2xl p-10 text-center">
          <div>
            <p className="text-muted-foreground mb-1">Want to see every screenshot, every campaign, every result?</p>
            <p className="font-bold text-lg">We've got nothing to hide.</p>
          </div>
          <a
            href={DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-black font-bold px-7 py-4 rounded-lg hover:bg-white/90 transition-colors text-sm uppercase tracking-wider"
          >
            See Full Proof Folder <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center bg-primary/10 border border-primary/20 rounded-2xl p-16">
          <h2 className="font-display text-5xl md:text-6xl mb-4">WANT YOUR LOGO ON THIS PAGE?</h2>
          <p className="text-xl text-muted-foreground mb-8">Stop watching your competitors win. Book a call and let's build your scoreboard.</p>
          <a
            href={CALENDAR_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground font-bold px-8 py-4 rounded text-lg inline-flex items-center gap-2 hover:bg-primary/90 transition-colors"
          >
            Book a Free Strategy Call <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </div>
  );
}
