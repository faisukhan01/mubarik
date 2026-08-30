'use client';

import { RevealSection } from '@/hooks/use-reveal';
import Link from 'next/link';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

const newsItems = [
  {
    cat: 'Admissions',
    catColor: 'bg-gold/15 text-gold-dark',
    title: 'Admissions Open for the Academic Year 2025–26',
    date: '15 August 2025',
    summary:
      'Applications are now being accepted for Early Years through Secondary levels at both Mubarik Science Academy and Mubarik Educare School.',
  },
  {
    cat: 'Event',
    catColor: 'bg-navy/10 text-navy',
    title: 'Annual Science Exhibition 2025',
    date: '20 July 2025',
    summary: 'Students showcase innovative science projects and experiments at our annual exhibition.',
  },
  {
    cat: 'Academic',
    catColor: 'bg-brand-green/10 text-brand-green',
    title: 'Mid-Term Examination Schedule Released',
    date: '5 July 2025',
    summary: 'The mid-term examination schedule for all classes has been published.',
  },
  {
    cat: 'Sports',
    catColor: 'bg-gold/15 text-gold-dark',
    title: 'Inter-Class Cricket Tournament Results',
    date: '28 June 2025',
    summary: 'Results and highlights from the exciting inter-class cricket tournament.',
  },
];

export default function NewsEvents() {
  return (
    <section id="news" className="section-padding bg-warm-surface overflow-hidden">
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
            View All
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* News grid: featured left (desktop) or top (mobile), 3 smaller right/bottom */}
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
          {/* FEATURED — large card */}
          <article className="group reveal reveal-delay-2">
            <div className="h-full bg-white rounded-2xl border border-warm-border/60 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/[0.08]">
              {/* Colored top bar */}
              <div className="h-1.5 bg-gradient-to-r from-navy via-navy-light to-gold" />

              <div className="p-7 sm:p-9 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold tracking-[0.14em] uppercase px-3 py-1.5 rounded-lg bg-gold/15 text-gold-dark"
                    style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                  >
                    <Sparkles size={10} />
                    {newsItems[0].cat}
                  </span>
                  <span
                    className="flex items-center gap-1.5 text-xs text-text-tertiary"
                    style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                  >
                    <Calendar size={12} />
                    {newsItems[0].date}
                  </span>
                </div>

                <h3
                  className="text-navy text-xl sm:text-[1.45rem] font-bold mb-3 leading-snug"
                  style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
                >
                  {newsItems[0].title}
                </h3>

                <p
                  className="text-text-secondary text-[0.875rem] leading-relaxed mb-7 flex-1"
                  style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                >
                  {newsItems[0].summary}
                </p>

                <Link
                  href="#"
                  className="group/link inline-flex items-center gap-2.5 text-sm font-semibold text-navy hover:text-gold-dark transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                >
                  Read Full Story
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover/link:translate-x-1.5"
                  />
                </Link>
              </div>
            </div>
          </article>

          {/* 3 smaller cards stacked */}
          <div className="flex flex-col gap-4">
            {newsItems.slice(1).map((item, i) => (
              <article
                key={item.title}
                className={`group bg-white rounded-xl border border-warm-border/50 overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/[0.06] reveal reveal-delay-${i + 3}`}
              >
                <div className="p-5 sm:p-6 flex gap-4 items-start">
                  {/* Date block */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-warm-surface flex flex-col items-center justify-center">
                    <span
                      className="text-[0.6rem] font-bold tracking-wider uppercase text-text-tertiary leading-none"
                      style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                    >
                      {item.date.split(' ')[0]}
                    </span>
                    <span
                      className="text-lg font-bold text-navy leading-tight mt-0.5"
                      style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
                    >
                      {item.date.split(' ')[1]}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <span
                      className={`inline-block text-[0.55rem] font-bold tracking-[0.14em] uppercase px-2 py-0.5 rounded-md mb-2 ${item.catColor}`}
                      style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                    >
                      {item.cat}
                    </span>
                    <h4
                      className="text-[0.95rem] font-semibold text-navy leading-snug"
                      style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
                    >
                      <Link
                        href="#"
                        className="hover:text-gold-dark transition-colors duration-300"
                      >
                        {item.title}
                      </Link>
                    </h4>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
