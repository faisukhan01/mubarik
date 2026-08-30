'use client';

import Image from 'next/image';
import { useState } from 'react';
import { RevealSection } from '@/hooks/use-reveal';

const facilities = [
  { title: 'Science Laboratories', desc: 'Well-equipped Physics, Chemistry, and Biology laboratories where students develop practical scientific skills.', image: '/images/science-classroom.jpg' },
  { title: 'Classrooms', desc: 'Clean, organised classrooms with adequate lighting, ventilation, and modern teaching aids for focused learning.', image: '/images/primary-classroom.jpg' },
  { title: 'Library', desc: 'A well-stocked library with academic resources and a quiet reading environment for independent study.', image: '/images/library.jpg' },
  { title: 'Computer Lab', desc: 'Modern systems providing students with practical IT skills and digital literacy for the modern world.', image: '/images/computer-lab.jpg' },
];

export default function Facilities() {
  const [active, setActive] = useState(0);
  const f = facilities[active];

  return (
    <section id="campus-life" className="section-padding bg-white">
      <RevealSection className="container-site">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4 reveal">
            <div className="gold-line mb-5" />
            <h2 className="editorial-heading text-3xl sm:text-4xl mb-5">
              Campus &amp; <span className="text-gold">Facilities</span>
            </h2>
            <p className="body-text mb-8">
              Our campus provides a conducive learning environment with purpose-built facilities that support academic and extracurricular activities.
            </p>
            <nav className="space-y-1">
              {facilities.map((fac, i) => (
                <button
                  key={fac.title}
                  onClick={() => setActive(i)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    active === i
                      ? 'bg-navy text-white shadow-md'
                      : 'text-text-secondary hover:bg-warm-surface'
                  }`}
                >
                  {fac.title}
                </button>
              ))}
            </nav>
          </div>
          <div className="lg:col-span-8 reveal reveal-delay-2">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={f.image}
                alt={f.title}
                fill
                className="object-cover transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="text-white text-xl lg:text-2xl font-semibold mb-2" style={{fontFamily:'var(--font-playfair), Georgia, serif'}}>{f.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-md">{f.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
