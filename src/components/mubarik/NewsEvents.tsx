import { RevealSection } from '@/hooks/use-reveal';
import Link from 'next/link';

const featured = {
  cat: 'Admissions',
  title: 'Admissions Open for the Academic Year 2025–26',
  date: '15 August 2025',
  summary:
    'Applications are now being accepted for Early Years through Secondary levels at both Mubarik Science Academy and Mubarik Educare School.',
};

const items = [
  { cat: 'Event', title: 'Annual Science Exhibition 2025', date: '20 July 2025', color: 'bg-gold/10 text-gold' },
  { cat: 'Academic', title: 'Mid-Term Examination Schedule Released', date: '5 July 2025', color: 'bg-navy/10 text-navy' },
  { cat: 'Sports', title: 'Inter-Class Cricket Tournament Results', date: '28 June 2025', color: 'bg-brand-green/10 text-brand-green' },
];

export default function NewsEvents() {
  return (
    <section id="news" className="section-padding bg-warm-surface">
      <RevealSection className="container-site">
        <div className="flex items-end justify-between mb-12 lg:mb-14">
          <div>
            <span className="section-label mb-4 block reveal">Updates</span>
            <h2 className="section-heading text-[2rem] sm:text-[2.5rem] reveal reveal-delay-1">
              Latest <span className="text-gold">News</span>
            </h2>
          </div>
          <Link href="#" className="link-arrow hidden sm:inline-flex reveal reveal-delay-2">
            All News
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-5">
          {/* Featured article - large card */}
          <article className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-warm-border card-hover reveal reveal-delay-1">
            <div className="p-7 lg:p-9">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[0.6rem] font-bold tracking-[0.12em] uppercase text-gold bg-gold/10 px-3 py-1.5 rounded-lg">
                  {featured.cat}
                </span>
                <span className="text-xs text-text-tertiary">{featured.date}</span>
              </div>
              <h3
                className="text-xl lg:text-[1.6rem] text-navy mb-3 leading-snug"
                style={{ fontFamily: 'var(--font-dm-serif), Georgia, serif' }}
              >
                {featured.title}
              </h3>
              <p className="body-text text-[0.85rem] mb-6">{featured.summary}</p>
              <Link
                href="#"
                className="group/link inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors duration-300"
              >
                Read More
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </article>

          {/* Side articles */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {items.map((item, i) => (
              <article
                key={item.title}
                className={`bg-white rounded-2xl p-6 border border-warm-border card-hover reveal reveal-delay-${i + 2}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-[0.6rem] font-bold tracking-[0.12em] uppercase ${item.color} px-2.5 py-1 rounded-lg`}>
                    {item.cat}
                  </span>
                  <span className="text-xs text-text-tertiary">{item.date}</span>
                </div>
                <h4 className="text-[0.92rem] font-semibold text-navy leading-snug">
                  <Link href="#" className="hover:text-gold transition-colors duration-300">
                    {item.title}
                  </Link>
                </h4>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>
  );
}