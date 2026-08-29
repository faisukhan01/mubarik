import Link from 'next/link';

export default function AdmissionCTA() {
  return (
    <section className="bg-navy">
      <div className="container-site py-16 lg:py-20">
        <div className="max-w-2xl">
          <h2 className="editorial-heading text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
            Begin Your Child&apos;s Journey at Mubarik
          </h2>
          <p className="text-white/50 text-base mb-8 max-w-lg">
            Admissions are now open for the upcoming academic year. Contact us to learn more about our programmes and the enrollment process.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#"
              className="inline-flex items-center px-7 py-3.5 bg-white text-navy text-sm font-semibold hover:bg-warm-surface transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center px-7 py-3.5 border border-white/25 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}