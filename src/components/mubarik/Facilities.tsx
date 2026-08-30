'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
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

export default function Facilities() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const f = facilities[active];

  const goTo = (index: number) => {
    if (isAnimating || index === active) return;
    setIsAnimating(true);
    setActive(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      goTo((active + 1) % facilities.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <section id="campus-life" className="section-padding bg-warm-surface">
      <RevealSection className="container-site">
        <div className="flex items-end justify-between mb-10 lg:mb-14">
          <div>
            <span className="section-label mb-4 block reveal">Campus</span>
            <h2 className="section-heading text-[2rem] sm:text-[2.5rem] reveal reveal-delay-1">
              Our <span className="text-gold">Facilities</span>
            </h2>
          </div>
        </div>

        {/* Image showcase */}
        <div className="relative reveal reveal-delay-2">
          <div className="relative aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/7] rounded-2xl overflow-hidden">
            <Image
              key={f.image}
              src={f.image}
              alt={f.title}
              fill
              className={`object-cover transition-all duration-700 ${
                isAnimating ? 'opacity-0 scale-[1.03]' : 'opacity-100 scale-100'
              }`}
              sizes="100vw"
              priority={active === 0}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-navy-dark/10 to-transparent" />

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
              <div className="flex items-end justify-between gap-6">
                <div className="max-w-lg">
                  <h3
                    className="text-white text-xl sm:text-2xl lg:text-3xl mb-2"
                    style={{
                      fontFamily: 'var(--font-dm-serif), Georgia, serif',
                    }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-white/60 text-sm sm:text-[0.9rem] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => goTo((active - 1 + facilities.length) % facilities.length)}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all duration-300"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => goTo((active + 1) % facilities.length)}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all duration-300"
                    aria-label="Next"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Facility name tabs below image */}
          <div className="flex items-center gap-2 mt-5 overflow-x-auto pb-1">
            {facilities.map((fac, i) => (
              <button
                key={fac.title}
                onClick={() => goTo(i)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  active === i
                    ? 'bg-navy text-white shadow-md'
                    : 'bg-white text-text-secondary hover:bg-white/80 border border-warm-border'
                }`}
              >
                {fac.title}
              </button>
            ))}
          </div>

          {/* Progress dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {facilities.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  active === i
                    ? 'w-8 bg-gold'
                    : 'w-1.5 bg-warm-border hover:bg-text-tertiary'
                }`}
                aria-label={`Go to facility ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
