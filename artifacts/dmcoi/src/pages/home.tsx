import React, { useRef } from 'react';
import { Link } from 'wouter';
import { Check, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { BulgarianHorse } from '@/components/BulgarianHorse';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);

  useGSAP(() => {
    // Hero Entrance
    gsap.from('.hero-text > *', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.2
    });

    gsap.from('.hero-horse', {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.4
    });

    // Scroll Reveals
    const sections = gsap.utils.toArray('.reveal-section');
    sections.forEach((section: any) => {
      gsap.from(section, {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // KPI Counters
    const counters = gsap.utils.toArray('.kpi-counter');
    counters.forEach((counter: any) => {
      const target = { val: 0 };
      const endVal = parseInt(counter.getAttribute('data-target') || '0', 10);
      
      gsap.to(target, {
        val: endVal,
        duration: 2,
        scrollTrigger: {
          trigger: counter,
          start: 'top 85%'
        },
        onUpdate: () => {
          counter.innerText = Math.floor(target.val) + (counter.getAttribute('data-suffix') || '');
        }
      });
    });
  }, { scope: container });

  return (
    <div ref={container} className="flex flex-col w-full overflow-hidden bg-background">
      {/* SECTION 1: Hero */}
      <section className="min-h-[90vh] flex items-center pt-20 pb-12 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center z-10">
          <div className="hero-text flex flex-col items-start max-w-2xl">
            <span className="inline-block py-1 px-3 rounded border border-border bg-card text-xs font-bold tracking-widest text-primary mb-6">
              THE BULGARIAN HORSE AGENCY
            </span>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-display leading-[0.85] tracking-tight mb-6">
              RUN HARDER.<br />
              <span className="text-primary">SCALE FASTER.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              DMCOI helps businesses generate more leads, dominate attention and grow faster through Meta Ads, Content Creation and Growth Systems.
            </p>
            <div className="flex flex-wrap gap-4 mb-10 w-full md:w-auto">
              <Link href="/pricing" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-md font-bold flex items-center justify-center gap-2 text-lg hover:scale-105 transition-transform duration-200">
                Start $49 Trial <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="border border-border hover:border-primary/50 bg-card hover:bg-accent/10 px-8 py-4 rounded-md font-bold flex items-center justify-center text-lg transition-colors duration-200">
                Book Strategy Call
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-medium">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> 5 Qualified Leads Guarantee</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Month 2 Free</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> No Contracts</span>
            </div>
          </div>
          
          <div className="hero-horse relative w-full aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <BulgarianHorse variant="hero" className="w-[120%] h-[120%] max-w-[600px] relative z-10 drop-shadow-[0_0_50px_rgba(0,102,255,0.3)]" />
          </div>
        </div>
      </section>

      {/* SECTION 2: 7-Day Trial */}
      <section className="py-24 bg-card border-y border-border reveal-section relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-background border border-primary/20 rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:border-primary/50 transition-colors duration-500 shadow-[0_0_50px_rgba(0,102,255,0.05)]">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-colors duration-500" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-display text-5xl md:text-6xl mb-4">START WITH A<br/>7-DAY TRIAL.</h2>
                <div className="text-primary font-display text-7xl md:text-8xl mb-6">$49</div>
                <Link href="/pricing" className="bg-primary text-primary-foreground w-full py-4 rounded-md font-bold text-center inline-block text-lg hover:bg-primary/90 transition-colors">
                  Start Trial
                </Link>
              </div>
              
              <div className="space-y-4 bg-card/50 p-6 rounded-xl border border-border">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/20 p-1 rounded-full"><Check className="w-4 h-4 text-primary" /></div>
                  <div>
                    <strong className="block text-lg">Meta Ads Setup</strong>
                    <span className="text-muted-foreground text-sm">Full campaign architecture</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/20 p-1 rounded-full"><Check className="w-4 h-4 text-primary" /></div>
                  <div>
                    <strong className="block text-lg">1 Premium Video Edit</strong>
                    <span className="text-muted-foreground text-sm">High-retention social asset</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/20 p-1 rounded-full"><Check className="w-4 h-4 text-primary" /></div>
                  <div>
                    <strong className="block text-lg">Social Media Audit</strong>
                    <span className="text-muted-foreground text-sm">Actionable tear-down</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/20 p-1 rounded-full"><Check className="w-4 h-4 text-primary" /></div>
                  <div>
                    <strong className="block text-lg">Free Strategy Call</strong>
                    <span className="text-muted-foreground text-sm">Growth roadmap building</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The Horse Has Spoken */}
      <section className="py-32 relative bg-[#020202] flex items-center justify-center overflow-hidden border-y border-border/50 reveal-section">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
        <BulgarianHorse variant="quote" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-0 opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl mb-12 text-primary opacity-50 tracking-tighter">ATTENTION IS WAR.</h2>
          <blockquote className="font-display text-4xl md:text-6xl lg:text-7xl leading-none mb-12 tracking-tight">
            "We don't do marketing.<br/>
            We do damage."
          </blockquote>
          <p className="text-primary font-bold tracking-widest text-lg">— THE BULGARIAN HORSE</p>
        </div>
      </section>

      {/* SECTION 4: KPI Cards */}
      <section className="py-24 reveal-section container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl">PROOF BEATS PROMISES.</h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { target: '5', suffix: '+', label: 'Qualified Leads' },
            { target: '2', suffix: '', label: 'Month Free Guarantee', prefix: 'Month ' },
            { target: '100', suffix: '%', label: 'Strategy Focused' },
            { target: '49', suffix: '', label: 'Trial Offer', prefix: '$' },
          ].map((kpi, i) => (
            <div key={i} className="bg-card border-t-2 border-t-primary border-x border-b border-border p-8 rounded-b-xl flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <div className="font-display text-6xl md:text-7xl text-primary mb-2 flex items-center">
                {kpi.prefix}<span className="kpi-counter" data-target={kpi.target} data-suffix={kpi.suffix}>0{kpi.suffix}</span>
              </div>
              <p className="text-muted-foreground font-bold uppercase tracking-wider text-sm">{kpi.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: Services */}
      <section className="py-24 bg-card border-y border-border reveal-section">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-display text-5xl md:text-7xl">WHAT WE DO.</h2>
            <Link href="/services" className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 font-bold">
              View All <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Meta Ads', desc: 'Paid ads that print leads. No fluff.' },
              { title: 'Content Creation', desc: 'Scroll-stopping content that converts.' },
              { title: 'SEO', desc: 'Own page one. Own the market.' },
              { title: 'Growth Systems', desc: 'Automated machines that scale you.' }
            ].map((service, i) => (
              <Link key={i} href="/services" className="group block bg-background border border-border p-8 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,102,255,0.1)] hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                  <BulgarianHorse variant="service" className="w-16 h-16" />
                </div>
                <h3 className="font-display text-4xl mb-4 relative z-10">{service.title}</h3>
                <p className="text-muted-foreground text-lg relative z-10">{service.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Featured Work */}
      <section className="py-24 reveal-section container mx-auto px-4">
        <h2 className="font-display text-5xl md:text-7xl mb-16 text-center">THE SCOREBOARD.</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            { client: 'Sydney HVAC', result: '245%', metric: 'ROAS Increase', tag: 'Meta Ads' },
            { client: 'Elite Coaching', result: '12k', metric: 'New Followers in 30 days', tag: 'Content' },
            { client: 'Local Med Clinic', result: '3x', metric: 'Bookings Volume', tag: 'Funnels' }
          ].map((study, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-8 flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-colors" />
              <span className="text-xs font-bold tracking-widest text-primary mb-8">{study.tag}</span>
              <div className="font-display text-6xl mb-2 group-hover:text-primary transition-colors">{study.result}</div>
              <p className="text-xl font-bold mb-8">{study.metric}</p>
              <div className="mt-auto pt-8 border-t border-border flex items-center justify-between">
                <span className="text-muted-foreground font-medium">{study.client}</span>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/work" className="inline-flex border-b-2 border-primary pb-1 font-bold text-lg hover:text-primary transition-colors">
            See More Case Studies
          </Link>
        </div>
      </section>

      {/* SECTION 7: Pricing */}
      <section className="py-24 bg-card border-y border-border reveal-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-7xl mb-4">PICK YOUR LEVEL.</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">No contracts. No nonsense. Just results.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {/* Plan 1 */}
            <div className="bg-background border border-border rounded-xl p-8 shadow-lg">
              <h3 className="font-display text-3xl mb-2">Almost Zero</h3>
              <div className="text-4xl font-display mb-6">$297<span className="text-lg text-muted-foreground">/mo</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> 1 Ad Campaign Mgt</li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> Basic reporting</li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> Email support</li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> 1 revision/month</li>
              </ul>
              <Link href="/contact" className="block w-full text-center py-3 rounded-md border border-border hover:bg-accent transition-colors font-bold">
                Select Plan
              </Link>
            </div>

            {/* Plan 2 - Popular */}
            <div className="bg-background border-2 border-primary rounded-xl p-8 shadow-[0_0_40px_rgba(0,102,255,0.15)] relative transform scale-105 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold tracking-wider">
                MOST POPULAR
              </div>
              <h3 className="font-display text-3xl mb-2">Full Throttle</h3>
              <div className="text-5xl font-display mb-6 text-primary">$497<span className="text-lg text-foreground">/mo</span></div>
              <ul className="space-y-4 mb-8 font-medium">
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> Everything in Almost Zero</li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> Content Creation (2 vids)</li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> SEO Audit</li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> Strategy Call included</li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> 3 revisions/month</li>
              </ul>
              <Link href="/contact" className="block w-full text-center py-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-bold text-lg">
                Select Plan
              </Link>
            </div>

            {/* Plan 3 */}
            <div className="bg-background border border-border rounded-xl p-8 shadow-lg">
              <h3 className="font-display text-3xl mb-2">Full Throttle Plus</h3>
              <div className="text-4xl font-display mb-6">$697<span className="text-lg text-muted-foreground">/mo</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> Everything in Full Throttle</li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> 1 Premium Ad Funnel</li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> Weekly reporting</li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> Priority support</li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> Unlimited revisions</li>
              </ul>
              <Link href="/contact" className="block w-full text-center py-3 rounded-md border border-border hover:bg-accent transition-colors font-bold">
                Select Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Guarantee */}
      <section className="py-32 reveal-section bg-primary text-primary-foreground flex flex-col items-center justify-center text-center px-4">
        <ShieldCheck className="w-24 h-24 mb-8 opacity-80" />
        <h2 className="font-display text-7xl md:text-9xl leading-[0.8] tracking-tighter">
          5 QUALIFIED LEADS.<br/>
          <span className="text-background">OR MONTH TWO IS FREE.</span>
        </h2>
      </section>

      {/* SECTION 9: FAQ */}
      <section className="py-24 reveal-section container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-5xl md:text-7xl mb-12 text-center">FAQ.</h2>
        <Accordion type="single" collapsible className="w-full">
          {[
            { q: "What is DMCOI? / Who is The Bulgarian Horse?", a: "We are a growth agency built for speed. The Bulgarian Horse is our mascot, representing aggressive, strategic market dominance." },
            { q: "What does the $49 trial include?", a: "A full setup of Meta Ads, 1 premium video edit, a social media audit, and a strategy call. It's a low-risk taste of our capability." },
            { q: "How long until I see results?", a: "With paid ads, often within 48 hours of launch. SEO and organic content compound over 30-90 days." },
            { q: "Do you lock me into a contract?", a: "No. Month to month. We keep you by performing, not by legal force." },
            { q: "What markets do you serve?", a: "Local services, trades, medical clinics, coaches, and real estate in US, Canada, and Australia." },
          ].map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-xl font-bold hover:text-primary py-6">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg pb-6 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* SECTION 10: Final CTA */}
      <section className="py-32 bg-card border-t border-border reveal-section text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-7xl md:text-9xl mb-6">READY TO SCALE?</h2>
          <p className="text-2xl text-muted-foreground mb-12 font-medium">The Bulgarian Horse is waiting.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-5 rounded-md font-bold flex items-center justify-center text-xl hover:scale-105 transition-transform duration-200 w-full sm:w-auto">
              Start $49 Trial
            </Link>
            <Link href="/contact" className="border-2 border-border hover:border-primary/50 bg-background hover:bg-accent/10 px-10 py-5 rounded-md font-bold flex items-center justify-center text-xl transition-colors duration-200 w-full sm:w-auto">
              Book Strategy Call
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
