import Image from 'next/image';
import Link from 'next/link';
import { RevealSection } from '@/hooks/use-reveal';

export default function AdmissionCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Building background */}
      <Image
        src="/images/mubarik-building.png"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Reduced overlay — building much more visible */}
      <div className="absolute inset-0 bg-navy-dark/60" />

      {/* Subtle animated gradient overlay for visual interest */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(27,42,90,0.3) 0%, rgba(0,155,58,0.08) 50%, rgba(196,160,82,0.1) 100%)',
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none animate-pulse"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(196,160,82,0.08) 0%, transparent 60%)',
          animationDuration: '6s',
          animationTimingFunction: 'ease-in-out',
        }}
      />

      {/* Glass-morphism card */}
      <RevealSection className="container-site relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 lg:p-14 border border-white/15 text-center">
            <div className="gold-line mx-auto mb-6" />
            <h2
              className="text-white text-[1.75rem] sm:text-2xl lg:text-[1.85rem] mb-5 max-w-lg mx-auto leading-snug"
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
              }}
            >
              Begin Your Child&apos;s Journey at{' '}
              <span className="text-gold-light">Mubarik</span>
            </h2>
            <p
              className="text-white/70 text-sm sm:text-base mb-10 max-w-md mx-auto leading-relaxed"
              style={{
                fontFamily: 'var(--font-jakarta), system-ui, sans-serif',
              }}
            >
              Admissions are now open. Contact us to learn about our programmes
              and enrollment process for the upcoming academic year.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#"
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-gold text-white text-sm font-bold tracking-wide rounded-xl hover:bg-gold-light transition-all duration-300 shadow-[0_4px_24px_rgba(46,139,87,0.35)]"
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
                className="inline-flex items-center px-8 py-3.5 border border-white/30 text-white text-sm font-medium rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
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
