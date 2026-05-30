import React from 'react';
import { BulgarianHorse } from '@/components/BulgarianHorse';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h1 className="font-display text-7xl md:text-9xl mb-8 leading-none">MEET THE<br/>BULGARIAN<br/><span className="text-primary">HORSE.</span></h1>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                The agency world is broken. It's full of templates, empty promises, and "account managers" who have never run a profitable campaign in their lives.
              </p>
              <p>
                We built DMCOI to be the antidote.
              </p>
              <p>
                The Bulgarian Horse isn't just a logo. It's a mindset. It represents aggressive execution, relentless optimization, and a refusal to settle for "industry standard." We run harder so you can scale faster.
              </p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-12 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
            <BulgarianHorse variant="hero" className="w-full max-w-[400px] relative z-10" />
          </div>
        </div>

        <div className="bg-primary text-primary-foreground rounded-2xl p-12 md:p-24 text-center mb-32 relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="font-display text-5xl md:text-7xl mb-8">OUR MANIFESTO</h2>
            <div className="font-display text-3xl md:text-4xl leading-tight space-y-6 opacity-90">
              <p>1. Attention is war. We play to win.</p>
              <p>2. Proof beats promises. Data beats opinions.</p>
              <p>3. Safe is risky. Bold is mandatory.</p>
              <p>4. We do not do "marketing." We do damage.</p>
            </div>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-5xl mb-6">THE SQUAD</h2>
          <p className="text-xl text-muted-foreground mb-8">A lean team of killers. No fluff. No bloat.</p>
          <Link href="/team" className="inline-flex items-center gap-2 bg-card border border-border hover:border-primary px-8 py-4 rounded font-bold transition-colors">
            Meet The Team <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}