import Image from 'next/image';

const activities = [
  {
    title: 'Science Fair & Exhibitions',
    description: 'Students present research projects and experiments, developing presentation skills and scientific communication.',
    image: '/images/science-fair.jpg',
  },
  {
    title: 'Sports Programme',
    description: 'Regular sports activities including cricket, athletics, and team sports fostering physical fitness and sportsmanship.',
    image: '/images/sports.jpg',
  },
  {
    title: 'Educational Trips',
    description: 'Planned visits to science centres, museums, and educational institutions that extend learning beyond the classroom.',
    image: '/images/campus-building.jpg',
  },
];

export default function StudentLife() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <div className="mb-14">
          <span className="section-label mb-4 block">Student Life</span>
          <h2 className="editorial-heading text-3xl sm:text-4xl mb-5">
            Beyond the Classroom
          </h2>
          <p className="body-text max-w-2xl">
            Education at Mubarik extends beyond textbooks. Through sports, science activities, and events, students develop skills and interests that shape their overall growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <div key={activity.title} className="group relative overflow-hidden rounded-xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-base mb-1.5">{activity.title}</h3>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}