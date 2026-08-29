import Image from 'next/image';

export default function TwoInstitutions() {
  return (
    <section className="section-padding bg-warm-surface">
      <div className="container-site">
        <div className="text-center mb-14">
          <span className="section-label mb-4 block">Our Educational Divisions</span>
          <h2 className="editorial-heading text-3xl sm:text-4xl">
            One System, Two Pathways
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Science Academy */}
          <div className="bg-white p-8 sm:p-10 md:p-12 border border-warm-border md:border-r-0">
            <span className="section-label mb-4 block text-navy">Division I</span>
            <h3 className="font-serif text-2xl sm:text-[1.75rem] text-navy mb-4 leading-tight">
              Mubarik Science Academy
            </h3>
            <p className="body-text mb-6">
              Focused on academic rigour and science education, the Academy prepares students for higher-level studies. The curriculum emphasises analytical thinking, scientific methodology, and examination preparation, supported by well-equipped laboratories and a structured academic programme.
            </p>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              <li className="flex items-start gap-2.5">
                <span className="w-1 h-1 bg-cyan rounded-full mt-2 flex-shrink-0" />
                Science-focused curriculum and laboratory work
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1 h-1 bg-cyan rounded-full mt-2 flex-shrink-0" />
                Structured examination preparation
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1 h-1 bg-cyan rounded-full mt-2 flex-shrink-0" />
                Academic development and analytical thinking
              </li>
            </ul>
          </div>

          {/* Educare School */}
          <div className="bg-white p-8 sm:p-10 md:p-12 border border-warm-border">
            <span className="section-label mb-4 block text-brand-green">Division II</span>
            <h3 className="font-serif text-2xl sm:text-[1.75rem] text-navy mb-4 leading-tight">
              Mubarik Educare School
            </h3>
            <p className="body-text mb-6">
              Providing foundational education from early years through primary and middle levels, Educare School focuses on building strong literacy, numeracy, and social skills. The environment is designed to nurture curiosity, confidence, and a love of learning in younger students.
            </p>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              <li className="flex items-start gap-2.5">
                <span className="w-1 h-1 bg-brand-green rounded-full mt-2 flex-shrink-0" />
                Early years, primary and middle school education
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1 h-1 bg-brand-green rounded-full mt-2 flex-shrink-0" />
                Character building and holistic development
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1 h-1 bg-brand-green rounded-full mt-2 flex-shrink-0" />
                Strong foundation for continued learning
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
