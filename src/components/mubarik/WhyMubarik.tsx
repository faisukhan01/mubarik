export default function WhyMubarik() {
  const strengths = [
    {
      number: '01',
      title: 'Academic Excellence',
      description: 'A structured, rigorous curriculum delivered by experienced teachers who hold students to clear standards of performance and conduct.'
    },
    {
      number: '02',
      title: 'Scientific Thinking',
      description: 'Science education is central to our programme. Students develop hands-on skills through laboratory work, experiments, and project-based learning.'
    },
    {
      number: '03',
      title: 'Character Building',
      description: 'Discipline, respect, and responsibility are integral to daily school life. We expect students to conduct themselves with integrity and purpose.'
    },
    {
      number: '04',
      title: 'Individual Attention',
      description: 'With manageable class sizes and teachers who know their students, we ensure that each learner receives the support and guidance they need.'
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <div className="mb-14">
          <span className="section-label mb-4 block">Why Mubarik</span>
          <h2 className="editorial-heading text-3xl sm:text-4xl">
            What Distinguishes Us
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {strengths.map((item) => (
            <div
              key={item.number}
              className="bg-warm-surface p-8 sm:p-10 rounded-xl"
            >
              <span className="block text-4xl text-navy/20 mb-3" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                {item.number}
              </span>
              <h3 className="text-lg font-semibold text-navy mb-2.5 tracking-tight">{item.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}