import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-0 items-center" style={{ minHeight: '60vh' }}>
          {/* Left Content */}
          <div className="py-14 lg:py-20 pr-0 lg:pr-10 relative z-10">
            <span className="section-label text-cyan mb-5 block">Mubarik Science Academy</span>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl text-white leading-[1.12] mb-6">
              Building Minds.<br />
              Shaping Futures.
            </h1>
            <p className="text-white/60 text-base lg:text-[1.0625rem] leading-relaxed max-w-md mb-10">
              A committed educational institution dedicated to academic excellence, scientific enquiry, and the development of disciplined, capable young individuals.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#about"
                className="inline-flex items-center px-6 py-3 bg-white text-navy text-sm font-semibold hover:bg-warm-surface transition-colors rounded-lg"
              >
                Explore Our Academy
              </Link>
              <Link
                href="#admissions"
                className="inline-flex items-center px-6 py-3 border border-white/25 text-white text-sm font-medium hover:bg-white/10 transition-colors rounded-lg"
              >
                Admissions
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="relative h-[50vh] xl:h-[55vh] max-h-[550px] rounded-2xl overflow-hidden">
              <Image
                src="/images/hero-lab.jpg"
                alt="Students conducting experiments in the science laboratory"
                fill
                className="object-cover"
                priority
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}