import { RevealSection } from '@/hooks/use-reveal';

const programmes = [
  { num: '01', level: 'Early Years', desc: 'A nurturing introduction to learning that develops social skills, basic numeracy, and early literacy in a supportive environment.' },
  { num: '02', level: 'Primary', desc: 'Structured instruction in core subjects — English, Mathematics, Science, and Urdu — building strong academic habits.' },
  { num: '03', level: 'Middle School', desc: 'Deeper engagement with subjects, introduction to scientific methodology, and development of critical thinking.' },
  { num: '04', level: 'Secondary', desc: 'Rigorous examination preparation with a science-oriented curriculum and practical laboratory work.' },
  { num: '05', level: 'Science Programme', desc: 'Specialised science education with hands-on experiments, project-based learning, and preparation for higher studies.' },
];

export default function Academics() {
  return (
    <section id="academics" className="section-padding bg-white">
      <RevealSection className="container-site">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-4 reveal">
            <div className="gold-line mb-5" />
            <h2 className="editorial-heading text-3xl sm:text-4xl mb-5">
              Learning Designed for <span className="text-gold">Depth</span>
            </h2>
            <p className="body-text">
              Our curriculum develops curiosity, confidence, and capability at every stage of a student&apos;s education.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {programmes.map((p, i) => (
                <div
                  key={p.level}
                  className={`flex gap-6 py-5 border-b border-warm-border reveal reveal-delay-${Math.min(i + 1, 4)} ${i === 0 ? 'pt-0' : ''}`}
                >
                  <span
                    className="text-2xl font-bold text-warm-border flex-shrink-0 w-10"
                    style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  >
                    {p.num}
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy text-sm mb-1">{p.level}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}