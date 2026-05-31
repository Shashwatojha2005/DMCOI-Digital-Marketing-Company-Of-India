import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'wouter';

import img_instagram_views from '@assets/Copy_of_Screenshot_20260314_142228_Instagram_1780200203805.jpg';
import img_yt_video from '@assets/dmcoi-australia-best-affordable-social-media-marketing-agency_1780200203806.png';
import img_yt_channel from '@assets/dmcoi-brisbane-logan-best-affordable-social-media-marketing-ag_1780200203807.png';
import img_ikaanya_australia from '@assets/dmcoi-meta-ads-client-result-australia_1780200214067.jpg';
import img_ikaanya_usa from '@assets/dmcoi-meta-ads-client-results-usa_1780200214068.jpg';
import img_playbox from '@assets/dmcoi-meta-ads-result-brand-1_1780200214068.webp';
import img_hindostan from '@assets/dmcoi-meta-ads-result-brand-11_1780200214068.jpg';
import img_pathpavers from '@assets/dmcoi-Path-Pavers_meta-portfolio_1780200214068.jpg';
import img_ikaanya_1 from '@assets/Ikaanya_meta-portfolio-1120x543_(1)_1780200214069.png';
import img_ikaanya_2 from '@assets/Ikaanya_meta-portfolio-1120x543_(2)_1780200214069.png';
import img_ikaanya_3 from '@assets/dmcoi-Ikaanya_meta-portfolio_1780200214069.jpg';
import img_ikaanya_4 from '@assets/dmcoi-Ikaanya_meta-portfolio_1780200214070.webp';
import img_ikaanya_canada from '@assets/dmcoi-meta-ads-client-resula-canada_1780200214070.jpg';
import img_ikaanya_result from '@assets/dmcoi-meta-ads-client-result_1780200214070.jpg';

const DRIVE_LINK = 'https://drive.google.com/drive/folders/1LKrpxDJj5Lv6p_2yXOxaIRnaQ0vwHVWC?usp=drive_link';
const CALENDAR_LINK = 'https://calendar.app.google/N9bU7euuWj3RUn5y9';

interface ClientResult {
  client: string;
  category: string;
  stats: { label: string; value: string }[];
  images: string[];
  period?: string;
}

const clients: ClientResult[] = [
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
    images: [img_yt_channel, img_yt_video],
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
    images: [img_instagram_views],
  },
];

function ImageLightbox({ images, startIndex, onClose }: { images: string[]; startIndex: number; onClose: () => void }) {
  const [current, setCurrent] = useState(startIndex);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
        onClick={onClose}
      >
        <X className="w-8 h-8" />
      </button>
      <div
        className="relative max-w-5xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[current]}
          alt=""
          className="w-full max-h-[80vh] object-contain rounded-lg"
        />
        {images.length > 1 && (
          <>
            <button
              className="absolute left-[-48px] top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
              onClick={prev}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              className="absolute right-[-48px] top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
              onClick={next}
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            <div className="text-center mt-4 text-white/50 text-sm">
              {current + 1} / {images.length}
            </div>
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

  return (
    <>
      {lightboxOpen && (
        <ImageLightbox
          images={client.images}
          startIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="p-8 border-b border-border flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-bold tracking-widest text-primary uppercase mb-2">{client.category}</div>
            <h2 className="font-display text-3xl md:text-4xl">{client.client}</h2>
            {client.period && <div className="text-sm text-muted-foreground mt-1">{client.period}</div>}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-border">
          {client.stats.map((stat, i) => (
            <div
              key={i}
              className={`p-6 ${i < client.stats.length - 1 ? 'border-r border-border' : ''}`}
            >
              <div className="font-display text-3xl md:text-4xl text-primary leading-none mb-1">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <button
              onClick={() => openLightbox(0)}
              className="relative overflow-hidden rounded-xl group cursor-zoom-in"
            >
              <img
                src={primary}
                alt={`${client.client} result`}
                className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-bold text-sm bg-black/60 px-3 py-1.5 rounded-full">
                  View Full
                </span>
              </div>
            </button>

            {extras.length > 0 && (
              <div className={`grid gap-3 ${extras.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                {extras.slice(0, 3).map((img, i) => (
                  <button
                    key={i}
                    onClick={() => openLightbox(i + 1)}
                    className="relative overflow-hidden rounded-xl group cursor-zoom-in"
                  >
                    <img
                      src={img}
                      alt={`${client.client} result ${i + 2}`}
                      className={`w-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ${extras.length === 1 ? 'h-64' : 'h-[120px]'}`}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      {i === 2 && extras.length > 3 && (
                        <span className="font-bold text-white text-lg bg-black/70 px-3 py-1.5 rounded-full">
                          +{extras.length - 3} more
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
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

        <div className="flex flex-col gap-10">
          {clients.map((client, i) => (
            <ClientCard key={i} client={client} />
          ))}
        </div>

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
