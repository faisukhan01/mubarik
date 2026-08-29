import Image from 'next/image';
import Link from 'next/link';

export default function AdmissionCTA() {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/campus-building.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      <div className="container-site relative z-10 py-20 lg:py-24 text-center">
        <h2 className="editorial-heading text-2xl sm:text-3xl lg:text-4xl text-white mb-4 max-w-2xl mx-auto">
          Begin Your Child&apos;s Journey at Mubarik
        </h2>
        <p className="text-white/50 text-base mb-8 max-w-lg mx-auto">
          Admissions are now open for the upcoming academic year. Contact us to learn more about our programmes and the enrollment process.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="#"
            className="inline-flex items-center px-7 py-3.5 bg-white text-navy text-sm font-semibold hover:bg-warm-surface transition-colors rounded-lg"
          >
            Apply Now
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center px-7 py-3.5 border border-white/25 text-white text-sm font-medium hover:bg-white/10 transition-colors rounded-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}