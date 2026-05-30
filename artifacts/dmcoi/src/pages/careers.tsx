import React from 'react';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import { Link } from 'wouter';

export default function Careers() {
  const jobs = [
    {
      id: 1,
      title: 'Senior Media Buyer (Meta/Google)',
      location: 'Remote (US/CA/AU)',
      type: 'Full-time',
      desc: 'We need a killer who eats ROAS for breakfast. You must have managed $50k+/mo profitably for service businesses. No hand-holding.',
    },
    {
      id: 2,
      title: 'Direct Response Copywriter',
      location: 'Remote',
      type: 'Full-time or Contract',
      desc: 'Your words need to make people pull out their credit cards. If you write boring corporate jargon, do not apply. We want punchy, aggressive copy.',
    },
    {
      id: 3,
      title: 'Video Editor / Creator',
      location: 'Sydney, AU or Remote',
      type: 'Full-time',
      desc: 'You understand retention graphs, hook engineering, and pacing. You make short-form content that holds attention like a vice grip.',
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-20">
          <h1 className="font-display text-7xl md:text-9xl mb-6">CAREERS</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">We work hard. We move fast. We do not tolerate mediocrity. If you want a comfortable corporate job, close this tab.</p>
        </div>

        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors group">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                <div>
                  <h2 className="font-display text-4xl mb-4 group-hover:text-primary transition-colors">{job.title}</h2>
                  <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {job.location}</span>
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {job.type}</span>
                  </div>
                </div>
                <Link href="/contact" className="shrink-0 bg-background border-2 border-primary text-foreground font-bold px-6 py-2 rounded hover:bg-primary hover:text-primary-foreground transition-colors text-center">
                  Apply Now
                </Link>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {job.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-10 bg-primary/10 border border-primary/20 rounded-xl text-center">
          <h3 className="font-display text-4xl mb-4">DON'T SEE YOUR ROLE?</h3>
          <p className="text-lg text-muted-foreground mb-6">We hire talent, not just open positions. If you are exceptional, convince us.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary/80 transition-colors">
            Pitch Yourself <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}