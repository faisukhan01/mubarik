'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

export default function AdmissionPopup() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(() => setOpen(false), 400);
  }, []);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('admission-popup-dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => {
        setOpen(true);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setVisible(true));
        });
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-opacity duration-400 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy-dark/60 backdrop-blur-sm" />

      {/* Popup Card */}
      <div
        className={`relative w-full max-w-[420px] rounded-2xl overflow-hidden transition-all duration-500 ease-out ${
          visible
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-6'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top decorative gradient bar */}
        <div className="h-1.5 bg-gradient-to-r from-navy via-gold to-brand-green" />

        {/* Content */}
        <div className="bg-white px-7 pt-8 pb-7 sm:px-9 sm:pt-10 sm:pb-9">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 flex items-center justify-center rounded-full bg-warm-surface hover:bg-warm-border transition-colors"
            aria-label="Close popup"
          >
            <svg className="w-3.5 h-3.5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold" />
            </span>
            <span
              className="text-gold text-[0.68rem] font-bold tracking-[0.16em] uppercase"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              Now Accepting Applications
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-navy text-[1.65rem] sm:text-[1.85rem] font-extrabold leading-[1.1] mb-2"
            style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
          >
            Admissions Open
          </h2>

          {/* Session year — prominent */}
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-gold/60 to-transparent" />
            <span
              className="text-gold text-[1.1rem] sm:text-[1.25rem] font-extrabold tracking-wide"
              style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
            >
              2026 – 2027
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-gold/60 to-transparent" />
          </div>

          {/* Details */}
          <div className="space-y-2.5 mb-7">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p
                className="text-text-secondary text-[0.82rem] leading-relaxed"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                Enrolments open for <span className="text-navy font-semibold">Pre-School to Grade 12</span>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p
                className="text-text-secondary text-[0.82rem] leading-relaxed"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                Science, Commerce &amp; Humanities streams available
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p
                className="text-text-secondary text-[0.82rem] leading-relaxed"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                Limited seats — <span className="text-navy font-semibold">apply early</span> for priority consideration
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="#admissions"
            onClick={handleClose}
            className="group w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-navy text-white text-[0.85rem] font-bold tracking-wide rounded-xl hover:bg-navy-light transition-all duration-300 shadow-[0_4px_24px_rgba(27,42,90,0.25)] active:scale-[0.98]"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            Apply Now
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Bottom accent line */}
        <div className="h-1 bg-gradient-to-r from-brand-green via-gold to-navy" />
      </div>
    </div>
  );
}
