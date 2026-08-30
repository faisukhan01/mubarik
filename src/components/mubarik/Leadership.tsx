'use client';

import Image from 'next/image';
import { RevealSection } from '@/hooks/use-reveal';

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding bg-warm-surface relative overflow-hidden">
      {/* Subtle warm glow decorations */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-gold/[0.04] blur-3xl pointer-events-none" />

      <RevealSection className="container-site relative z-10">
        {/* Section label */}
        <span className="section-label mb-12 block text-center reveal">Leadership</span>

        <div className="max-w-3xl mx-auto text-center">
          {/* Large decorative opening quotation mark */}
          <span
            className="block text-[7rem] lg:text-[9rem] leading-[0.6] text-gold/20 mb-2 select-none reveal reveal-delay-1"
            style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
            aria-hidden="true"
          >
            &ldquo;
          </span>

          {/* Quote text */}
          <blockquote
            className="text-text-primary text-lg lg:text-xl leading-relaxed mb-8 reveal reveal-delay-2"
            style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
          >
            At Mubarik Science Academy, we believe that education is the most
            meaningful investment a family can make. Our responsibility is to
            ensure that every student receives a thorough, disciplined, and
            purposeful education. We focus on what matters: qualified teachers, a
            structured curriculum, a safe learning environment, and clear
            expectations. This is the foundation on which meaningful academic
            achievement is built.
          </blockquote>

          {/* Gold divider line */}
          <div className="w-16 h-[2px] bg-gold rounded-full mx-auto mb-6 reveal reveal-delay-3" />

          {/* Principal name */}
          <p
            className="text-navy text-lg font-bold mb-1 reveal reveal-delay-3"
            style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
          >
            Principal
          </p>
          <p
            className="text-gold text-xs font-bold tracking-[0.15em] uppercase mb-10 reveal reveal-delay-3"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            Mubarik Science Academy
          </p>

          {/* Portrait below the quote */}
          <div className="reveal reveal-delay-4">
            <div className="inline-block relative">
              <div className="w-48 h-60 rounded-2xl overflow-hidden ring-2 ring-gold/30 shadow-xl shadow-black/[0.08]">
                <Image
                  src="/images/principal.jpg"
                  alt="Principal, Mubarik Science Academy"
                  width={192}
                  height={240}
                  className="w-full h-full object-cover object-top"
                  sizes="192px"
                />
              </div>
              {/* Subtle gold accent at bottom of frame */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-gold/40 rounded-full" />
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
