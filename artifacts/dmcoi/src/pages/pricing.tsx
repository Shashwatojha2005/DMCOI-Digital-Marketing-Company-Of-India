import { Check, ShieldCheck, Gift, Star, Zap } from 'lucide-react';
import { Link } from 'wouter';
import { BulgarianHorse } from '@/components/BulgarianHorse';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const CALENDAR_URL = 'https://calendar.app.google/N9bU7euuWj3RUn5y9';

interface Feature { text: string }
interface Bonus { label: string; worth: string }

interface Plan {
  name: string;
  tagline: string;
  price: number;
  totalValue: string;
  popular: boolean;
  features: Feature[];
  bonuses: Bonus[];
  guarantee: string;
  ctaLabel: string;
}

const plans: Plan[] = [
  {
    name: 'Almost Zero',
    tagline: 'For businesses ready to take the first real step.',
    price: 297,
    totalValue: '$750+',
    popular: false,
    features: [
      { text: 'Meta Ads full setup + management' },
      { text: '2 high-converting ad creatives' },
      { text: 'Audience research + targeting' },
      { text: 'Weekly performance report' },
      { text: 'Ad spend optimization, reviewed daily' },
    ],
    bonuses: [
      { label: 'Facebook + Instagram page audit', worth: '$200' },
      { label: 'Competitor ad analysis', worth: '$150' },
      { label: '1 custom ad graphic', worth: '$100' },
    ],
    guarantee: 'If we don\'t generate minimum 5 qualified leads in Month 1, Month 2 is completely FREE. Full team. Zero charge.',
    ctaLabel: 'Start Almost Zero',
  },
  {
    name: 'Throttle',
    tagline: 'The aggressive all-in-one growth stack.',
    price: 497,
    totalValue: '$1,800+',
    popular: true,
    features: [
      { text: 'Full Meta Ads management' },
      { text: '4 ad creatives (upgraded from 2)' },
      { text: 'A/B split testing' },
      { text: 'Retargeting campaigns' },
      { text: 'Lead tracking dashboard' },
      { text: '10 premium video edits' },
      { text: '10 carousel posts' },
      { text: 'Cover page + highlight design' },
      { text: 'Story every Sunday' },
      { text: 'Personal branding strategy' },
      { text: 'Instagram + Facebook + LinkedIn' },
    ],
    bonuses: [
      { label: 'Brand style guide creation', worth: '$300' },
      { label: '30-day content calendar', worth: '$200' },
      { label: 'Bio + profile optimization (all 3 platforms)', worth: '$150' },
      { label: '1 FREE Google Ads campaign setup', worth: '$400' },
    ],
    guarantee: 'Zero leads Month 1 = Full team works Month 2 FREE. No questions. No excuses.',
    ctaLabel: 'Start Throttle',
  },
  {
    name: 'Throttle Plus',
    tagline: 'Total market domination. You do nothing. We handle everything.',
    price: 697,
    totalValue: '$3,500+',
    popular: false,
    features: [
      { text: 'Everything in Throttle' },
      { text: '15 videos (upgraded from 10)' },
      { text: '15 carousel posts (upgraded)' },
      { text: 'Daily story — ALL platforms' },
      { text: 'Post scheduling — fully managed' },
      { text: '4 SEO-optimized blog posts/month' },
      { text: 'Google My Business optimization' },
      { text: 'Local SEO keyword targeting' },
      { text: 'Citation building' },
      { text: 'Monthly SEO report' },
      { text: 'Review generation strategy' },
      { text: 'Response to all reviews' },
      { text: 'Google Maps ranking boost' },
    ],
    bonuses: [
      { label: 'Full website SEO audit', worth: '$500' },
      { label: '12-month content strategy', worth: '$600' },
      { label: 'Email marketing setup', worth: '$300' },
      { label: 'WhatsApp business optimization', worth: '$150' },
      { label: 'Monthly strategy call (45 min)', worth: '$200' },
    ],
    guarantee: 'Zero leads Month 1 = Month 2 completely FREE + We personally reach out to 50 potential clients for you. Zero additional cost.',
    ctaLabel: 'Start Throttle Plus',
  },
];

export default function Pricing() {
  return (
    <div className="bg-background min-h-screen pb-32">
      {/* Hero */}
      <div className="pt-24 pb-16 text-center container mx-auto px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10">
          <span className="inline-block py-1 px-3 rounded border border-primary/40 bg-primary/10 text-xs font-bold tracking-widest text-primary mb-6">
            NO CONTRACTS · CANCEL ANYTIME
          </span>
          <h1 className="font-display text-7xl md:text-9xl mb-6 leading-none">PICK YOUR<br/><span className="text-primary">LEVEL.</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every plan comes with a rock-solid guarantee. We don't win unless you win.
          </p>
        </div>
      </div>

      {/* Value Banner */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-5xl mx-auto bg-primary/5 border border-primary/20 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-4">
            <BulgarianHorse variant="presenting" className="w-24 object-contain select-none hidden md:block" />
            <div>
              <p className="font-display text-2xl md:text-3xl">THE HORSE RUNS YOUR GROWTH MACHINE.</p>
              <p className="text-muted-foreground">You get agency-grade output at a fraction of agency prices.</p>
            </div>
          </div>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-primary text-primary-foreground font-bold px-6 py-3 rounded hover:bg-primary/90 transition-colors"
          >
            Book Free Strategy Call
          </a>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl flex flex-col ${
                plan.popular
                  ? 'bg-card border-2 border-primary shadow-[0_0_60px_rgba(0,102,255,0.2)] lg:-translate-y-6 z-10'
                  : 'bg-card border border-border shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-5 py-1.5 rounded-full text-sm font-bold tracking-wider flex items-center gap-2">
                  <Star className="w-3 h-3 fill-current" /> MOST POPULAR
                </div>
              )}

              {/* Header */}
              <div className="p-8 pb-6 border-b border-border">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`font-display text-3xl mb-1 ${plan.popular ? 'text-primary' : ''}`}>{plan.name}</h3>
                    <p className="text-muted-foreground text-sm leading-snug max-w-[200px]">{plan.tagline}</p>
                  </div>
                  <Zap className={`w-8 h-8 shrink-0 mt-1 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>

                <div className="flex items-end gap-3 mt-4">
                  <div>
                    <span className="font-display text-6xl">${plan.price}</span>
                    <span className="text-muted-foreground text-base font-sans">/mo</span>
                  </div>
                  <div className="mb-1 text-right">
                    <div className="text-xs text-muted-foreground line-through">{plan.totalValue} value</div>
                    <div className="text-xs font-bold text-primary">YOU SAVE BIG</div>
                  </div>
                </div>

                <div className="mt-4 bg-primary/10 border border-primary/20 rounded px-3 py-2 text-center">
                  <span className="text-sm font-bold text-primary">TOTAL VALUE: {plan.totalValue}</span>
                  <span className="text-muted-foreground text-sm"> · YOU PAY: <span className="font-bold text-foreground">${plan.price}/mo</span></span>
                </div>
              </div>

              {/* Features */}
              <div className="p-8 pb-4 flex-1">
                <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4">WHAT'S INCLUDED</p>
                <ul className="space-y-3">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{f.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bonuses */}
              <div className="px-8 pb-4">
                <div className="bg-background/50 border border-border rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Gift className="w-4 h-4 text-primary" />
                    <p className="text-xs font-bold tracking-widest text-primary uppercase">FREE BONUSES</p>
                  </div>
                  <ul className="space-y-2">
                    {plan.bonuses.map((b, bi) => (
                      <li key={bi} className="flex items-start justify-between gap-2 text-xs">
                        <span className="text-muted-foreground">→ {b.label}</span>
                        <span className="shrink-0 font-bold text-foreground">FREE <span className="line-through text-muted-foreground font-normal">{b.worth}</span></span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Guarantee */}
              <div className="px-8 pb-6">
                <div className="flex items-start gap-3 bg-primary/5 border border-primary/20 rounded-xl p-4">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground leading-relaxed">{plan.guarantee}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="px-8 pb-8">
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-4 rounded-lg font-bold text-base transition-all duration-200 hover:scale-[1.02] ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,102,255,0.3)]'
                      : 'border border-border hover:border-primary/50 hover:bg-accent/10'
                  }`}
                >
                  {plan.ctaLabel}
                </a>
                <p className="text-center text-xs text-muted-foreground mt-3">No contract. Cancel anytime.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* $49 Trial Banner */}
      <div className="container mx-auto px-4 mb-20">
        <div className="max-w-5xl mx-auto relative overflow-hidden bg-primary rounded-2xl p-10 md:p-14 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent)]" />
          <div className="relative z-10">
            <p className="font-display text-2xl text-primary-foreground/70 mb-2">NOT READY FOR A FULL PLAN?</p>
            <h2 className="font-display text-6xl md:text-8xl text-primary-foreground mb-4">TRY US FOR $49</h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              7-day trial includes: Meta Ads setup, 1 premium video edit, social media audit, and a free strategy call. Keep all the assets either way.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-foreground text-primary font-bold px-10 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity"
            >
              Start $49 Trial
            </Link>
          </div>
        </div>
      </div>

      {/* Guarantee Banner */}
      <div className="container mx-auto px-4 mb-20 max-w-5xl">
        <div className="bg-card/50 border border-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <ShieldCheck className="w-20 h-20 text-primary shrink-0" />
          <div>
            <h3 className="font-display text-4xl md:text-5xl mb-4">THE BULGARIAN GUARANTEE</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If we don't generate at least 5 qualified leads in your first 30 days,{' '}
              <span className="text-foreground font-bold">your second month of management is completely free.</span>{' '}
              No weasel clauses. No excuses. The horse wins or doesn't get paid.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-5xl md:text-6xl mb-12 text-center">PRICING FAQ</h2>
        <Accordion type="single" collapsible className="w-full">
          {[
            { q: 'Is ad spend included in the monthly fee?', a: 'No. The pricing above is our management and creative fee. You pay ad platforms (Meta/Google) directly. We recommend a minimum ad spend of $1,000/mo to see meaningful data and results.' },
            { q: 'What does the $49 trial actually get me?', a: 'The trial is a low-risk entry point. We build your initial Meta Ads campaign, edit one premium piece of video content, audit your current social setup, and run a strategy call with you. You keep all assets regardless.' },
            { q: 'Do I have to sign a 6-month contract?', a: 'Never. All plans are month-to-month. If we stop performing, you should be able to fire us. We rely on results for retention, not legal paperwork.' },
            { q: 'Can I upgrade or downgrade my plan?', a: 'Yes. Change your plan at the end of any billing cycle with 7 days notice. Most clients upgrade, not downgrade.' },
            { q: 'What counts as a "qualified lead"?', a: 'A qualified lead is a real person who has expressed interest in your product or service (a form fill, a call, a DM) that matches your ideal customer profile. Not just clicks or impressions.' },
            { q: 'How quickly will I see results?', a: 'With paid ads, often within 48-72 hours of campaign launch. SEO and organic content compound over 30-90 days. Expect the first 7-14 days to be data-gathering, then performance accelerates.' },
          ].map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-lg font-bold hover:text-primary py-6">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
