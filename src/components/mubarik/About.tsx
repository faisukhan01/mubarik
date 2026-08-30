'use client';

import Link from 'next/link';
import { RevealSection } from '@/hooks/use-reveal';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Students Enrolled' },
  { value: 25, suffix: '+', label: 'Qualified Faculty' },
  { value: 10, suffix: '+', label: 'Years of Excellence' },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
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
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-warm-surface/60 to-transparent pointer-events-none" />
      
      <RevealSection className="container-site relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left column */}
          <div className="lg:col-span-5">
            <div className="reveal">
              <span className="section-label mb-4 block">Who We Are</span>
            </div>
            <h2 className="section-heading text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] reveal reveal-delay-1">
              An Institution
              <br />
              <span className="text-gold">Committed</span> to
              <br />
              Education
            </h2>
            <div className="gold-line mt-8 mb-0 reveal reveal-delay-2" />
          </div>

          {/* Right column */}
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-6 lg:gap-10 mt-16 lg:mt-20 pt-12 border-t border-warm-border">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`reveal reveal-delay-${i + 1}`}>
              <div
                className="text-3xl sm:text-4xl lg:text-5xl text-navy mb-1.5 leading-none"
                style={{ fontFamily: 'var(--font-dm-serif), Georgia, serif' }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <p className="text-text-tertiary text-xs sm:text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}