import { RevealSection } from '@/hooks/use-reveal';

const strengths = [
  { num: '01', title: 'Academic Excellence', desc: 'A structured, rigorous curriculum delivered by experienced teachers who hold students to clear standards of performance and conduct.' },
  { num: '02', title: 'Scientific Thinking', desc: 'Science education is central to our programme. Students develop hands-on skills through laboratory work, experiments, and project-based learning.' },
  { num: '03', title: 'Character Building', desc: 'Discipline, respect, and responsibility are integral to daily school life. We expect students to conduct themselves with integrity and purpose.' },
  { num: '04', title: 'Individual Attention', desc: 'With manageable class sizes and teachers who know their students, we ensure that each learner receives the support and guidance they need.' },
];

export default function WhyMubarik() {
  return (
    <section className="section-padding bg-navy-dark relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize:'40px 40px'}} />
      <RevealSection className="container-site relative z-10">
        <div className="mb-16 reveal">
          <span className="section-label mb-4 block">Why Mubarik</span>
          <h2 className="editorial-heading text-3xl sm:text-4xl text-white">
            What <span className="text-gold">Distinguishes</span> Us
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {strengths.map((item, i) => (
            <div
              key={item.num}
              className={`p-8 lg:p-10 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] hover:border-gold/30 transition-all duration-500 reveal reveal-delay-${i+1}`}
            >
              <span className="block text-5xl font-bold text-gold/25 mb-4 leading-none" style={{fontFamily:'var(--font-playfair), Georgia, serif'}}>
                {item.num}
              </span>
              <h3 className="text-lg font-semibold text-white mb-3" style={{fontFamily:'var(--font-playfair), Georgia, serif'}}>{item.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}