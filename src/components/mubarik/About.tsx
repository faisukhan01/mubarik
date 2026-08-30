'use client';

import Link from 'next/link';
import { RevealSection } from '@/hooks/use-reveal';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Students Enrolled' },
  { value: 25, suffix: '+', label: 'Qualified Faculty' },
  { value: 10, suffix: '+', label: 'Years of Excellence' },
];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;
    const duration = 1500;
    const step = Math.ceil(value / (duration / 16));
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Decorative gradient orb */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-gold/[0.06] to-navy/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-gradient-to-tr from-navy/[0.03] to-gold/[0.05] rounded-full blur-3xl pointer-events-none" />

      <RevealSection className="container-site relative z-10">
        {/* Two-column heading area */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left column — heading */}
          <div className="lg:col-span-5">
            <div className="reveal">
              <span className="section-label mb-4 block">Who We Are</span>
            </div>
            <h2
              className="section-heading text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] reveal reveal-delay-1"
            >
              An Institution
              <br />
              <span className="text-gold">Committed</span> to
              <br />
              Education
            </h2>
            <div className="gold-line mt-8 mb-0 reveal reveal-delay-2" />
          </div>

          {/* Right column — description */}
          <div className="lg:col-span-7">
            <p className="body-text mb-5 reveal reveal-delay-2">
              Mubarik Science Academy, along with its school division Mubarik
              Educare School, operates as a single educational system committed
              to developing students who think critically, learn thoroughly, and
              grow with purpose.
            </p>
            <p className="body-text mb-8 reveal reveal-delay-3">
              Our programmes are structured to build a strong academic foundation
              from the early years through to secondary level, with particular
              emphasis on science education, disciplined study habits, and
              character development.
            </p>
            <Link href="#" className="link-arrow reveal reveal-delay-4">
              Discover Our Story
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Decorative divider above stats */}
        <div className="flex items-center gap-4 mt-16 lg:mt-20 mb-10 lg:mb-12 reveal reveal-delay-2">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-warm-border to-transparent" />
          <div className="w-2 h-2 rounded-full bg-gold/40" />
          <div className="w-3 h-3 rounded-full border border-gold/30" />
          <div className="w-2 h-2 rounded-full bg-gold/40" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-warm-border to-transparent" />
        </div>

        {/* Centered stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center reveal reveal-delay-${i + 2}`}
            >
              {/* Animated ring decoration */}
              <div className="relative w-24 h-24 mx-auto mb-5">
                {/* Outer ring */}
                <div
                  className={`absolute inset-0 rounded-full border-2 transition-all duration-1000 ${inView ? 'border-gold/30 scale-100' : 'border-gold/10 scale-90'}`}
                />
                {/* Inner ring */}
                <div
                  className={`absolute inset-3 rounded-full border transition-all duration-1000 delay-300 ${inView ? 'border-navy/15 scale-100' : 'border-navy/5 scale-95'}`}
                />
                {/* Center glow dot */}
                <div
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold/30 transition-all duration-700 delay-500 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                />
                {/* Number inside ring */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-4xl sm:text-5xl lg:text-6xl text-navy leading-none"
                    style={{
                      fontFamily:
                        'var(--font-playfair), Georgia, serif',
                    }}
                  >
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      inView={inView}
                    />
                  </span>
                </div>
              </div>
              <p
                className="text-text-tertiary text-xs sm:text-sm font-medium tracking-wide uppercase"
                style={{
                  fontFamily:
                    'var(--font-jakarta), system-ui, sans-serif',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
