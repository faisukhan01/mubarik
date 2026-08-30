'use client';

import Image from 'next/image';
import { RevealSection } from '@/hooks/use-reveal';
import { ArrowRight } from 'lucide-react';

const activities = [
  {
    title: 'Science Fair & Exhibitions',
    desc: 'Students present research projects, developing presentation skills and scientific communication.',
    image: '/images/science-fair.jpg',
    tag: 'Academic',
  },
  {
    title: 'Sports Programme',
    desc: 'Regular sports activities including cricket, athletics, and team sports for physical fitness.',
    image: '/images/sports.jpg',
    tag: 'Sports',
  },
  {
    title: 'Educational Trips',
    desc: 'Visits to science centres, museums, and educational institutions beyond the classroom.',
    image: '/images/campus-building.jpg',
    tag: 'Experience',
  },
];

export default function StudentLife() {
  return (
    <section className="section-padding bg-warm-surface relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold/[0.06] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-navy/[0.04] blur-3xl pointer-events-none" />

      <RevealSection className="container-site relative z-10">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10 lg:mb-14">
          <div>
            <span className="section-label mb-3 block reveal">Student Life</span>
            <h2 className="section-heading text-[2rem] sm:text-[2.5rem] reveal reveal-delay-1">
              Beyond the <span className="text-gold">Classroom</span>
            </h2>
          </div>
          <a
            href="#"
            className="link-arrow hidden sm:inline-flex reveal reveal-delay-2"
          >
            View All
            <ArrowRight size={14} />
          </a>
        </div>

        {/* 3-column card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {activities.map((a, i) => (
            <article
              key={a.title}
              className={`group bg-white rounded-2xl overflow-hidden border border-warm-border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-navy/[0.1] hover:border-gold/30 reveal reveal-delay-${i + 1}`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Category badge — overlapping image slightly */}
                <div className="absolute top-4 left-4 -translate-y-0">
                  <span
                    className="inline-block bg-gold/90 text-white text-[0.6rem] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-lg backdrop-blur-sm"
                    style={{
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    }}
                  >
                    {a.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 lg:p-6">
                <h3
                  className="text-navy text-lg lg:text-xl mb-2 leading-snug"
                  style={{
                    fontFamily:
                      'var(--font-montserrat), system-ui, sans-serif',
                  }}
                >
                  {a.title}
                </h3>
                <p
                  className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3"
                  style={{
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  }}
                >
                  {a.desc}
                </p>
                <a
                  href="#"
                  className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold transition-colors duration-300"
                  style={{
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  }}
                >
                  Explore
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All link */}
        <div className="sm:hidden mt-8 text-center reveal reveal-delay-4">
          <a href="#" className="link-arrow">
            View All Activities
            <ArrowRight size={14} />
          </a>
        </div>
      </RevealSection>
    </section>
  );
}
