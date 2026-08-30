'use client';

import { useState } from 'react';
import { RevealSection } from '@/hooks/use-reveal';
import { BookOpen, Beaker, FlaskConical, GraduationCap, Atom } from 'lucide-react';

const programmes = [
  {
    num: '01',
    level: 'Early Years',
    desc: 'A nurturing introduction to learning that develops social skills, basic numeracy, and early literacy in a supportive environment.',
    icon: BookOpen,
  },
  {
    num: '02',
    level: 'Primary',
    desc: 'Structured instruction in core subjects — English, Mathematics, Science, and Urdu — building strong academic habits.',
    icon: GraduationCap,
  },
  {
    num: '03',
    level: 'Middle School',
    desc: 'Deeper engagement with subjects, introduction to scientific methodology, and development of critical thinking.',
    icon: Beaker,
  },
  {
    num: '04',
    level: 'Secondary',
    desc: 'Rigorous examination preparation with a science-oriented curriculum and practical laboratory work.',
    icon: FlaskConical,
  },
  {
    num: '05',
    level: 'Science Programme',
    desc: 'Specialised science education with hands-on experiments, project-based learning, and preparation for higher studies.',
    icon: Atom,
  },
];

export default function Academics() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = programmes[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section id="academics" className="section-padding bg-white">
      <RevealSection className="container-site">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: heading + interactive tabs */}
          <div className="lg:col-span-5 reveal">
            <span className="section-label mb-4 block">Academics</span>
            <h2 className="section-heading text-[2rem] sm:text-[2.5rem] mb-5">
              Learning Designed for <span className="text-gold">Depth</span>
            </h2>
            <p className="body-text mb-8">
              Our curriculum develops curiosity, confidence, and capability at
              every stage of a student&apos;s education.
            </p>

            {/* Programme selector tabs */}
            <div className="space-y-1.5">
              {programmes.map((p, i) => {
                const Icon = p.icon;
                return (
                  <button
                    key={p.level}
                    onClick={() => setActiveIndex(i)}
                    className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-left transition-all duration-300 group ${
                      activeIndex === i
                        ? 'bg-navy text-white shadow-lg shadow-navy/15'
                        : 'hover:bg-warm-surface text-text-secondary'
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        activeIndex === i
                          ? 'bg-white/15 text-white'
                          : 'bg-warm-surface text-text-tertiary group-hover:text-navy'
                      }`}
                    >
                      <Icon size={16} strokeWidth={1.8} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span
                        className={`text-sm font-semibold block truncate ${
                          activeIndex === i ? 'text-white' : ''
                        }`}
                      >
                        {p.level}
                      </span>
                    </div>
                    <span
                      className={`text-xs font-medium transition-all duration-300 ${
                        activeIndex === i
                          ? 'text-white/60'
                          : 'text-text-tertiary'
                      }`}
                    >
                      {p.num}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: active programme detail card */}
          <div className="lg:col-span-7 reveal reveal-delay-2">
            <div className="relative bg-warm-surface rounded-2xl p-8 lg:p-12 min-h-[320px] lg:min-h-[400px] flex flex-col justify-center">
              {/* Large background number */}
              <span
                className="absolute top-6 right-8 text-[8rem] lg:text-[10rem] leading-none text-navy/[0.04] pointer-events-none select-none"
                style={{ fontFamily: 'var(--font-dm-serif), Georgia, serif' }}
              >
                {active.num}
              </span>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-navy/10 flex items-center justify-center text-navy mb-6">
                  <ActiveIcon size={28} strokeWidth={1.5} />
                </div>
                <h3
                  className="text-[1.75rem] lg:text-2xl text-navy mb-4 leading-tight"
                  style={{ fontFamily: 'var(--font-dm-serif), Georgia, serif' }}
                >
                  {active.level}
                </h3>
                <p className="body-text max-w-md leading-relaxed">
                  {active.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
