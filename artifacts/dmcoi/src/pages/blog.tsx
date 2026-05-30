import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Why Your Meta Ads Are Burning Cash (And How to Fix It)',
      date: 'OCT 24, 2023',
      category: 'Meta Ads',
      excerpt: 'Most local businesses approach Facebook ads like it\'s 2018. If you are still relying on broad targeting and static image boosts, you are bleeding money.',
    },
    {
      id: 2,
      title: 'The "Anti-Boring" Framework for Service Business Content',
      date: 'OCT 12, 2023',
      category: 'Content',
      excerpt: 'Nobody wants to watch a 3-minute video about HVAC maintenance. Here is how to engineer hooks that actually keep people watching.',
    },
    {
      id: 3,
      title: 'Local SEO is Dead. Long Live Local SEO.',
      date: 'SEP 28, 2023',
      category: 'SEO',
      excerpt: 'The Google Business Profile algorithm changed again. Here are the 3 ranking factors that actually move the needle in 2024.',
    },
    {
      id: 4,
      title: 'How to Build a CRM Workflow That Prevents Lead Leakage',
      date: 'SEP 15, 2023',
      category: 'Growth',
      excerpt: 'Generating the lead is only 20% of the battle. If you aren\'t contacting them within 5 minutes, your close rate drops by 80%.',
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="font-display text-7xl md:text-9xl mb-6 text-center">INTEL</h1>
        <p className="text-xl text-muted-foreground text-center mb-24 max-w-2xl mx-auto">Field reports, tactical breakdowns, and unfiltered opinions from the front lines of digital growth.</p>

        <div className="grid gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-card border border-border rounded-xl p-8 md:p-10 hover:border-primary/50 transition-colors group">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="text-xs font-bold tracking-widest text-primary bg-primary/10 px-3 py-1 rounded">{post.category}</span>
                <span className="text-sm font-medium text-muted-foreground">{post.date}</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl mb-4 group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              <Link href="#" className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary/80 transition-colors">
                Read Report <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}