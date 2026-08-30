'use client';

import { useEffect, useRef } from 'react';

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    // Observe all elements with reveal classes
    const selectors = '.reveal, .reveal-scale, .reveal-left, .reveal-right';
    const children = el.querySelectorAll(selectors);
    children.forEach((child) => observer.observe(child));

    // Also observe the container itself if it has a reveal class
    if (el.matches(selectors)) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

export function RevealSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
