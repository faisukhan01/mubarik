import Image from 'next/image';
import { RevealSection } from '@/hooks/use-reveal';

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding bg-navy-dark relative overflow-hidden">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <RevealSection className="container-site relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Portrait */}
          <div className="lg:col-span-4 reveal">
            <div className="relative">
              <div className="relative w-56 h-72 sm:w-64 sm:h-80 lg:w-full lg:aspect-[3/4] max-w-[280px] mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                <Image
                  src="/images/principal.jpg"
                  alt="Principal, Mubarik Science Academy"
                  fill
                  className="object-cover object-top"
                  sizes="280px"
                />
              </div>
              {/* Gold accent line below portrait */}
              <div className="absolute -bottom-3 left-8 right-8 h-1 bg-gold/50 rounded-full" />
            </div>
          </div>

          {/* Right: Quote */}
          <div className="lg:col-span-8 reveal reveal-delay-2">
            <span className="section-label mb-6 block">Leadership</span>
            <div className="relative pl-6 border-l-2 border-gold/60">
              {/* Large quotation mark */}
              <span
                className="absolute -top-2 -left-1 text-[4rem] leading-none text-gold/20 pointer-events-none select-none"
                style={{
                  fontFamily: 'var(--font-dm-serif), Georgia, serif',
                }}
              >
                &ldquo;
              </span>

              <p className="text-white/80 text-[1.1rem] sm:text-lg lg:text-[1.2rem] leading-relaxed mb-5" style={{ fontFamily: 'var(--font-dm-serif), Georgia, serif' }}>
                At Mubarik Science Academy, we believe that education is the
                most meaningful investment a family can make. Our
                responsibility is to ensure that every student receives a
                thorough, disciplined, and purposeful education.
              </p>
              <p className="text-white/55 text-[0.9rem] sm:text-base leading-relaxed">
                We focus on what matters: qualified teachers, a structured
                curriculum, a safe learning environment, and clear
                expectations. This is the foundation on which meaningful
                academic achievement is built.
              </p>
            </div>
            <div className="mt-8 pl-6">
              <p className="text-gold text-sm font-semibold">
                Principal
              </p>
              <p className="text-white/30 text-xs mt-0.5">
                Mubarik Science Academy
              </p>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
