'use client';

import { RevealSection } from '@/hooks/use-reveal';
import { 
  Microscope, BookOpen, GraduationCap, 
  Building2, Heart, ArrowUpRight 
} from 'lucide-react';

const academyFeatures = [
  { icon: Microscope, text: 'Science-focused curriculum and laboratory work' },
  { icon: GraduationCap, text: 'Structured examination preparation' },
  { icon: BookOpen, text: 'Academic development and analytical thinking' },
];

const educareFeatures = [
  { icon: Building2, text: 'Early years, primary and middle school education' },
  { icon: Heart, text: 'Character building and holistic development' },
  { icon: ArrowUpRight, text: 'Strong foundation for continued learning' },
];

function FeatureItem({ icon: Icon, text, accent }: { icon: React.ElementType; text: string; accent: string }) {
  return (
    <div className="flex items-start gap-3.5 group/item">
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
        accent === 'gold'
          ? 'bg-gold/10 text-gold group-hover/item:bg-gold group-hover/item:text-white'
          : 'bg-brand-green/10 text-brand-green group-hover/item:bg-brand-green group-hover/item:text-white'
      }`}>
        <Icon size={16} strokeWidth={1.8} />
      </div>
      <span className="text-text-secondary text-[0.88rem] leading-relaxed pt-1.5">{text}</span>
    </div>
  );
}

export default function TwoInstitutions() {
  return (
    <section className="section-padding bg-warm-surface">
      <RevealSection className="container-site">
        {/* Section header - off-center, editorial style */}
        <div className="max-w-xl mb-14 lg:mb-16">
          <span className="section-label mb-4 block reveal">Our Divisions</span>
          <h2 className="section-heading text-[2rem] sm:text-[2.5rem] reveal reveal-delay-1">
            One System,{' '}
            <span className="text-gold">Two Pathways</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {/* Academy Card */}
          <div className="relative bg-white rounded-2xl overflow-hidden card-hover reveal reveal-delay-1">
            <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
            <div className="p-8 lg:p-10">
              <span className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-gold/70 mb-2 block">
                Division I
              </span>
              <h3
                className="text-[1.35rem] text-navy mb-3 leading-tight"
                style={{ fontFamily: 'var(--font-dm-serif), Georgia, serif' }}
              >
                Mubarik Science Academy
              </h3>
              <p className="body-text text-[0.85rem] mb-7">
                Focused on academic rigour and science education, the Academy
                prepares students for higher-level studies with an emphasis on
                analytical thinking and examination preparation.
              </p>
              <div className="space-y-4">
                {academyFeatures.map((f) => (
                  <FeatureItem key={f.text} {...f} accent="gold" />
                ))}
              </div>
            </div>
          </div>

          {/* Educare Card */}
          <div className="relative bg-white rounded-2xl overflow-hidden card-hover reveal reveal-delay-2">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-green" />
            <div className="p-8 lg:p-10">
              <span className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-brand-green/70 mb-2 block">
                Division II
              </span>
              <h3
                className="text-[1.35rem] text-navy mb-3 leading-tight"
                style={{ fontFamily: 'var(--font-dm-serif), Georgia, serif' }}
              >
                Mubarik Educare School
              </h3>
              <p className="body-text text-[0.85rem] mb-7">
                Providing foundational education from early years through
                primary and middle levels, Educare School focuses on building
                strong literacy, numeracy, and social skills.
              </p>
              <div className="space-y-4">
                {educareFeatures.map((f) => (
                  <FeatureItem key={f.text} {...f} accent="green" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
