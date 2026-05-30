import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';

export default function Work() {
  const studies = [
    {
      id: 1,
      client: 'Sydney HVAC Experts',
      industry: 'Home Services',
      challenge: 'Relying heavily on word of mouth, unpredictable lead flow, spending $2k/mo on bad Google Ads.',
      strategy: 'Built a high-intent Meta Ads funnel offering specific diagnostic packages. Implemented a lead-nurture CRM to instantly SMS new inquiries.',
      result: '245% ROAS',
      metric: 'Increase in booked jobs',
      color: 'bg-blue-900'
    },
    {
      id: 2,
      client: 'Elite Performance Coaching',
      industry: 'B2B Coaching',
      challenge: 'Stagnant audience growth. Content was educational but boring. Very low engagement rates.',
      strategy: 'Engineered a aggressive short-form video strategy. Focused on polarizing industry truths and high-energy editing.',
      result: '12k',
      metric: 'New followers in 30 days',
      color: 'bg-indigo-900'
    },
    {
      id: 3,
      client: 'Apex Medical Aesthetics',
      industry: 'Healthcare',
      challenge: 'High competition in local area. Needed to fill appointment books for high-ticket procedures.',
      strategy: 'Localized SEO domination campaign + Meta Ads offering a lead-magnet consultation package.',
      result: '3x',
      metric: 'Increase in consultation bookings',
      color: 'bg-slate-900'
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-24">
          <h1 className="font-display text-7xl md:text-9xl mb-6">THE SCOREBOARD</h1>
          <p className="text-xl text-muted-foreground">We don't talk about impressions or likes unless they lead to cash. Here are the numbers that matter.</p>
        </div>

        <div className="flex flex-col gap-16">
          {studies.map((study) => (
            <div key={study.id} className="grid lg:grid-cols-2 gap-8 bg-card border border-border rounded-2xl overflow-hidden group">
              <div className={`${study.color} p-12 flex flex-col justify-center relative overflow-hidden min-h-[300px]`}>
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10">
                  <div className="font-display text-8xl md:text-[120px] text-white leading-none mb-4">{study.result}</div>
                  <div className="text-2xl font-bold text-white/90 uppercase tracking-wide">{study.metric}</div>
                </div>
              </div>
              
              <div className="p-10 flex flex-col justify-center">
                <div className="text-sm font-bold tracking-widest text-primary mb-2 uppercase">{study.industry}</div>
                <h2 className="font-display text-4xl mb-8">{study.client}</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">The Challenge</h3>
                    <p className="text-lg">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">The Strategy</h3>
                    <p className="text-lg">{study.strategy}</p>
                  </div>
                </div>

                <div className="mt-10">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors">
                    Get Similar Results <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center bg-primary/10 border border-primary/20 rounded-2xl p-16">
          <h2 className="font-display text-5xl md:text-6xl mb-6">WANT TO BE THE NEXT CASE STUDY?</h2>
          <p className="text-xl text-muted-foreground mb-8">Stop watching your competitors win.</p>
          <Link href="/pricing" className="bg-primary text-primary-foreground font-bold px-8 py-4 rounded text-lg inline-flex items-center gap-2 hover:bg-primary/90 transition-colors">
            Start Your $49 Trial
          </Link>
        </div>
      </div>
    </div>
  );
}