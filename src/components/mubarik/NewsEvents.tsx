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
  { cat: 'Event', title: 'Annual Science Exhibition 2025', date: '20 July 2025' },
  { cat: 'Academic', title: 'Mid-Term Examination Schedule Released', date: '5 July 2025' },
  { cat: 'Sports', title: 'Inter-Class Cricket Tournament Results', date: '28 June 2025' },
];

const catBorderColors: Record<string, { border: string; hover: string; badge: string }> = {
  Event: {
    border: 'border-l-gold',
    hover: 'hover:border-l-gold-light',
    badge: 'bg-gold/15 text-gold-dark',
  },
  Academic: {
    border: 'border-l-navy',
    hover: 'hover:border-l-navy-light',
    badge: 'bg-navy/10 text-navy',
  },
  Sports: {
    border: 'border-l-brand-green',
    hover: 'hover:border-l-brand-green',
    badge: 'bg-brand-green/10 text-brand-green',
  },
};

export default function NewsEvents() {
  return (
    <section id="news" className="section-padding bg-warm-surface">
      <RevealSection className="container-site">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10 lg:mb-14">
          <div>
            <span className="section-label mb-3 block reveal">Updates</span>
            <h2
              className="section-heading text-[2rem] sm:text-[2.5rem] reveal reveal-delay-1"
              style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
            >
              Latest <span className="text-gold">News</span>
            </h2>
          </div>
          <Link
            href="#"
            className="link-arrow hidden sm:inline-flex reveal reveal-delay-2"
          >
            View All
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-5 lg:gap-7">
          {/* Featured article — left, ~58% */}
          <article className="lg:col-span-7 group reveal reveal-delay-1">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-navy/[0.03] to-gold/[0.05] border border-warm-border/60 p-7 sm:p-9 lg:p-10 min-h-[340px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col justify-end transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/[0.08]">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gold/[0.06] blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none transition-all duration-700 group-hover:bg-gold/[0.1] group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-navy/[0.04] blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-[0.6rem] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-lg bg-gold/15 text-gold-dark"
                    style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                  >
                    {featured.cat}
                  </span>
                  <span
                    className="text-xs text-text-tertiary"
                    style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                  >
                    {featured.date}
                  </span>
                </div>

                <h3
                  className="text-navy text-xl sm:text-2xl lg:text-[1.65rem] font-bold mb-3 leading-snug"
                  style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
                >
                  {featured.title}
                </h3>

                <p
                  className="text-text-secondary text-sm leading-relaxed max-w-lg mb-6"
                  style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                >
                  {featured.summary}
                </p>

                <Link
                  href="#"
                  className="group/link inline-flex items-center gap-2 text-sm font-semibold text-gold-dark hover:text-gold transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                >
                  Read More
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </article>

          {/* Side news — right, ~42% */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {items.map((item, i) => {
              const colors = catBorderColors[item.cat] ?? catBorderColors['Academic'];
              return (
                <article
                  key={item.title}
                  className={`group bg-white rounded-xl p-5 sm:p-6 border border-warm-border/50 border-l-[3px] ${colors.border} ${colors.hover} transition-all duration-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/[0.06] reveal reveal-delay-${i + 2}`}
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <span
                      className={`text-[0.6rem] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-lg ${colors.badge}`}
                      style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                    >
                      {item.cat}
                    </span>
                    <span
                      className="text-xs text-text-tertiary"
                      style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                    >
                      {item.date}
                    </span>
                  </div>
                  <h4
                    className="text-[0.92rem] font-semibold text-navy leading-snug"
                    style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
                  >
                    <Link
                      href="#"
                      className="hover:text-gold transition-colors duration-300"
                    >
                      {item.title}
                    </Link>
                  </h4>
                </article>
              );
            })}
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
