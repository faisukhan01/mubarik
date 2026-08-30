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
  const [count, setCount] = useState(1);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;
    const duration = 1800;
    const range = value - 1;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(1 + range * eased));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span>{count}{suffix}</span>;
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

  const delayClasses = ['reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4'];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-gold/[0.06] to-navy/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-gradient-to-tr from-navy/[0.03] to-gold/[0.05] rounded-full blur-3xl pointer-events-none" />

      <RevealSection className="container-site relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
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

          <div className="lg:col-span-7">
            <p className="body-text mb-5 reveal reveal-delay-2">
              Mubarik Science Academy, along with its school division Mubarik Educare School, operates as a single educational system committed to developing students who think critically, learn thoroughly, and grow with purpose.
            </p>
            <p className="body-text mb-8 reveal reveal-delay-3">
              Our programmes are structured to build a strong academic foundation from the early years through to secondary level, with particular emphasis on science education, disciplined study habits, and character development.
            </p>
            <Link href="#" className="link-arrow reveal reveal-delay-4">
              Discover Our Story
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-16 lg:mt-20 mb-10 lg:mb-12 reveal reveal-delay-2">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-warm-border to-transparent" />
          <div className="w-2 h-2 rounded-full bg-gold/40" />
          <div className="w-3 h-3 rounded-full border border-gold/30" />
          <div className="w-2 h-2 rounded-full bg-gold/40" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-warm-border to-transparent" />
        </div>

        <div className="grid grid-cols-3 gap-6 lg:gap-10">
          {stats.map((stat, i) => (
            <div key={stat.label} className={"text-center reveal " + delayClasses[i]}>
              <div
                className="text-4xl sm:text-5xl lg:text-6xl text-navy font-bold leading-none mb-2"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <p
                className="text-text-tertiary text-[0.65rem] sm:text-xs font-semibold tracking-[0.12em] uppercase"
                style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
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
