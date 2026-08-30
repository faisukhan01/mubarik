'use client';

import { RevealSection } from '@/hooks/use-reveal';
import { Award, FlaskConical, ShieldCheck, Users } from 'lucide-react';

const strengths = [
  {
    num: '01',
    title: 'Academic Excellence',
    desc: 'A structured, rigorous curriculum delivered by experienced teachers who hold students to clear standards of performance and conduct.',
    icon: Award,
    span: 'lg:col-span-7',
  },
  {
    num: '02',
    title: 'Scientific Thinking',
    desc: 'Science education is central to our programme. Students develop hands-on skills through laboratory work, experiments, and project-based learning.',
    icon: FlaskConical,
    span: 'lg:col-span-5',
  },
  {
    num: '03',
    title: 'Character Building',
    desc: 'Discipline, respect, and responsibility are integral to daily school life. We expect students to conduct themselves with integrity.',
    icon: ShieldCheck,
    span: 'lg:col-span-5',
  },
  {
    num: '04',
    title: 'Individual Attention',
    desc: 'With manageable class sizes and teachers who know their students, we ensure each learner receives the support and guidance they need.',
    icon: Users,
    span: 'lg:col-span-7',
  },
];

export default function WhyMubarik() {
  return (
    <section className="section-padding bg-navy-dark relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <RevealSection className="container-site relative z-10">
        <div className="mb-14 lg:mb-16">
          <span className="section-label mb-4 block reveal">Why Mubarik</span>
          <h2 className="section-heading text-[2rem] sm:text-[2.5rem] text-white reveal reveal-delay-1">
            What <span className="text-gold">Distinguishes</span> Us
          </h2>
        </div>

        {/* Masonry-style grid: 7+5, 5+7 */}
        <div className="grid sm:grid-cols-2 gap-5">
          {strengths.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className={`${item.span} group relative p-8 lg:p-10 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.07] hover:border-gold/20 transition-all duration-500 card-hover reveal reveal-delay-${i + 1}`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-navy-dark transition-all duration-400">
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                {/* Ghost number */}
                <span
                  className="absolute top-6 right-8 text-[5rem] leading-none text-white/[0.03] pointer-events-none select-none group-hover:text-gold/[0.06] transition-colors duration-500"
                  style={{
                    fontFamily: 'var(--font-dm-serif), Georgia, serif',
                  }}
                >
                  {item.num}
                </span>

                <h3
                  className="text-xl text-white mb-3 group-hover:text-gold-light transition-colors duration-300"
                  style={{
                    fontFamily: 'var(--font-dm-serif), Georgia, serif',
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/55 transition-colors duration-300">
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
