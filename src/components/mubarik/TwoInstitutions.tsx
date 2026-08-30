'use client';

import { RevealSection } from '@/hooks/use-reveal';
import { Microscope, BookOpen, GraduationCap, Building2, Heart, ArrowUpRight } from 'lucide-react';

const academyFeatures = [
  'Science-focused curriculum and laboratory work',
  'Structured examination preparation',
  'Academic development and analytical thinking',
];

const educareFeatures = [
  'Early years, primary and middle school education',
  'Character building and holistic development',
  'Strong foundation for continued learning',
];

export default function TwoInstitutions() {
  return (
    <section className="section-padding bg-warm-surface relative overflow-hidden">
      {/* Subtle diagonal pattern background */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #1B2A5A 0px, #1B2A5A 1px, transparent 1px, transparent 24px)',
        }}
      />

      <RevealSection className="container-site relative z-10">
        {/* Section header */}
        <div className="max-w-xl mb-14 lg:mb-16">
          <span className="section-label mb-4 block reveal">Our Divisions</span>
          <h2
            className="section-heading text-[2rem] sm:text-[2.5rem] reveal reveal-delay-1"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            One System,{' '}
            <span className="text-gold">Two Pathways</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {/* Academy Card */}
          <div className="reveal reveal-delay-2 group">
            <div
              className="relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(27,42,90,0.18)]"
            >
              {/* Gradient top border */}
              <div className="h-1 w-full bg-gradient-to-r from-navy via-navy-light to-gold" />

              {/* Subtle background gradient that shifts on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-warm-surface/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Watermark number */}
              <span
                className="absolute bottom-4 right-6 text-[9rem] leading-none text-navy/[0.03] pointer-events-none select-none"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                01
              </span>

              <div className="relative p-8 lg:p-12">
                {/* Decorative icon container */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center mb-6 shadow-lg shadow-navy/20 group-hover:shadow-navy/30 transition-shadow duration-300">
                  <Microscope size={24} strokeWidth={1.5} className="text-white" />
                </div>

                <span
                  className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-gold/70 mb-2 block"
                  style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif' }}
                >
                  Division I
                </span>
                <h3
                  className="text-[1.35rem] text-navy mb-3 leading-tight"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Mubarik Science Academy
                </h3>
                <p
                  className="body-text text-[0.85rem] mb-8"
                  style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif' }}
                >
                  Focused on academic rigour and science education, the Academy
                  prepares students for higher-level studies with an emphasis on
                  analytical thinking and examination preparation.
                </p>

                {/* Feature list with refined dots */}
                <ul className="space-y-3.5">
                  {academyFeatures.map((text) => (
                    <li key={text} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span
                        className="text-text-secondary text-[0.88rem] leading-relaxed"
                        style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif' }}
                      >
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Educare Card */}
          <div className="reveal reveal-delay-3 group">
            <div
              className="relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,155,58,0.15)]"
            >
              {/* Gradient top border */}
              <div className="h-1 w-full bg-gradient-to-r from-navy via-navy-light to-brand-green" />

              {/* Subtle background gradient that shifts on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-brand-green/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Watermark number */}
              <span
                className="absolute bottom-4 right-6 text-[9rem] leading-none text-navy/[0.03] pointer-events-none select-none"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                02
              </span>

              <div className="relative p-8 lg:p-12">
                {/* Decorative icon container */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy to-brand-green flex items-center justify-center mb-6 shadow-lg shadow-navy/20 group-hover:shadow-brand-green/20 transition-shadow duration-300">
                  <Heart size={24} strokeWidth={1.5} className="text-white" />
                </div>

                <span
                  className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-brand-green/70 mb-2 block"
                  style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif' }}
                >
                  Division II
                </span>
                <h3
                  className="text-[1.35rem] text-navy mb-3 leading-tight"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Mubarik Educare School
                </h3>
                <p
                  className="body-text text-[0.85rem] mb-8"
                  style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif' }}
                >
                  Providing foundational education from early years through
                  primary and middle levels, Educare School focuses on building
                  strong literacy, numeracy, and social skills.
                </p>

                {/* Feature list with refined dots */}
                <ul className="space-y-3.5">
                  {educareFeatures.map((text) => (
                    <li key={text} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0" />
                      <span
                        className="text-text-secondary text-[0.88rem] leading-relaxed"
                        style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif' }}
                      >
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
