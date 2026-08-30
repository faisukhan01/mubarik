'use client';

import Image from 'next/image';
import Link from 'next/link';
import { RevealSection } from '@/hooks/use-reveal';

export default function AdmissionCTA() {
  return (
    <section id="admissions" className="relative py-24 lg:py-32 overflow-hidden">
      <Image
        src="/images/mubarik-building.png"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay — darker for text readability */}
      <div className="absolute inset-0 bg-navy-dark/75" />

      <RevealSection className="relative z-10 flex items-center min-h-[280px]">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-xl">
            <div className="gold-line mb-8 reveal" />

            <h2
              className="text-white text-[1.6rem] sm:text-[2rem] lg:text-[2.5rem] mb-5 leading-tight reveal reveal-delay-1"
              style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
            >
              Begin Your Child&apos;s Journey at{' '}
              <span className="text-gold-light">Mubarik</span>
            </h2>

            <p
              className="text-white/75 text-sm sm:text-base lg:text-[1.05rem] mb-10 max-w-lg leading-relaxed reveal reveal-delay-2"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              Admissions are now open. Contact us to learn about our programmes
              and enrollment process for the upcoming academic year.
            </p>

            <div className="flex flex-wrap gap-4 reveal reveal-delay-3">
              <Link
                href="#"
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-gold text-white text-sm font-bold tracking-wide rounded-xl hover:bg-gold-light transition-all duration-300 shadow-[0_4px_24px_rgba(46,139,87,0.35)]"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                Apply Now
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center px-8 py-3.5 border border-white/40 text-white text-sm font-medium rounded-xl hover:bg-white/10 transition-all duration-300"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
