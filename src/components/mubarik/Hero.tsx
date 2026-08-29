'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="container-site">
        <div className="grid lg:grid-cols-12 gap-0 min-h-[85vh] lg:min-h-[82vh] items-center">
          {/* Left Content */}
          <div className="lg:col-span-5 xl:col-span-5 py-16 lg:py-24 pr-0 lg:pr-12 relative z-10">
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
                className="inline-flex items-center px-6 py-3 bg-white text-navy text-sm font-semibold hover:bg-warm-surface transition-colors"
              >
                Explore Our Academy
              </Link>
              <Link
                href="#admissions"
                className="inline-flex items-center px-6 py-3 border border-white/25 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Admissions
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-7 xl:col-span-7 relative">
            <div className="relative h-[50vh] sm:h-[60vh] lg:h-full lg:min-h-[82vh]">
              <Image
                src="/images/hero-lab.jpg"
                alt="Students conducting experiments in the science laboratory"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              {/* Subtle gradient overlay on left edge for blending */}
              <div className="absolute inset-0 bg-gradient-to-r from-navy/30 via-transparent to-transparent lg:block hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
