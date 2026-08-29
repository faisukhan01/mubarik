import Link from 'next/link';

const steps = [
  { num: '01', title: 'Explore', description: 'Learn about our programmes and determine the right fit for your child.' },
  { num: '02', title: 'Choose Programme', description: 'Select the appropriate division and level based on your child\'s age and academic stage.' },
  { num: '03', title: 'Submit Application', description: 'Complete the admission form and submit the required documents.' },
  { num: '04', title: 'Assessment', description: 'Applicants complete an age-appropriate assessment or interview.' },
  { num: '05', title: 'Enrollment', description: 'Upon acceptance, complete the enrollment process and join the Mubarik community.' },
];

export default function Admissions() {
  return (
    <section id="admissions" className="section-padding bg-warm-surface">
      <div className="container-site">
        <div className="text-center mb-14">
          <span className="section-label mb-4 block">Admissions</span>
          <h2 className="editorial-heading text-3xl sm:text-4xl">
            The Admission Journey
          </h2>
          <p className="body-text mt-4 max-w-xl mx-auto">
            We aim to make the admission process straightforward and transparent for parents. Here is what to expect.
          </p>
        </div>

        {/* Steps - Horizontal on desktop, vertical on mobile */}
        <div className="relative max-w-3xl mx-auto">
          {/* Horizontal line - desktop */}
          <div className="hidden md:block absolute top-5 left-[calc(10%+14px)] right-[calc(10%+14px)] h-px bg-warm-border" />

          {/* Vertical line - mobile */}
          <div className="md:hidden absolute top-5 left-[14px] bottom-5 w-px bg-warm-border" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            {steps.map((step, index) => (
              <div key={step.num} className="relative md:text-center">
                {/* Circle */}
                <div className="relative z-10 w-7 h-7 flex items-center justify-center border-2 border-navy bg-warm-surface text-navy text-xs font-semibold mb-3 md:mb-4 md:mx-auto">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-navy text-sm mb-1.5">{step.title}</h3>
                <p className="text-text-secondary text-xs leading-relaxed ml-10 md:ml-0">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="#"
            className="inline-flex items-center px-8 py-3.5 bg-navy text-white text-sm font-semibold tracking-wide hover:bg-navy-light transition-colors rounded-lg"
          >
            Begin Your Admission Journey
            <svg className="ml-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}