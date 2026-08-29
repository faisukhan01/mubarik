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
    <section id="admissions" className="section-padding bg-white">
      <div className="container-site">
        <div className="mb-14">
          <span className="section-label mb-4 block">Admissions</span>
          <h2 className="editorial-heading text-3xl sm:text-4xl">
            The Admission Journey
          </h2>
          <p className="body-text mt-4 max-w-xl">
            We aim to make the admission process straightforward and transparent for parents. Here is what to expect.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Horizontal line - desktop */}
          <div className="hidden md:block absolute top-6 left-[calc(10%)] right-[calc(10%)] h-px bg-warm-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step) => (
              <div key={step.num} className="relative">
                <div className="relative z-10 w-12 h-12 flex items-center justify-center border-2 border-navy bg-white text-navy font-serif text-lg mb-4">
                  {step.num}
                </div>
                <h3 className="font-semibold text-navy text-sm mb-1.5">{step.title}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">
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
            className="inline-flex items-center px-8 py-3.5 bg-navy text-white text-sm font-semibold tracking-wide hover:bg-navy-light transition-colors"
          >
            Begin Your Admission Journey
            <svg className="ml-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}