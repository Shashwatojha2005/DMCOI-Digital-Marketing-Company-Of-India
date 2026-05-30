import React from 'react';
import { Link } from 'wouter';

export default function Team() {
  const team = [
    {
      name: 'Alex Mercer',
      role: 'Head of Growth',
      bio: 'Ex-agency director who got tired of the fluff. Specializes in multi-channel scaling architectures.',
      avatarColor: 'fill-blue-600'
    },
    {
      name: 'Sarah Chen',
      role: 'Creative Director',
      bio: 'Makes things look dangerous. Former editorial designer turned conversion-creative obsessed.',
      avatarColor: 'fill-indigo-600'
    },
    {
      name: 'Marcus Vance',
      role: 'Lead Media Buyer',
      bio: 'Has spent over $10M in profitable ad spend. Thinks in ROAS. Dreams in custom audiences.',
      avatarColor: 'fill-slate-700'
    },
    {
      name: 'Elena Rostova',
      role: 'Systems Engineer',
      bio: 'Builds the automation machines that ensure zero leads fall through the cracks. Zapier wizard.',
      avatarColor: 'fill-primary'
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h1 className="font-display text-7xl md:text-9xl mb-6">THE SQUAD</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">No junior account managers. No interns learning on your dime. Just senior killers who execute.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-32">
          {team.map((member, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-8 text-center group hover:border-primary/50 transition-colors">
              <div className="w-32 h-32 mx-auto bg-background rounded-full border border-border mb-6 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-20 h-20 opacity-80 group-hover:scale-110 transition-transform duration-300">
                  <circle cx="50" cy="40" r="25" className={member.avatarColor} />
                  <path d="M 20 100 C 20 70, 80 70, 80 100" className={member.avatarColor} />
                </svg>
              </div>
              <h3 className="font-display text-3xl mb-1">{member.name}</h3>
              <p className="text-sm font-bold tracking-widest text-primary mb-4 uppercase">{member.role}</p>
              <p className="text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-card border border-border rounded-2xl p-16 max-w-4xl mx-auto">
          <h2 className="font-display text-5xl mb-4">THINK YOU BELONG HERE?</h2>
          <p className="text-lg text-muted-foreground mb-8">We are always looking for aggressive talent.</p>
          <Link href="/careers" className="bg-primary text-primary-foreground font-bold px-8 py-4 rounded hover:bg-primary/90 transition-colors inline-block">
            View Open Positions
          </Link>
        </div>
      </div>
    </div>
  );
}