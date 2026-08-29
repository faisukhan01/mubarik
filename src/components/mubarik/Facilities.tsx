'use client';

import Image from 'next/image';

const facilities = [
  {
    title: 'Science Laboratories',
    description: 'Well-equipped laboratories for Physics, Chemistry, and Biology where students conduct experiments and develop practical scientific skills.',
    image: '/images/science-classroom.jpg',
  },
  {
    title: 'Classrooms',
    description: 'Clean, organised classrooms designed for focused learning with adequate lighting, ventilation, and modern teaching aids.',
    image: '/images/primary-classroom.jpg',
  },
  {
    title: 'Library',
    description: 'A well-stocked library with academic resources, reference materials, and a quiet reading environment for independent study.',
    image: '/images/library.jpg',
  },
  {
    title: 'Computer Lab',
    description: 'A dedicated computer laboratory with modern systems, providing students with practical IT skills and digital literacy.',
    image: '/images/computer-lab.jpg',
  },
];

export default function Facilities() {
  return (
    <section id="campus-life" className="section-padding bg-white">
      <div className="container-site">
        <div className="text-center mb-14">
          <span className="section-label mb-4 block">Campus &amp; Facilities</span>
          <h2 className="editorial-heading text-3xl sm:text-4xl">
            Our Learning Environment
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="group border border-warm-border rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-navy mb-2">{facility.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}