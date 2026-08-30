'use client';

import { useState, useEffect, useCallback } from 'react';
import { RevealSection } from '@/hooks/use-reveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const facilities = [
  {
    title: 'Science Laboratories',
    desc: 'Well-equipped Physics, Chemistry, and Biology laboratories where students develop practical scientific skills through hands-on experiments.',
    image: '/images/science-classroom.jpg',
  },
  {
    title: 'Classrooms',
    desc: 'Clean, organised classrooms with adequate lighting, ventilation, and modern teaching aids for focused learning.',
    image: '/images/primary-classroom.jpg',
  },
  {
    title: 'Library',
    desc: 'A well-stocked library with academic resources and a quiet reading environment for independent study and research.',
    image: '/images/library.jpg',
  },
  {
    title: 'Computer Lab',
    desc: 'Modern systems providing students with practical IT skills and digital literacy for the modern world.',
    image: '/images/computer-lab.jpg',
  },
];

const INTERVAL = 5000;

export default function Facilities() {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const f = facilities[active];

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === active) return;
      setIsTransitioning(true);
      setProgress(0);
      setActive(index);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [isTransitioning, active]
  );

  useEffect(() => {
    const startTime = Date.now();
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min((elapsed / INTERVAL) * 100, 100));
    }, 50);
    const autoTimer = setTimeout(() => {
      goTo((active + 1) % facilities.length);
    }, INTERVAL);
    return () => {
      clearInterval(progressInterval);
      clearTimeout(autoTimer);
    };
  }, [active, goTo]);

  return (
    <section id="campus-life" className="section-padding bg-warm-surface">
      <RevealSection className="container-site">
        <div className="flex items-end justify-between mb-8 lg:mb-10">
          <div>
            <span className="section-label mb-3 block reveal">Campus</span>
            <h2 className="section-heading text-[2rem] sm:text-[2.5rem] reveal reveal-delay-1">
              Our <span className="text-gold">Facilities</span>
            </h2>
          </div>
        </div>

        <div
          className="flex items-center gap-2 mb-6 overflow-x-auto pb-1 reveal reveal-delay-2"
          style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
        >
          {facilities.map((fac, i) => (
            <button
              key={fac.title}
              onClick={() => goTo(i)}
              className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-400 cursor-pointer ${
                active === i
                  ? 'bg-navy text-white shadow-lg shadow-navy/20'
                  : 'bg-white text-text-secondary hover:text-navy border border-warm-border hover:border-navy/20 hover:shadow-md'
              }`}
            >
              {fac.title}
            </button>
          ))}
        </div>
      </RevealSection>

      {/* Full width image slider */}
      <div className="relative w-full" style={{ height: 'clamp(200px, 45vw, 500px)' }}>
        {facilities.map((fac, i) => (
          <div
            key={fac.image}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              active === i ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-[1.04] z-0'
            }`}
          >
            <img
              src={fac.image}
              alt={fac.title}
              className="w-full h-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none z-20" />
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black/5 z-20">
          <div
            className="h-full bg-gold transition-none"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <RevealSection className="container-site">
        <div className="mt-5 bg-white rounded-2xl border border-warm-border p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 reveal reveal-delay-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1.5">
              <div className="gold-line flex-shrink-0" />
              <h3
                className="text-navy text-lg sm:text-xl font-semibold leading-snug truncate"
                style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
              >
                {f.title}
              </h3>
            </div>
            <p className="body-text text-[0.85rem] leading-relaxed line-clamp-2">
              {f.desc}
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => goTo((active - 1 + facilities.length) % facilities.length)}
              className="w-10 h-10 rounded-full border border-warm-border flex items-center justify-center text-text-secondary hover:bg-navy hover:text-white hover:border-navy transition-all duration-300 cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => goTo((active + 1) % facilities.length)}
              className="w-10 h-10 rounded-full border border-warm-border flex items-center justify-center text-text-secondary hover:bg-navy hover:text-white hover:border-navy transition-all duration-300 cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2.5 mt-5 reveal reveal-delay-5">
          {facilities.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-[6px] rounded-full transition-all duration-500 cursor-pointer ${
                active === i ? 'w-8 bg-gold' : 'w-[6px] bg-warm-border hover:bg-text-tertiary'
              }`}
              aria-label={`Go to facility ${i + 1}`}
            />
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
