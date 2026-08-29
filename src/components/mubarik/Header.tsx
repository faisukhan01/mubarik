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
  { label: 'Faculty', href: '#leadership' },
  { label: 'News & Events', href: '#news' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* Utility Bar */}
      <div className="bg-navy text-white/80 text-xs hidden lg:block">
        <div className="container-site flex items-center justify-between h-8">
          <div className="flex items-center gap-6">
            <a href="tel:+923001234567" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +92 300 123 4567
            </a>
            <a href="mailto:info@mubarik.edu.pk" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              info@mubarik.edu.pk
            </a>
          </div>
          <div className="flex items-center gap-5">
            <Link href="#admissions" className="hover:text-white transition-colors">Admissions</Link>
            <span className="text-white/30">|</span>
            <Link href="#" className="hover:text-white transition-colors">Parent Portal</Link>
            <span className="text-white/30">|</span>
            <Link href="#" className="hover:text-white transition-colors">Student Portal</Link>
            <span className="text-white/30">|</span>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b transition-all duration-300 ${
          scrolled
            ? 'border-warm-border shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
            : 'border-transparent'
        }`}
      >
        <div className="container-site">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-[4.25rem]'}`}>
            {/* Logo */}
            <Link href="#" className="flex-shrink-0">
              <Image
                src="/mubarik-logo.png"
                alt="Mubarik Science Academy"
                width={scrolled ? 52 : 58}
                height={scrolled ? 52 : 58}
                className="transition-all duration-300"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative px-3 py-2 text-[0.8125rem] font-medium text-text-secondary hover:text-navy transition-colors group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-navy scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="#admissions"
                className="hidden lg:inline-flex items-center px-5 py-2 bg-navy text-white text-[0.8125rem] font-semibold tracking-wide hover:bg-navy-light transition-colors"
              >
                Apply for Admission
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 -mr-2.5"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                <span className={`block w-5 h-[1.5px] bg-navy transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-[2.25px]' : ''}`} />
                <span className={`block w-5 h-[1.5px] bg-navy mt-[5px] transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-[2.25px]' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white lg:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-6 pb-8 overflow-y-auto">
          <div className="container-site flex-1">
            <nav className="flex flex-col">
              {NAV_ITEMS.map((item, i) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-warm-border py-4 text-lg font-medium text-navy hover:text-cyan transition-colors"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8">
              <Link
                href="#admissions"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-6 py-3.5 bg-navy text-white text-sm font-semibold tracking-wide hover:bg-navy-light transition-colors"
              >
                Apply for Admission
              </Link>
            </div>
            <div className="mt-10 flex flex-col gap-3 text-sm text-text-secondary">
              <a href="tel:+923001234567" className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +92 300 123 4567
              </a>
              <a href="mailto:info@mubarik.edu.pk" className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                info@mubarik.edu.pk
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
