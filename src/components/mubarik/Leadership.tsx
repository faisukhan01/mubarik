import Image from 'next/image';
import { RevealSection } from '@/hooks/use-reveal';

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding bg-white relative overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/[0.03] blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-navy/[0.02] blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      {/* Faint circle pattern decorations */}
      <div
        className="absolute top-12 right-12 w-64 h-64 opacity-[0.035] pointer-events-none hidden lg:block"
        style={{
          borderRadius: '50%',
          border: '1px solid #C4A052',
        }}
      />
      <div
        className="absolute top-24 right-24 w-40 h-40 opacity-[0.025] pointer-events-none hidden lg:block"
        style={{
          borderRadius: '50%',
          border: '1px solid #C4A052',
        }}
      />

      <RevealSection className="container-site relative z-10">
        <span className="section-label mb-10 block">Leadership</span>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Portrait with gold accent frame */}
          <div className="lg:col-span-5 reveal">
            <div className="relative max-w-[320px] mx-auto lg:mx-0">
              {/* Portrait image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-black/[0.08]">
                <Image
                  src="/images/principal.jpg"
                  alt="Principal, Mubarik Science Academy"
                  width={320}
                  height={420}
                  className="w-full h-auto object-cover object-top"
                  sizes="(max-width: 1024px) 280px, 320px"
                />
                {/* Gold accent line on the left side of the portrait */}
                <div className="absolute top-6 left-0 bottom-6 w-1 bg-gradient-to-b from-gold via-gold-light to-gold rounded-r-full" />
              </div>
              {/* Gold corner accent - top right */}
              <div className="absolute -top-2 -right-2 w-12 h-12 border-t-2 border-r-2 border-gold/30 rounded-tr-2xl pointer-events-none" />
              {/* Gold corner accent - bottom left */}
              <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-2 border-l-2 border-gold/30 rounded-bl-2xl pointer-events-none" />
            </div>
          </div>

          {/* Right: Quote content */}
          <div className="lg:col-span-7 reveal reveal-delay-2">
            <div className="relative">
              {/* Large decorative opening quotation mark */}
              <span
                className="absolute -top-6 -left-2 text-[6rem] lg:text-[7rem] leading-none text-gold/[0.12] pointer-events-none select-none"
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                }}
              >
                &ldquo;
              </span>

              <div className="relative z-10">
                <p
                  className="text-text-primary text-lg lg:text-xl leading-relaxed mb-5"
                  style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                  }}
                >
                  At Mubarik Science Academy, we believe that education is the
                  most meaningful investment a family can make. Our
                  responsibility is to ensure that every student receives a
                  thorough, disciplined, and purposeful education.
                </p>
                <p
                  className="text-text-secondary text-[0.95rem] lg:text-base leading-relaxed mb-8"
                  style={{
                    fontFamily: 'var(--font-jakarta), system-ui, sans-serif',
                  }}
                >
                  We focus on what matters: qualified teachers, a structured
                  curriculum, a safe learning environment, and clear
                  expectations. This is the foundation on which meaningful
                  academic achievement is built.
                </p>

                {/* Principal name with gold underline */}
                <div className="inline-block">
                  <p
                    className="text-navy text-lg font-semibold"
                    style={{
                      fontFamily: 'var(--font-playfair), Georgia, serif',
                    }}
                  >
                    Principal
                  </p>
                  <div className="w-12 h-0.5 bg-gold rounded-full mt-1" />
                </div>
                <p
                  className="text-text-tertiary text-sm mt-2"
                  style={{
                    fontFamily: 'var(--font-jakarta), system-ui, sans-serif',
                  }}
                >
                  Mubarik Science Academy
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
