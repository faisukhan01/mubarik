import Image from 'next/image';
import { RevealSection } from '@/hooks/use-reveal';
import { ArrowUpRight } from 'lucide-react';

const activities = [
  {
    title: 'Science Fair & Exhibitions',
    desc: 'Students present research projects, developing presentation skills and scientific communication.',
    image: '/images/science-fair.jpg',
    tag: 'Academic',
  },
  {
    title: 'Sports Programme',
    desc: 'Regular sports activities including cricket, athletics, and team sports for physical fitness.',
    image: '/images/sports.jpg',
    tag: 'Sports',
  },
  {
    title: 'Educational Trips',
    desc: 'Visits to science centres, museums, and educational institutions beyond the classroom.',
    image: '/images/campus-building.jpg',
    tag: 'Experience',
  },
];

export default function StudentLife() {
  return (
    <section className="section-padding bg-white">
      <RevealSection className="container-site">
        <div className="flex items-end justify-between mb-12 lg:mb-14">
          <div>
            <span className="section-label mb-4 block reveal">Student Life</span>
            <h2 className="section-heading text-[2rem] sm:text-[2.5rem] reveal reveal-delay-1">
              Beyond the <span className="text-gold">Classroom</span>
            </h2>
          </div>
          <a
            href="#"
            className="link-arrow hidden sm:inline-flex reveal reveal-delay-2"
          >
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>

        {/* Asymmetric grid: first card wider */}
        <div className="grid sm:grid-cols-5 gap-4 lg:gap-5">
          {/* Featured card */}
          <div className="sm:col-span-3 group relative overflow-hidden rounded-2xl card-hover reveal reveal-delay-1">
            <div className="relative aspect-[4/3]">
              <Image
                src={activities[0].image}
                alt={activities[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-[0.6rem] font-bold tracking-[0.12em] uppercase text-gold bg-navy-dark/60 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                  {activities[0].tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="w-8 h-px bg-gold mb-3" />
                <h3
                  className="text-white text-lg sm:text-xl lg:text-2xl mb-2 leading-snug"
                  style={{
                    fontFamily: 'var(--font-dm-serif), Georgia, serif',
                  }}
                >
                  {activities[0].title}
                </h3>
                <p className="text-white/55 text-xs sm:text-sm leading-relaxed max-w-sm">
                  {activities[0].desc}
                </p>
              </div>
            </div>
          </div>

          {/* Two stacked cards */}
          <div className="sm:col-span-2 flex flex-col gap-4 lg:gap-5">
            {activities.slice(1).map((a, i) => (
              <div
                key={a.title}
                className={`group relative overflow-hidden rounded-2xl card-hover reveal reveal-delay-${i + 2}`}
              >
                <div className="relative aspect-[16/10] sm:aspect-[3/2]">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[0.6rem] font-bold tracking-[0.12em] uppercase text-gold bg-navy-dark/60 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                      {a.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                    <h3
                      className="text-white text-base lg:text-lg mb-1 leading-snug"
                      style={{
                        fontFamily: 'var(--font-dm-serif), Georgia, serif',
                      }}
                    >
                      {a.title}
                    </h3>
                    <p className="text-white/50 text-xs leading-relaxed">
                      {a.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
