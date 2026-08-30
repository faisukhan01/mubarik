import Image from 'next/image';
import { RevealSection } from '@/hooks/use-reveal';

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding bg-white">
      <RevealSection className="container-site">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 reveal">
            <div className="gold-line mb-5" />
            <h2 className="editorial-heading text-3xl sm:text-4xl mb-3">
              From the <span className="text-gold">Leadership</span>
            </h2>
          </div>
          <div className="lg:col-span-8 reveal reveal-delay-2">
            <div className="bg-warm-surface rounded-xl p-8 lg:p-10 flex flex-col sm:flex-row gap-8 items-start">
              <div className="relative w-32 h-40 sm:w-36 sm:h-44 flex-shrink-0 rounded-lg overflow-hidden">
                <Image src="/images/principal.jpg" alt="Principal, Mubarik Science Academy" fill className="object-cover object-top" sizes="144px" />
              </div>
              <div className="relative">
                <span className="text-6xl text-gold/15 absolute -top-4 -left-2 leading-none" style={{fontFamily:'var(--font-playfair), Georgia, serif'}}>&ldquo;</span>
                <div className="border-l-2 border-gold pl-5">
                  <p className="body-text mb-4">
                    At Mubarik Science Academy, we believe that education is the most meaningful investment a family can make. Our responsibility is to ensure that every student receives a thorough, disciplined, and purposeful education.
                  </p>
                  <p className="body-text">
                    We focus on what matters: qualified teachers, a structured curriculum, a safe learning environment, and clear expectations. This is the foundation on which meaningful academic achievement is built.
                  </p>
                </div>
                <p className="mt-4 text-sm font-semibold text-navy">Principal — Mubarik Science Academy</p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}