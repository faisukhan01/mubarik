import Link from 'next/link';
import { RevealSection } from '@/hooks/use-reveal';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <RevealSection className="container-site">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 reveal">
            <div className="gold-line mb-5" />
            <h2 className="editorial-heading text-3xl sm:text-4xl lg:text-[2.75rem]">
              An Institution
              <br />
              <span className="text-gold">Committed</span> to
              <br />
              Education
            </h2>
          </div>
          <div className="lg:col-span-7 reveal reveal-delay-2">
            <p className="body-text mb-5">
              Mubarik Science Academy, along with its school division Mubarik Educare School, operates as a single educational system committed to developing students who think critically, learn thoroughly, and grow with purpose.
            </p>
            <p className="body-text mb-8">
              Our programmes are structured to build a strong academic foundation from the early years through to secondary level, with particular emphasis on science education, disciplined study habits, and character development.
            </p>
            <Link href="#" className="link-arrow">
              Discover Our Story
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}