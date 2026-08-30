'use client';

import { useState, useEffect, useCallback } from 'react';
import { RevealSection } from '@/hooks/use-reveal';
import { BookOpen, Beaker, FlaskConical, GraduationCap, Atom } from 'lucide-react';

const programmes = [
  {
    num: '01',
    level: 'Early Years',
    desc: 'A nurturing introduction to learning that develops social skills, basic numeracy, and early literacy in a supportive environment. Activities are designed to spark curiosity and build confidence from the very first day.',
    icon: BookOpen,
    highlights: ['Social Development', 'Early Literacy', 'Creative Play', 'Basic Numeracy'],
  },
  {
    num: '02',
    level: 'Primary',
    desc: 'Structured instruction in core subjects — English, Mathematics, Science, and Urdu — building strong academic habits and a love for learning that carries forward.',
    icon: GraduationCap,
    highlights: ['Core Subjects', 'Study Habits', 'Reading Programme', 'Assessment'],
  },
  {
    num: '03',
    level: 'Middle School',
    desc: 'Deeper engagement with subjects, introduction to scientific methodology, and development of critical thinking. Students begin to take ownership of their academic journey.',
    icon: Beaker,
    highlights: ['Scientific Method', 'Critical Thinking', 'Subject Depth', 'Projects'],
  },
  {
    num: '04',
    level: 'Secondary',
    desc: 'Rigorous examination preparation with a science-oriented curriculum and practical laboratory work. Students are guided towards academic excellence and personal responsibility.',
    icon: FlaskConical,
    highlights: ['Exam Preparation', 'Lab Work', 'Science Focus', 'Mentoring'],
  },
  {
    num: '05',
    level: 'Science Programme',
    desc: 'Specialised science education with hands-on experiments, project-based learning, and preparation for higher studies. The flagship programme of the Academy.',
    icon: Atom,
    highlights: ['Advanced Labs', 'Research Projects', 'Competition Prep', 'Higher Studies'],
  },
];

export default function Academics() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const active = programmes[activeIndex];
  const ActiveIcon = active.icon;

  const switchTab = useCallback(
    (index: number) => {
      if (index === activeIndex || isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex(index);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 200);
    },
    [activeIndex, isTransitioning],
  );

  // Auto-rotation every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      switchTab((activeIndex + 1) % programmes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex, switchTab]);

  return (
    <section id="academics" className="section-padding bg-white">
      <RevealSection className="container-site">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: heading + interactive tabs */}
          <div className="lg:col-span-5 reveal">
            <span className="section-label mb-4 block">Academics</span>
            <h2
              className="section-heading text-[2rem] sm:text-[2.5rem] mb-5"
              style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
            >
              Learning Designed for <span className="text-gold">Depth</span>
            </h2>
            <p className="body-text mb-8" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
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
                    onClick={() => switchTab(i)}
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
                        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
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
                      style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                    >
                      {p.num}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: active programme detail card — completely redesigned */}
          <div className="lg:col-span-7 reveal reveal-delay-2">
            <div
              key={activeIndex}
              className={`relative bg-white rounded-2xl overflow-hidden border border-warm-border min-h-[380px] lg:min-h-[450px] flex flex-col transition-all duration-500 ${
                isTransitioning
                  ? 'opacity-0 translate-y-3'
                  : 'opacity-100 translate-y-0'
              }`}
            >
              {/* Navy gradient accent at top */}
              <div className="h-2 bg-gradient-to-r from-navy via-navy-light to-gold" />

              {/* Subtle dots pattern */}
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, #1B2A5A 1px, transparent 0)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Large ghost watermark number */}
              <span
                className="absolute top-4 right-6 text-[10rem] lg:text-[12rem] leading-none text-navy/[0.03] pointer-events-none select-none"
                style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
              >
                {active.num}
              </span>

              <div className="relative z-10 flex-1 flex flex-col p-8 lg:p-12">
                {/* Line decoration + icon row */}
                <div className="flex items-center gap-5 mb-6">
                  {/* Decorative line */}
                  <div className="w-8 h-px bg-gradient-to-r from-navy/40 to-transparent" />
                  {/* Icon in gradient container */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center shadow-lg shadow-navy/20">
                    <ActiveIcon size={26} strokeWidth={1.5} className="text-white" />
                  </div>
                </div>

                <h3
                  className="text-[1.75rem] lg:text-2xl text-navy mb-4 leading-tight"
                  style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
                >
                  {active.level}
                </h3>

                <p
                  className="body-text max-w-md leading-relaxed mb-8"
                  style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                >
                  {active.desc}
                </p>

                {/* Highlight tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {active.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-3 py-1.5 rounded-lg bg-warm-surface text-text-secondary text-xs font-medium"
                      style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Progress dots at bottom */}
                <div className="flex items-center gap-2 mt-8 pt-6 border-t border-warm-border">
                  {programmes.map((p, i) => (
                    <button
                      key={p.num}
                      onClick={() => switchTab(i)}
                      className={`rounded-full transition-all duration-300 ${
                        activeIndex === i
                          ? 'w-6 h-2 bg-navy'
                          : 'w-2 h-2 bg-warm-border hover:bg-text-tertiary'
                      }`}
                      aria-label={`Go to ${p.level}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
