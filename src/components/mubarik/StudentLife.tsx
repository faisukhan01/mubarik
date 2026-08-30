import Image from 'next/image';
import { RevealSection } from '@/hooks/use-reveal';

const activities = [
  { title: 'Science Fair & Exhibitions', desc: 'Students present research projects, developing presentation skills and scientific communication.', image: '/images/science-fair.jpg' },
  { title: 'Sports Programme', desc: 'Regular sports activities including cricket, athletics, and team sports for physical fitness.', image: '/images/sports.jpg' },
  { title: 'Educational Trips', desc: 'Visits to science centres, museums, and educational institutions beyond the classroom.', image: '/images/campus-building.jpg' },
];

export default function StudentLife() {
  return (
    <section className="section-padding bg-warm-surface">
      <RevealSection className="container-site">
        <div className="mb-14 reveal">
          <div className="gold-line mb-5" />
          <h2 className="editorial-heading text-3xl sm:text-4xl mb-4">
            Beyond the <span className="text-gold">Classroom</span>
          </h2>
          <p className="body-text max-w-xl">
            Through sports, science activities, and events, students develop skills and interests that shape their overall growth.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activities.map((a, i) => (
            <div key={a.title} className={`group relative overflow-hidden rounded-xl reveal reveal-delay-${i + 1}`}>
              <div className="relative aspect-[4/3]">
                <Image src={a.image} alt={a.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-8 h-px bg-gold mb-3" />
                  <h3 className="text-white font-semibold text-base mb-1.5" style={{fontFamily:'var(--font-playfair), Georgia, serif'}}>{a.title}</h3>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}