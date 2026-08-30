import Image from 'next/image';
import Link from 'next/link';
import { RevealSection } from '@/hooks/use-reveal';

export default function AdmissionCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <Image
        src="/images/mubarik-building.png"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy-dark/85" />
      <RevealSection className="container-site relative z-10 text-center">
        <div className="gold-line mx-auto mb-6" />
        <h2 className="editorial-heading text-2xl sm:text-3xl lg:text-4xl text-white mb-4 max-w-2xl mx-auto">
          Begin Your Child&apos;s Journey at <span className="text-gold-light">Mubarik</span>
        </h2>
        <p className="text-white/45 text-base mb-10 max-w-md mx-auto">
          Admissions are now open. Contact us to learn about our programmes and enrollment.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="#"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy-dark text-sm font-bold tracking-wide rounded-lg hover:bg-gold-light transition-all duration-300"
          >
            Apply Now
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center px-8 py-3.5 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </RevealSection>
    </section>
  );
}