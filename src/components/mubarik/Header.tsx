'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NAV_ITEMS = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Campus Life', href: '#campus-life' },
  { label: 'News', href: '#news' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/[0.97] backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-site flex items-center justify-between h-[64px] lg:h-[80px]">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2.5 flex-shrink-0 z-10">
            <div
              className={`rounded-lg transition-all duration-300 ${
                scrolled
                  ? 'bg-transparent p-0'
                  : 'bg-white p-1.5 shadow-md'
              }`}
            >
              <Image
                src="/mubarik-logo.png"
                alt="Mubarik Science Academy"
                width={44}
                height={44}
                className="w-9 h-9 lg:w-10 lg:h-10"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={`text-sm lg:text-[1.1rem] font-bold tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-navy' : 'text-white'
                } ${!scrolled ? 'drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]' : ''}`}
                style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
              >
                Mubarik
              </span>
              <span
                className={`text-[0.55rem] font-semibold tracking-[0.14em] uppercase transition-colors duration-300 ${
                  scrolled ? 'text-gold' : 'text-white/60'
                }`}
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                School & Academy
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`px-3.5 py-2 text-[0.78rem] font-medium transition-colors duration-300 relative group ${
                  scrolled
                    ? 'text-text-secondary hover:text-navy'
                    : 'text-white/80 hover:text-white'
                }`}
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                {item.label}
                <span
                  className={`absolute bottom-0.5 left-3.5 right-3.5 h-px transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100 ${
                    scrolled ? 'bg-navy' : 'bg-white'
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#admissions"
              className={`hidden lg:inline-flex items-center px-5 py-2.5 text-[0.78rem] font-semibold tracking-wide rounded-lg transition-all duration-300 ${
                scrolled
                  ? 'bg-navy text-white hover:bg-navy-light shadow-sm'
                  : 'bg-white text-navy hover:bg-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.2)]'
              }`}
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              Apply Now
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 -mr-1 z-10"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span
                className={`block w-5 h-[1.5px] transition-all duration-300 ${
                  mobileOpen
                    ? 'rotate-45 translate-y-[2.5px] bg-navy'
                    : scrolled
                    ? 'bg-navy'
                    : 'bg-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]'
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] mt-[5px] transition-all duration-300 ${
                  mobileOpen
                    ? '-rotate-45 -translate-y-[2.5px] bg-navy'
                    : scrolled
                    ? 'bg-navy'
                    : 'bg-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]'
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <section className="relative min-h-[90vh] lg:min-h-[100vh] flex items-end overflow-hidden">
        <Image
          src="/images/mubarik-building.png"
          alt="Mubarik Science Academy Campus"
          fill
          className="object-cover hero-building-mobile"
          priority
          sizes="100vw"
        />

        {/* MOBILE: gradient overlay — stronger at bottom where text sits, lighter at top to show building */}
        <div className="absolute inset-0 lg:hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/70 to-navy-dark/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/20 to-transparent h-1/3" />
        </div>

        {/* DESKTOP: left-side dark for text readability */}
        <div className="absolute inset-0 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/85 via-navy-dark/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-navy-dark/30" />
        </div>

        {/* Hero content — mobile: centered, desktop: left-aligned */}
        <div className="relative z-10 container-site pb-16 sm:pb-20 lg:pb-28 pt-28 sm:pt-32">
          {/* Mobile: centered layout */}
          <div className="lg:max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
              <div className="w-8 h-px bg-gold" />
              <span
                className="text-gold-light text-[0.65rem] font-semibold tracking-[0.18em] uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                Mubarik Science Academy
              </span>
            </div>
            <h1
              className="text-white text-[2rem] sm:text-[2.75rem] lg:text-[3.5rem] xl:text-[4.25rem] font-bold leading-[1.08] mb-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
              style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
            >
              Building Minds.
              <br />
              <span className="text-gold-light">Shaping Futures.</span>
            </h1>
            <p
              className="text-white/75 text-[0.85rem] lg:text-base leading-relaxed max-w-md mx-auto lg:mx-0 mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              A committed educational institution dedicated to academic
              excellence, scientific enquiry, and the development of
              disciplined, capable young individuals.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Link
                href="#about"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gold text-white text-sm font-bold tracking-wide rounded-xl hover:bg-gold-light transition-all duration-300 shadow-[0_4px_20px_rgba(46,139,87,0.3)]"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                Discover More
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link
                href="#admissions"
                className="inline-flex items-center px-6 py-3 border border-white/25 text-white text-sm font-medium rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                Admissions
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator — desktop only */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-[0.6rem] tracking-[0.2em] uppercase font-medium" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white lg:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-8 overflow-y-auto">
          <nav className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-warm-border py-4 text-xl font-semibold text-navy hover:text-gold transition-colors"
                style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8">
            <Link
              href="#admissions"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-6 py-4 bg-navy text-white text-sm font-semibold tracking-wide hover:bg-navy-light transition-colors rounded-xl"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
