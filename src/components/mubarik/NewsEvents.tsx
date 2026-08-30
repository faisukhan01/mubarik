'use client';

import { RevealSection } from '@/hooks/use-reveal';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

const newsItems = [
  {
    cat: 'Admissions',
    catColor: 'bg-gold/15 text-gold-dark',
    title: 'Admissions Open for the Academic Year 2025–26',
    date: '15 August 2025',
    summary:
      'Applications are now being accepted for Early Years through Secondary levels at both Mubarik Science Academy and Mubarik Educare School.',
    featured: true,
  },
  {
    cat: 'Event',
    catColor: 'bg-navy/10 text-navy',
    title: 'Annual Science Exhibition 2025',
    date: '20 July 2025',
    summary: 'Students showcase innovative science projects and experiments at our annual exhibition.',
    featured: false,
  },
  {
    cat: 'Academic',
    catColor: 'bg-brand-green/10 text-brand-green',
    title: 'Mid-Term Examination Schedule Released',
    date: '5 July 2025',
    summary: 'The mid-term examination schedule for all classes has been published.',
    featured: false,
  },
  {
    cat: 'Sports',
    catColor: 'bg-gold/15 text-gold-dark',
    title: 'Inter-Class Cricket Tournament Results',
    date: '28 June 2025',
    summary: 'Results and highlights from the exciting inter-class cricket tournament.',
    featured: false,
  },
];

export default function NewsEvents() {
  return (
    <section id="news" className="section-padding bg-white">
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

        {/* Featured news card */}
        <article className="group reveal reveal-delay-2 mb-6">
          <div className="relative bg-gradient-to-br from-navy to-navy-dark rounded-2xl p-7 sm:p-9 lg:p-11 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy/20">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold/[0.08] blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none transition-all duration-700 group-hover:bg-gold/[0.14] group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/[0.03] blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span
                  className="text-[0.6rem] font-bold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-lg bg-white/15 text-white/90 backdrop-blur-sm"
                  style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                >
                  {newsItems[0].cat}
                </span>
                <span
                  className="flex items-center gap-1.5 text-xs text-white/50"
                  style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                >
                  <Calendar size={12} />
                  {newsItems[0].date}
                </span>
              </div>

              <h3
                className="text-white text-xl sm:text-2xl lg:text-[1.7rem] font-bold mb-3 leading-snug max-w-xl"
                style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
              >
                {newsItems[0].title}
              </h3>

              <p
                className="text-white/55 text-sm leading-relaxed max-w-lg mb-7"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                {newsItems[0].summary}
              </p>

              <Link
                href="#"
                className="group/link inline-flex items-center gap-2 text-sm font-semibold text-gold-light hover:text-gold transition-colors duration-300"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                Read More
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover/link:translate-x-1.5"
                />
              </Link>
            </div>
          </div>
        </article>

        {/* Smaller news cards in a row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {newsItems.slice(1).map((item, i) => (
            <article
              key={item.title}
              className={`group bg-warm-surface/70 rounded-xl p-6 border border-warm-border/40 transition-all duration-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/[0.06] hover:border-warm-border reveal reveal-delay-${i + 3}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`text-[0.58rem] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-md ${item.catColor}`}
                  style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                >
                  {item.cat}
                </span>
                <span
                  className="flex items-center gap-1 text-[0.7rem] text-text-tertiary"
                  style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                >
                  <Calendar size={11} />
                  {item.date}
                </span>
              </div>
              <h4
                className="text-[0.95rem] font-semibold text-navy leading-snug mb-2.5"
                style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
              >
                <Link
                  href="#"
                  className="hover:text-gold-dark transition-colors duration-300"
                >
                  {item.title}
                </Link>
              </h4>
              <p
                className="text-text-secondary text-[0.8rem] leading-relaxed line-clamp-2"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                {item.summary}
              </p>
            </article>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
