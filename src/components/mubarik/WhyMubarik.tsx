'use client';

import { RevealSection } from '@/hooks/use-reveal';
import { Award, FlaskConical, ShieldCheck, Users } from 'lucide-react';

const strengths = [
  {
    num: '01',
    title: 'Academic Excellence',
    desc: 'A structured, rigorous curriculum delivered by experienced teachers who hold students to clear standards of performance and conduct.',
    icon: Award,
  },
  {
    num: '02',
    title: 'Scientific Thinking',
    desc: 'Science education is central to our programme. Students develop hands-on skills through laboratory work, experiments, and project-based learning.',
    icon: FlaskConical,
  },
  {
    num: '03',
    title: 'Character Building',
    desc: 'Discipline, respect, and responsibility are integral to daily school life. We expect students to conduct themselves with integrity.',
    icon: ShieldCheck,
  },
  {
    num: '04',
    title: 'Individual Attention',
    desc: 'With manageable class sizes and teachers who know their students, we ensure each learner receives the support and guidance they need.',
    icon: Users,
  },
];

export default function WhyMubarik() {
  return (
    <section className="section-padding bg-warm-surface relative overflow-hidden">
      {/* Gradient accent bar at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-gold to-brand-green" />

      <RevealSection className="container-site relative z-10">
        {/* Section header */}
        <div className="mb-14 lg:mb-16">
          <span className="section-label mb-4 block reveal">Why Mubarik</span>
          <h2
            className="section-heading text-[2rem] sm:text-[2.5rem] reveal reveal-delay-1"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            What <span className="text-gold">Distinguishes</span> Us
          </h2>
        </div>

        {/* 2x2 equal grid */}
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {strengths.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className={`group relative bg-white rounded-2xl border border-warm-border p-8 lg:p-10 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_-12px_rgba(27,42,90,0.1)] hover:border-gold/30 transition-all duration-400 reveal reveal-delay-${i + 1}`}
              >
                {/* Ghost number in faint navy */}
                <span
                  className="absolute top-4 right-6 text-[5rem] leading-none text-navy/[0.04] pointer-events-none select-none group-hover:text-gold/[0.06] transition-colors duration-500"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  {item.num}
                </span>

                {/* Icon with light green tinted bg */}
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-white transition-all duration-400">
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                <h3
                  className="text-xl text-navy mb-3 group-hover:text-gold-dark transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-text-secondary text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif' }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </RevealSection>
    </section>
  );
}
