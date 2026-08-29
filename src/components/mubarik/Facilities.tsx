'use client';

import Image from 'next/image';
import { useState } from 'react';

const facilities = [
  {
    id: 'lab',
    title: 'Science Laboratories',
    description: 'Well-equipped laboratories for Physics, Chemistry, and Biology where students conduct experiments and develop practical scientific skills.',
    image: '/images/science-classroom.jpg',
  },
  {
    id: 'classroom',
    title: 'Classrooms',
    description: 'Clean, organised classrooms designed for focused learning with adequate lighting, ventilation, and modern teaching aids.',
    image: '/images/primary-classroom.jpg',
  },
  {
    id: 'library',
    title: 'Library',
    description: 'A well-stocked library with academic resources, reference materials, and a quiet reading environment for independent study.',
    image: '/images/library.jpg',
  },
  {
    id: 'computer',
    title: 'Computer Lab',
    description: 'A dedicated computer laboratory with modern systems, providing students with practical IT skills and digital literacy.',
    image: '/images/computer-lab.jpg',
  },
];

export default function Facilities() {
  const [active, setActive] = useState('lab');
  const activeFacility = facilities.find(f => f.id === active)!;

  return (
    <section id="campus-life" className="section-padding bg-white">
      <div className="container-site">
        <div className="mb-14">
          <span className="section-label mb-4 block">Campus &amp; Facilities</span>
          <h2 className="editorial-heading text-3xl sm:text-4xl">
            Our Learning Environment
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Facility Navigation - Left */}
          <div className="lg:col-span-4">
            <nav className="flex flex-row lg:flex-col gap-0 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-1 px-1 lg:mx-0 lg:px-0">
              {facilities.map((facility) => (
                <button
                  key={facility.id}
                  onClick={() => setActive(facility.id)}
                  className={`flex-shrink-0 lg:flex-shrink text-left px-4 py-3 border-b-2 transition-colors lg:pr-0 lg:pl-0 lg:border-l-2 lg:border-b-0 lg:py-2.5 ${
                    active === facility.id
                      ? 'border-navy text-navy font-semibold'
                      : 'border-transparent text-text-secondary hover:text-navy'
                  } text-sm whitespace-nowrap lg:whitespace-normal`}
                >
                  {facility.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Facility Display - Right */}
          <div className="lg:col-span-8">
            <div className="relative aspect-[16/10] overflow-hidden bg-warm-surface">
              <Image
                src={activeFacility.image}
                alt={activeFacility.title}
                fill
                className="object-cover transition-opacity duration-300"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-navy mb-1.5">{activeFacility.title}</h3>
              <p className="body-text text-sm">{activeFacility.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}