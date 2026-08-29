import Image from 'next/image';

const activities = [
  {
    title: 'Science Fair & Exhibitions',
    description: 'Students present research projects and experiments, developing presentation skills and scientific communication.',
    image: '/images/science-fair.jpg',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Sports Programme',
    description: 'Regular sports activities including cricket, athletics, and team sports fostering physical fitness and sportsmanship.',
    image: '/images/sports.jpg',
    span: '',
  },
  {
    title: 'Educational Trips',
    description: 'Planned visits to science centres, museums, and educational institutions that extend learning beyond the classroom.',
    image: '/images/campus-building.jpg',
    span: '',
  },
];

export default function StudentLife() {
  return (
    <section className="section-padding bg-warm-surface">
      <div className="container-site">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <span className="section-label mb-4 block">Student Life</span>
            <h2 className="editorial-heading text-3xl sm:text-4xl mb-5">
              Beyond the
              Classroom
            </h2>
            <p className="body-text">
              Education at Mubarik extends beyond textbooks. Through sports, science activities, and events, students develop skills and interests that shape their overall growth.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activities.map((activity) => (
                <div key={activity.title} className={`group relative overflow-hidden bg-warm-border ${activity.span}`}>
                  <div className={`relative ${activity.span.includes('col-span-2') && activity.span.includes('row-span-2') ? 'aspect-[16/10] sm:aspect-[16/9]' : 'aspect-[4/3]'}`}>
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes={activity.span.includes('col-span-2') ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 640px) 100vw, 50vw'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                      <h3 className="text-white font-semibold text-base mb-1">{activity.title}</h3>
                      <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-sm">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}