export default function Academics() {
  const programmes = [
    {
      level: 'Early Years',
      description: 'A nurturing, play-based introduction to learning that develops social skills, basic numeracy, and early literacy in a supportive environment.'
    },
    {
      level: 'Primary',
      description: 'Structured instruction in core subjects — English, Mathematics, Science, and Urdu — building strong academic habits and subject knowledge.'
    },
    {
      level: 'Middle School',
      description: 'Deeper engagement with academic subjects, introduction to scientific methodology, and development of critical thinking and study skills.'
    },
    {
      level: 'Secondary',
      description: 'Rigorous examination preparation with a science-oriented curriculum, practical laboratory work, and focused academic coaching.'
    },
    {
      level: 'Science Programme',
      description: 'Specialised science education with hands-on laboratory experiments, project-based learning, and preparation for higher studies in science fields.'
    },
  ];

  return (
    <section id="academics" className="section-padding bg-white">
      <div className="container-site">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column */}
          <div className="lg:col-span-4">
            <span className="section-label mb-4 block">Academics</span>
            <h2 className="editorial-heading text-3xl sm:text-4xl mb-5">
              Learning Designed
              for Depth
            </h2>
            <p className="body-text">
              Our curriculum is structured to develop curiosity, confidence, and capability at every stage of a student's education.
            </p>
          </div>

          {/* Right Column - Programme List */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-warm-border">
              {programmes.map((programme, index) => (
                <div key={programme.level} className="py-6 first:pt-0 last:pb-0 group">
                  <div className="flex items-start gap-5">
                    <span className="text-xs font-bold text-navy/25 mt-0.5 w-5 flex-shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-navy mb-1">
                        {programme.level}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {programme.description}
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