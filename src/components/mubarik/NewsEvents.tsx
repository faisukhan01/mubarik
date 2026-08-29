export default function NewsEvents() {
  const newsItems = [
    {
      category: 'Admissions',
      title: 'Admissions Open for the Academic Year 2025–26',
      date: '15 August 2025',
      summary: 'Applications are now being accepted for Early Years through Secondary levels at both Mubarik Science Academy and Mubarik Educare School.',
      featured: true,
    },
    {
      category: 'Event',
      title: 'Annual Science Exhibition 2025',
      date: '20 July 2025',
      summary: 'Students showcase innovative science projects, experiments, and research demonstrations.',
      featured: false,
    },
    {
      category: 'Academic',
      title: 'Mid-Term Examination Schedule Released',
      date: '5 July 2025',
      summary: 'The examination timetable for mid-term assessments across all levels is now available.',
      featured: false,
    },
    {
      category: 'Sports',
      title: 'Inter-Class Cricket Tournament Results',
      date: '28 June 2025',
      summary: 'Congratulations to the winning teams in this year’s inter-class cricket tournament.',
      featured: false,
    },
  ];

  const featured = newsItems[0];
  const others = newsItems.slice(1);

  return (
    <section id="news" className="section-padding bg-white">
      <div className="container-site">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="section-label mb-4 block">News &amp; Events</span>
            <h2 className="editorial-heading text-3xl sm:text-4xl">Latest Updates</h2>
          </div>
          <a href="#" className="link-arrow hidden sm:inline-flex">
            View All News
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>

        {/* Featured Card - full width on mobile, 2 cols on desktop */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <article className="md:col-span-2 border border-warm-border rounded-xl p-7 sm:p-8 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[0.6875rem] font-semibold tracking-wider uppercase text-cyan bg-cyan/10 px-2.5 py-1 rounded">
                {featured.category}
              </span>
              <span className="text-xs text-text-tertiary">{featured.date}</span>
            </div>
            <h3 className="text-xl sm:text-2xl text-navy mb-3 leading-snug">
              {featured.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {featured.summary}
            </p>
            <a href="#" className="link-arrow mt-5 inline-flex">
              Read More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </article>

          {/* First regular card */}
          <article className="border border-warm-border rounded-xl p-6 hover:shadow-sm transition-shadow">
            <span className="text-[0.6875rem] font-semibold tracking-wider uppercase text-text-tertiary mb-3 block">
              {others[0].category}
            </span>
            <h4 className="text-base font-semibold text-navy mb-2 leading-snug">
              <a href="#" className="hover:text-cyan transition-colors">{others[0].title}</a>
            </h4>
            <span className="text-xs text-text-tertiary">{others[0].date}</span>
          </article>
        </div>

        {/* Remaining cards - 3 cols on desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.slice(1).map((item) => (
            <article key={item.title} className="border border-warm-border rounded-xl p-6 hover:shadow-sm transition-shadow">
              <span className="text-[0.6875rem] font-semibold tracking-wider uppercase text-text-tertiary mb-3 block">
                {item.category}
              </span>
              <h4 className="text-base font-semibold text-navy mb-2 leading-snug">
                <a href="#" className="hover:text-cyan transition-colors">{item.title}</a>
              </h4>
              <p className="text-text-secondary text-xs leading-relaxed mb-3">
                {item.summary}
              </p>
              <span className="text-xs text-text-tertiary">{item.date}</span>
            </article>
          ))}
        </div>

        <a href="#" className="link-arrow mt-8 sm:hidden inline-flex">
          View All News
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
    </section>
  );
}