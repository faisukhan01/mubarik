'use client';

import Link from 'next/link';
import { RevealSection } from '@/hooks/use-reveal';
import { Search, ListChecks, FileText, ClipboardCheck, CheckCircle2 } from 'lucide-react';

const steps = [
  { num: '01', title: 'Explore', desc: 'Learn about our programmes and find the right fit for your child.', icon: Search },
  { num: '02', title: 'Choose', desc: 'Select the appropriate division and level for enrolment.', icon: ListChecks },
  { num: '03', title: 'Apply', desc: 'Complete the admission form and submit required documents.', icon: FileText },
  { num: '04', title: 'Assessment', desc: 'Complete an age-appropriate assessment to evaluate readiness.', icon: ClipboardCheck },
  { num: '05', title: 'Enroll', desc: 'Complete enrollment and your child joins the Mubarik family.', icon: CheckCircle2 },
];

export default function Admissions() {
  return (
    <section id="admissions" className="section-padding bg-white">
      <RevealSection className="container-site">
        <div className="text-center mb-14 lg:mb-16">
          <span className="section-label mb-4 block reveal">Admissions</span>
          <h2 className="section-heading text-[2rem] sm:text-[2.5rem] reveal reveal-delay-1">
            The Admission <span className="text-gold">Journey</span>
          </h2>
          <p className="body-text mt-4 max-w-md mx-auto reveal reveal-delay-2">
            A straightforward and transparent process designed for parents.
          </p>
        </div>

        {/* Step cards - horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className={`relative reveal reveal-delay-${i + 1}`}
              >
                <div className="group relative bg-warm-surface hover:bg-white rounded-2xl p-6 lg:p-5 border border-transparent hover:border-warm-border hover:shadow-xl hover:shadow-navy/[0.06] transition-all duration-400 lg:border-0 lg:rounded-none lg:shadow-none lg:hover:bg-warm-surface lg:hover:shadow-none">
                  {/* Step number badge */}
                  <div className="w-10 h-10 rounded-xl bg-navy text-white flex items-center justify-center text-sm font-bold mb-4 group-hover:bg-gold group-hover:text-navy-dark transition-all duration-300">
                    {i + 1}
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-4 lg:hidden">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  <h3 className="font-semibold text-navy text-[0.95rem] mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-text-tertiary text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Connector arrow on desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 z-10">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-warm-border">
                      <path d="M2 6h8M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center reveal reveal-delay-3">
          <Link
            href="#"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-navy text-white text-sm font-semibold tracking-wide rounded-xl hover:bg-navy-light transition-all duration-300 shadow-lg shadow-navy/15"
          >
            Begin Your Admission Journey
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </RevealSection>
    </section>
  );
}