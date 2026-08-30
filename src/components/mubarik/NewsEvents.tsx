'use client';

import { RevealSection } from '@/hooks/use-reveal';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featured = {
  cat: 'Admissions',
  title: 'Admissions Open for the Academic Year 2025–26',
  date: '15 August 2025',
  summary:
    'Applications are now being accepted for Early Years through Secondary levels at both Mubarik Science Academy and Mubarik Educare School.',
};

const items = [
  { cat: 'Event', title: 'Annual Science Exhibition 2025', date: '20 July 2025', color: 'border-l-gold' },
  { cat: 'Academic', title: 'Mid-Term Examination Schedule Released', date: '5 July 2025', color: 'border-l-navy' },
  { cat: 'Sports', title: 'Inter-Class Cricket Tournament Results', date: '28 June 2025', color: 'border-l-brand-green' },
];

const catBadgeColors: Record<string, string> = {
  Admissions: 'bg-gold/15 text-gold-dark',
  Event: 'bg-gold/15 text-gold-dark',
  Academic: 'bg-navy/10 text-navy',
  Sports: 'bg-brand-green/10 text-brand-green',
};

export default function NewsEvents() {
  return (
    <section id="news" className="section-padding bg-warm-surface">
      <RevealSection className="container-site">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10 lg:mb-14">
          <div>
            <span className="section-label mb-3 block reveal">Updates</span>
            <h2 className="section-heading text-[2rem] sm:text-[2.5rem] reveal reveal-delay-1">
              Latest <span className="text-gold">News</span>
            </h2>
          </div>
          <Link
            href="#"
            className="link-arrow hidden sm:inline-flex reveal reveal-delay-2"
          >
            All News
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-5 lg:gap-6">
          {/* Featured article — left, ~60% */}
          <article className="lg:col-span-7 relative rounded-2xl overflow-hidden reveal reveal-delay-1 min-h-[340px] sm:min-h-[380px] lg:min-h-[420px]">
            {/* Navy gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />

            {/* Decorative elements */}
            <div className="absolute top-6 right-8 text-white/[0.04] pointer-events-none select-none">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="60" r="58" stroke="currentColor" strokeWidth="1" />
                <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="60" cy="60" r="20" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-gold/[0.08] blur-2xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 p-7 sm:p-9 lg:p-10 flex flex-col justify-end h-full">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-[0.6rem] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-lg bg-white/15 text-gold-light backdrop-blur-sm"
                  style={{
                    fontFamily: 'var(--font-jakarta), system-ui, sans-serif',
                  }}
                >
                  {featured.cat}
                </span>
                <span
                  className="text-xs text-white/40"
                  style={{
                    fontFamily: 'var(--font-jakarta), system-ui, sans-serif',
                  }}
                >
                  {featured.date}
                </span>
              </div>
              <h3
                className="text-white text-xl sm:text-2xl lg:text-[1.7rem] mb-3 leading-snug"
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                }}
              >
                {featured.title}
              </h3>
              <p
                className="text-white/55 text-sm leading-relaxed max-w-lg mb-6"
                style={{
                  fontFamily: 'var(--font-jakarta), system-ui, sans-serif',
                }}
              >
                {featured.summary}
              </p>
              <Link
                href="#"
                className="group/link inline-flex items-center gap-2 text-sm font-semibold text-gold-light hover:text-white transition-colors duration-300"
                style={{
                  fontFamily: 'var(--font-jakarta), system-ui, sans-serif',
                }}
              >
                Read More
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                />
              </Link>
            </div>
          </article>

          {/* Side news — right, ~40% */}
          <div className="lg:col-span-5 flex flex-col gap-0">
            {items.map((item, i) => (
              <div key={item.title} className="relative">
                <article
                  className={`bg-white rounded-2xl p-5 sm:p-6 border border-warm-border border-l-[3px] ${item.color} transition-all duration-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/[0.08] reveal reveal-delay-${i + 2}`}
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <span
                      className={`text-[0.6rem] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-lg ${catBadgeColors[item.cat] ?? 'bg-navy/10 text-navy'}`}
                      style={{
                        fontFamily: 'var(--font-jakarta), system-ui, sans-serif',
                      }}
                    >
                      {item.cat}
                    </span>
                    <span
                      className="text-xs text-text-tertiary"
                      style={{
                        fontFamily: 'var(--font-jakarta), system-ui, sans-serif',
                      }}
                    >
                      {item.date}
                    </span>
                  </div>
                  <h4
                    className="text-[0.92rem] font-semibold text-navy leading-snug"
                    style={{
                      fontFamily: 'var(--font-playfair), Georgia, serif',
                    }}
                  >
                    <Link
                      href="#"
                      className="hover:text-gold transition-colors duration-300"
                    >
                      {item.title}
                    </Link>
                  </h4>
                </article>

                {/* Date separator between items */}
                {i < items.length - 1 && (
                  <div className="flex items-center gap-3 my-3 lg:my-4 px-2">
                    <div className="h-px flex-1 bg-warm-border" />
                    <span
                      className="text-[0.65rem] text-text-tertiary tracking-wide"
                      style={{
                        fontFamily: 'var(--font-jakarta), system-ui, sans-serif',
                      }}
                    >
                      {i + 1}/{items.length}
                    </span>
                    <div className="h-px flex-1 bg-warm-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
