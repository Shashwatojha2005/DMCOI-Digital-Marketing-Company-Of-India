import { Link } from 'wouter';
import { BulgarianHorse } from '@/components/BulgarianHorse';

type HorseVariant = 'hero' | 'main' | 'approved' | 'presenting' | 'strategy' | 'service' | 'quote' | 'working';

interface TeamMember {
  name: string;
  title: string;
  role: string;
  bio: string;
  experience: string;
  horse: HorseVariant;
  avatarInitials: string;
  avatarColor: string;
}

const team: TeamMember[] = [
  {
    name: 'Sachin Chaudhari',
    title: 'Founder',
    role: 'Meta Ads Expert',
    bio: 'Built DMCOI from the ground up after seeing how broken the agency world was. 5 years running profitable Meta Ads campaigns for businesses across AU, US and CA. If it doesn\'t convert, it doesn\'t ship.',
    experience: '5 Years Experience',
    horse: 'main',
    avatarInitials: 'SC',
    avatarColor: 'bg-primary',
  },
  {
    name: 'Suryaansh Pandey',
    title: 'Creative Director',
    role: 'Designer & Video Strategist',
    bio: 'Has guided the creation of 100+ videos and graphics that stop the scroll and start the sale. 7 years making brands look dangerous. Thinks in frames, breathes in conversions.',
    experience: '7 Years Experience',
    horse: 'working',
    avatarInitials: 'SP',
    avatarColor: 'bg-indigo-600',
  },
  {
    name: 'Shashwat Ojha',
    title: 'Operations Manager',
    role: 'Social Media Specialist',
    bio: 'The strategist who builds growth systems with 100% brand accuracy. Every campaign he touches runs cleaner, faster, and harder. No guesswork — only systems that scale.',
    experience: 'Strategy Specialist',
    horse: 'presenting',
    avatarInitials: 'SO',
    avatarColor: 'bg-slate-700',
  },
  {
    name: 'Shambhavi Thakur',
    title: 'SEO Expert',
    role: 'Graphic Designer',
    bio: '4 years dominating search rankings and designing assets that punch above their weight. Owns the intersection of visibility and aesthetics. Your brand on page one — built to last.',
    experience: '4 Years Experience',
    horse: 'strategy',
    avatarInitials: 'ST',
    avatarColor: 'bg-violet-700',
  },
];

export default function Team() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <span className="inline-block py-1 px-3 rounded border border-primary/40 bg-primary/10 text-xs font-bold tracking-widest text-primary mb-6">
              THE PEOPLE BEHIND THE HORSE
            </span>
            <h1 className="font-display text-7xl md:text-9xl mb-6 leading-none">THE SQUAD</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              No junior account managers. No interns learning on your dime. Senior operators who execute with precision.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-32">
          {team.map((member, i) => (
            <div
              key={i}
              data-testid={`card-team-${i}`}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,102,255,0.08)] relative overflow-hidden"
            >
              {/* Background mascot */}
              <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                <BulgarianHorse variant={member.horse} className="w-40 object-contain select-none" />
              </div>

              <div className="flex items-start gap-6 mb-6 relative z-10">
                {/* Avatar */}
                <div className={`w-16 h-16 rounded-full ${member.avatarColor} flex items-center justify-center shrink-0`}>
                  <span className="font-display text-xl text-white">{member.avatarInitials}</span>
                </div>
                {/* Name + role */}
                <div>
                  <h3 className="font-display text-3xl leading-none mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-bold tracking-wider uppercase">{member.title} — {member.role}</p>
                  <p className="text-muted-foreground text-xs mt-1">{member.experience}</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed relative z-10">{member.bio}</p>

              {/* Small horse on hover (bottom-right corner visible area) */}
              <div className="flex justify-end mt-6 relative z-10">
                <BulgarianHorse
                  variant={member.horse}
                  className="w-16 h-16 object-contain opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 select-none"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Story section */}
        <div className="max-w-5xl mx-auto mb-32">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-card border border-border rounded-xl p-8">
              <BulgarianHorse variant="approved" className="w-20 h-20 object-contain mx-auto mb-4 select-none" />
              <h4 className="font-display text-2xl mb-2">WE PLAN</h4>
              <p className="text-muted-foreground text-sm">Every campaign starts with a strategy built around your market, your audience, and your goals.</p>
            </div>
            <div className="bg-card border border-primary/30 rounded-xl p-8 shadow-[0_0_30px_rgba(0,102,255,0.1)]">
              <BulgarianHorse variant="working" className="w-20 h-20 object-contain mx-auto mb-4 select-none" />
              <h4 className="font-display text-2xl mb-2 text-primary">WE BUILD</h4>
              <p className="text-muted-foreground text-sm">We execute daily — ads, content, SEO, systems. No excuses. No waiting for "next sprint."</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <BulgarianHorse variant="presenting" className="w-20 h-20 object-contain mx-auto mb-4 select-none" />
              <h4 className="font-display text-2xl mb-2">WE SCALE</h4>
              <p className="text-muted-foreground text-sm">Every week we report, optimize, and double down on what's working. Growth is not optional.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-card border border-border rounded-2xl p-16 max-w-4xl mx-auto">
          <h2 className="font-display text-5xl mb-4">THINK YOU BELONG HERE?</h2>
          <p className="text-lg text-muted-foreground mb-8">We hire aggressive talent who are obsessed with results.</p>
          <Link
            href="/careers"
            className="bg-primary text-primary-foreground font-bold px-8 py-4 rounded hover:bg-primary/90 transition-colors inline-block"
          >
            View Open Positions
          </Link>
        </div>
      </div>
    </div>
  );
}
