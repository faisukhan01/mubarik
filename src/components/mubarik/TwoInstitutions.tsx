import { RevealSection } from '@/hooks/use-reveal';

export default function TwoInstitutions() {
  return (
    <section className="section-padding bg-warm-surface">
      <RevealSection className="container-site">
        <div className="text-center mb-16 reveal">
          <span className="section-label mb-4 block">Our Divisions</span>
          <h2 className="editorial-heading text-3xl sm:text-4xl">
            One System, <span className="text-gold">Two Pathways</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          <div className="bg-white p-8 lg:p-10 rounded-xl border border-warm-border hover:shadow-lg hover:-translate-y-1 transition-all duration-400 reveal reveal-delay-1">
            <span className="section-label mb-3 block text-navy">Division I</span>
            <h3 className="text-xl lg:text-2xl text-navy mb-4 leading-tight" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
              Mubarik Science Academy
            </h3>
            <p className="body-text mb-6">
              Focused on academic rigour and science education, the Academy prepares students for higher-level studies with an emphasis on analytical thinking and examination preparation.
            </p>
            <div className="space-y-3 text-sm text-text-secondary">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                Science-focused curriculum and laboratory work
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                Structured examination preparation
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                Academic development and analytical thinking
              </div>
            </div>
          </div>
          <div className="bg-white p-8 lg:p-10 rounded-xl border border-warm-border hover:shadow-lg hover:-translate-y-1 transition-all duration-400 reveal reveal-delay-2">
            <span className="section-label mb-3 block text-brand-green">Division II</span>
            <h3 className="text-xl lg:text-2xl text-navy mb-4 leading-tight" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
              Mubarik Educare School
            </h3>
            <p className="body-text mb-6">
              Providing foundational education from early years through primary and middle levels, Educare School focuses on building strong literacy, numeracy, and social skills.
            </p>
            <div className="space-y-3 text-sm text-text-secondary">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2 flex-shrink-0" />
                Early years, primary and middle school education
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2 flex-shrink-0" />
                Character building and holistic development
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2 flex-shrink-0" />
                Strong foundation for continued learning
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}