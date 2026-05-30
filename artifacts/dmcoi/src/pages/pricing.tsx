import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { Link } from 'wouter';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Pricing() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-4 text-center mb-20">
        <h1 className="font-display text-7xl md:text-9xl mb-6">PICK YOUR LEVEL</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">No contracts. No nonsense. Just results. Choose the arsenal that fits your ambition.</p>
      </div>

      <div className="container mx-auto px-4 mb-32">
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {/* Plan 1 */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
            <h3 className="font-display text-3xl mb-2">Almost Zero</h3>
            <p className="text-muted-foreground mb-6 h-12">For businesses just starting to take growth seriously.</p>
            <div className="text-5xl font-display mb-8">$297<span className="text-lg text-muted-foreground font-sans font-normal">/mo</span></div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>1 Ad Campaign Management</span></li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>Basic reporting dashboard</span></li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>Email support (48hr SLA)</span></li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>1 revision per month</span></li>
            </ul>
            <Link href="/contact" className="block w-full text-center py-4 rounded border border-border hover:bg-accent transition-colors font-bold">
              Select Plan
            </Link>
          </div>

          {/* Plan 2 - Popular */}
          <div className="bg-card border-2 border-primary rounded-xl p-8 shadow-[0_0_40px_rgba(0,102,255,0.15)] relative transform lg:-translate-y-4 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold tracking-wider">
              MOST POPULAR
            </div>
            <h3 className="font-display text-3xl mb-2">Full Throttle</h3>
            <p className="text-muted-foreground mb-6 h-12">The aggressive growth package. Everything you need to scale.</p>
            <div className="text-6xl font-display mb-8 text-primary">$497<span className="text-lg text-foreground font-sans font-normal">/mo</span></div>
            <ul className="space-y-4 mb-8 font-medium">
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>Everything in Almost Zero</span></li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>Content Creation (2 custom videos/mo)</span></li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>Full SEO Audit & Action Plan</span></li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>Monthly Strategy Call included</span></li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>3 revisions per month</span></li>
            </ul>
            <Link href="/contact" className="block w-full text-center py-4 rounded bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-bold text-lg">
              Select Plan
            </Link>
          </div>

          {/* Plan 3 */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
            <h3 className="font-display text-3xl mb-2">Full Throttle Plus</h3>
            <p className="text-muted-foreground mb-6 h-12">For market leaders wanting complete domination.</p>
            <div className="text-5xl font-display mb-8">$697<span className="text-lg text-muted-foreground font-sans font-normal">/mo</span></div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>Everything in Full Throttle</span></li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>1 Premium Ad Funnel Build</span></li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>Weekly reporting & syncs</span></li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>Priority Slack/WhatsApp support</span></li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>Unlimited revisions</span></li>
            </ul>
            <Link href="/contact" className="block w-full text-center py-4 rounded border border-border hover:bg-accent transition-colors font-bold">
              Select Plan
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-32 max-w-4xl">
        <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <ShieldCheck className="w-24 h-24 text-primary shrink-0" />
          <div>
            <h3 className="font-display text-4xl mb-4">THE BULGARIAN GUARANTEE</h3>
            <p className="text-xl">If we don't generate at least 5 qualified leads in your first 30 days, your second month of management is completely free. No weasel clauses. No excuses.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-5xl md:text-6xl mb-12 text-center">PRICING FAQ</h2>
        <Accordion type="single" collapsible className="w-full">
          {[
            { q: "Is ad spend included in the monthly fee?", a: "No. The pricing above is our management and creative fee. You will pay ad platforms (Meta/Google) directly. We recommend a minimum ad spend of $1,000/mo to see meaningful data." },
            { q: "What does the $49 Trial actually get me?", a: "The trial is a low-risk entry point. We build your initial Meta Ads campaign, edit one piece of premium video content, audit your current setup, and do a strategy call. If you like the work, you pick a plan. If not, you keep the assets." },
            { q: "Do I have to sign a 6-month contract?", a: "Never. All our plans are month-to-month. If we stop performing, you should be able to fire us. We rely on results for retention, not legal paperwork." },
            { q: "What constitutes a 'revision'?", a: "A revision is a request to change a piece of creative (video edit, graphic) or modify an active ad campaign copy/targeting. Full Throttle gives you 3 of these per month." },
            { q: "Can I upgrade or downgrade my plan?", a: "Yes, you can change your plan at the end of any billing cycle with 7 days notice." },
          ].map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-xl font-bold hover:text-primary py-6">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg pb-6 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}