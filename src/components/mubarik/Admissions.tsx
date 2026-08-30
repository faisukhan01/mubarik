import Link from 'next/link';
import { RevealSection } from '@/hooks/use-reveal';

const steps = [
  { num: '01', title: 'Explore', desc: 'Learn about our programmes and find the right fit.' },
  { num: '02', title: 'Choose', desc: 'Select the appropriate division and level.' },
  { num: '03', title: 'Apply', desc: 'Complete the admission form and documents.' },
  { num: '04', title: 'Assessment', desc: 'Complete an age-appropriate assessment.' },
  { num: '05', title: 'Enroll', desc: 'Complete enrollment and join Mubarik.' },
];

export default function Admissions() {
  return (
    <section id="admissions" className="section-padding bg-white">
      <RevealSection className="container-site">
        <div className="text-center mb-16 reveal">
          <span className="section-label mb-4 block">Admissions</span>
          <h2 className="editorial-heading text-3xl sm:text-4xl">
            The Admission <span className="text-gold">Journey</span>
          </h2>
          <p className="body-text mt-4 max-w-lg mx-auto">
            A straightforward and transparent process designed for parents.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto reveal reveal-delay-1">
          <div className="hidden md:block absolute top-4 left-[10%] right-[10%] h-px bg-warm-border" />
          <div className="md:hidden absolute top-4 left-[13px] bottom-4 w-px bg-warm-border" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-y-8">
            {steps.map((step, i) => (
              <div key={step.num} className="relative md:text-center">
                <div className="relative z-10 w-7 h-7 flex items-center justify-center rounded-full bg-warm-surface border-2 border-navy text-navy text-xs font-bold mb-3 md:mx-auto">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-navy text-sm mb-1">{step.title}</h3>
                <p className="text-text-tertiary text-xs leading-relaxed ml-10 md:ml-0">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 text-center reveal reveal-delay-2">
          <Link
            href="#"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-navy text-white text-sm font-semibold tracking-wide rounded-lg hover:bg-navy-light transition-all duration-300"
          >
            Begin Your Admission Journey
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </RevealSection>
    </section>
  );
}