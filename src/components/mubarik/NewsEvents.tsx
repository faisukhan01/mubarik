import { RevealSection } from '@/hooks/use-reveal';
import Link from 'next/link';

const featured = {
  cat: 'Admissions',
  title: 'Admissions Open for the Academic Year 2025–26',
  date: '15 August 2025',
  summary: 'Applications are now being accepted for Early Years through Secondary levels at both Mubarik Science Academy and Mubarik Educare School.',
};

const items = [
  { cat: 'Event', title: 'Annual Science Exhibition 2025', date: '20 July 2025' },
  { cat: 'Academic', title: 'Mid-Term Examination Schedule Released', date: '5 July 2025' },
  { cat: 'Sports', title: 'Inter-Class Cricket Tournament Results', date: '28 June 2025' },
];

export default function NewsEvents() {
  return (
    <section id="news" className="section-padding bg-warm-surface">
      <RevealSection className="container-site">
        <div className="flex items-end justify-between mb-14 reveal">
          <div>
            <div className="gold-line mb-5" />
            <h2 className="editorial-heading text-3xl sm:text-4xl">Latest Updates</h2>
          </div>
          <Link href="#" className="link-arrow hidden sm:inline-flex">
            All News
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
        <div className="grid lg:grid-cols-12 gap-6">
          <article className="lg:col-span-7 bg-white rounded-xl p-7 lg:p-9 border border-warm-border hover:shadow-lg transition-shadow duration-400 reveal reveal-delay-1">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[0.625rem] font-bold tracking-[0.12em] uppercase text-gold bg-gold/10 px-2.5 py-1 rounded">{featured.cat}</span>
              <span className="text-xs text-text-tertiary">{featured.date}</span>
            </div>
            <h3 className="text-xl lg:text-2xl text-navy mb-3 leading-snug" style={{fontFamily:'var(--font-playfair), Georgia, serif'}}>{featured.title}</h3>
            <p className="body-text text-sm mb-6">{featured.summary}</p>
            <Link href="#" className="link-arrow text-gold">
              Read More
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </article>
          <div className="lg:col-span-5 flex flex-col gap-4">
            {items.map((item, i) => (
              <article key={item.title} className={`bg-white rounded-xl p-6 border border-warm-border hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 reveal reveal-delay-${i+2}`}>
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="text-[0.625rem] font-bold tracking-[0.12em] uppercase text-text-tertiary">{item.cat}</span>
                  <span className="text-xs text-text-tertiary">{item.date}</span>
                </div>
                <h4 className="text-sm font-semibold text-navy leading-snug">
                  <Link href="#" className="hover:text-gold transition-colors">{item.title}</Link>
                </h4>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>
  );
}