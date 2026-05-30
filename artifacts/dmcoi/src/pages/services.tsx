import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Search, PenTool, Workflow } from 'lucide-react';
import { Link } from 'wouter';

export default function Services() {
  const services = [
    {
      id: 'meta-ads',
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: 'Meta Ads',
      headline: 'Paid Ads That Print Leads. No Fluff.',
      desc: 'Stop boosting posts. We build aggressive, high-converting ad funnels that capture attention and turn it into qualified pipeline.',
      includes: ['Full funnel architecture', 'Ad creative direction', 'Pixel & tracking setup', 'A/B testing protocol', 'Weekly reporting'],
      process: ['Audit & Strategy', 'Creative Build', 'Launch & Learn', 'Scale & Dominate']
    },
    {
      id: 'content',
      icon: <PenTool className="w-12 h-12 text-primary" />,
      title: 'Content Creation',
      headline: 'Scroll-Stopping Content That Converts.',
      desc: 'In the attention economy, boring brands die. We create premium, high-retention social assets that build trust and authority.',
      includes: ['Short-form video editing', 'Hook engineering', 'Brand design assets', 'Copywriting', 'Platform strategy'],
      process: ['Brand Voice Sync', 'Ideation', 'Production', 'Distribution']
    },
    {
      id: 'seo',
      icon: <Search className="w-12 h-12 text-primary" />,
      title: 'SEO',
      headline: 'Own Page One. Own The Market.',
      desc: 'When they search for what you do, they should find you first. We engineer long-term organic dominance.',
      includes: ['Technical SEO Audit', 'Keyword Strategy', 'On-page optimization', 'Backlink building', 'Local SEO (GBP)'],
      process: ['Technical Fixes', 'Content Mapping', 'Optimization', 'Authority Building']
    },
    {
      id: 'growth',
      icon: <Workflow className="w-12 h-12 text-primary" />,
      title: 'Growth Systems',
      headline: 'Automated Machines That Scale You.',
      desc: 'Leads are useless if you can\'t close them. We build the CRM systems and automations to ensure nothing slips through the cracks.',
      includes: ['CRM Setup', 'Lead Nurture Automations', 'Sales pipeline tracking', 'Email/SMS sequences', 'Integration sync'],
      process: ['Workflow Mapping', 'System Build', 'Automation Logic', 'Team Training']
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-4 text-center mb-24">
        <h1 className="font-display text-7xl md:text-9xl mb-6">SERVICES</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">We don't offer a menu of 50 generic services. We offer four weapons of mass growth. Pick your arsenal.</p>
      </div>

      <div className="container mx-auto px-4 flex flex-col gap-32">
        {services.map((service, idx) => (
          <div key={service.id} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
            
            <div className="w-full lg:w-1/2">
              <div className="bg-card border border-border p-12 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/10 transition-colors" />
                <div className="mb-8">{service.icon}</div>
                <h2 className="font-display text-5xl mb-4">{service.title}</h2>
                <h3 className="text-2xl font-bold mb-4">{service.headline}</h3>
                <p className="text-muted-foreground text-lg mb-8">{service.desc}</p>
                
                <h4 className="font-bold text-lg mb-4 text-primary">What's Included:</h4>
                <ul className="space-y-3 mb-8">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/pricing" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded hover:bg-primary/90 transition-colors">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h4 className="font-display text-4xl mb-8">The Process</h4>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                {service.process.map((step, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                      {i + 1}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-border bg-card shadow">
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-bold text-lg">{step}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}