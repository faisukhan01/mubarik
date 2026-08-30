'use client';

import Link from 'next/link';
import { RevealSection } from '@/hooks/use-reveal';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const steps = [
  { num: '01', title: 'Explore', desc: 'Learn about our programmes and find the right fit for your child.' },
  { num: '02', title: 'Choose', desc: 'Select the appropriate division and level for enrolment.' },
  { num: '03', title: 'Apply', desc: 'Complete the admission form and submit required documents.' },
  { num: '04', title: 'Assessment', desc: 'Complete an age-appropriate assessment to evaluate readiness.' },
  { num: '05', title: 'Enroll', desc: 'Complete enrollment and your child joins the Mubarik family.' },
];

export default function Admissions() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="admissions" className="section-padding bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-navy/[0.015] blur-3xl pointer-events-none" />

      <RevealSection className="container-site relative z-10">
        {/* Section header */}
        <div className="text-center mb-14 lg:mb-20">
          <span className="section-label mb-3 block reveal">Admissions</span>
          <h2 className="section-heading text-[2rem] sm:text-[2.5rem] reveal reveal-delay-1">
            The Admission <span className="text-gold">Journey</span>
          </h2>
          <p
            className="body-text mt-4 max-w-md mx-auto reveal reveal-delay-2"
          >
            A straightforward and transparent process designed for parents.
          </p>
        </div>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden lg:block reveal reveal-delay-2">
          <div className="relative flex items-start justify-between">
            {/* Connecting line */}
            <div className="absolute top-[28px] left-[calc(10%+14px)] right-[calc(10%+14px)] h-[2px] bg-warm-border" />

            {steps.map((step, i) => {
              const isActive = hovered === i;
              return (
                <div
                  key={step.num}
                  className="relative flex-1 flex flex-col items-center"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Step circle */}
                  <div
                    className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-500 cursor-default ${
                      isActive
                        ? 'bg-gold border-gold text-white scale-110 shadow-lg shadow-gold/30'
                        : 'bg-white border-navy/20 text-navy hover:border-gold hover:text-gold'
                    }`}
                    style={{
                      fontFamily: 'var(--font-jakarta), system-ui, sans-serif',
                    }}
                  >
                    <span className="text-sm font-bold">{step.num}</span>
                  </div>

                  {/* Content below circle */}
                  <div className="mt-5 text-center px-2 max-w-[160px]">
                    <h3
                      className={`text-navy text-base font-semibold mb-1.5 transition-colors duration-300 ${
                        isActive ? 'text-gold' : ''
                      }`}
                      style={{
                        fontFamily: 'var(--font-playfair), Georgia, serif',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-xs leading-relaxed transition-all duration-500 ${
                        isActive
                          ? 'text-text-secondary opacity-100 max-h-20'
                          : 'text-text-tertiary opacity-70 max-h-0 overflow-hidden'
                      }`}
                      style={{
                        fontFamily: 'var(--font-jakarta), system-ui, sans-serif',
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet: Vertical timeline */}
        <div className="lg:hidden space-y-0 reveal reveal-delay-2">
          {steps.map((step, i) => {
            const isActive = hovered === i;
            const isLast = i === steps.length - 1;
            return (
              <div
                key={step.num}
                className="relative flex gap-5 pb-8"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Vertical line + circle column */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                      isActive
                        ? 'bg-gold border-gold text-white scale-110 shadow-lg shadow-gold/30'
                        : 'bg-white border-navy/20 text-navy'
                    }`}
                    style={{
                      fontFamily: 'var(--font-jakarta), system-ui, sans-serif',
                    }}
                  >
                    <span className="text-xs font-bold">{step.num}</span>
                  </div>
                  {!isLast && (
                    <div className="w-[2px] flex-1 bg-warm-border mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pt-1.5 pb-4">
                  <h3
                    className={`text-navy text-base font-semibold mb-1 transition-colors duration-300 ${
                      isActive ? 'text-gold' : ''
                    }`}
                    style={{
                      fontFamily: 'var(--font-playfair), Georgia, serif',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-text-tertiary text-sm leading-relaxed"
                    style={{
                      fontFamily: 'var(--font-jakarta), system-ui, sans-serif',
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-14 lg:mt-20 text-center reveal reveal-delay-3">
          <Link
            href="#"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-navy to-navy-light text-white text-sm font-semibold tracking-wide rounded-xl hover:shadow-xl hover:shadow-navy/25 transition-all duration-400"
            style={{
              fontFamily: 'var(--font-jakarta), system-ui, sans-serif',
            }}
          >
            Begin Your Admission Journey
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </RevealSection>
    </section>
  );
}
