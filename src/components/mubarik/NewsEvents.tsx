export default function NewsEvents() {
  const featured = {
    category: 'Admissions',
    title: 'Admissions Open for the Academic Year 2025–26',
    date: '15 August 2025',
    summary: 'Applications are now being accepted for Early Years through Secondary levels at both Mubarik Science Academy and Mubarik Educare School.',
  };

  const newsItems = [
    {
      category: 'Event',
      title: 'Annual Science Exhibition 2025',
      date: '20 July 2025',
    },
    {
      category: 'Academic',
      title: 'Mid-Term Examination Schedule Released',
      date: '5 July 2025',
    },
    {
      category: 'Sports',
      title: 'Inter-Class Cricket Tournament Results',
      date: '28 June 2025',
    },
  ];

  return (
    <section id="news" className="section-padding bg-warm-surface">
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

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Featured Story */}
          <div className="lg:col-span-7">
            <article className="bg-white p-8 sm:p-10 border border-warm-border h-full">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[0.6875rem] font-semibold tracking-wider uppercase text-cyan bg-cyan/8 px-2.5 py-1">
                  {featured.category}
                </span>
                <span className="text-xs text-text-tertiary">{featured.date}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-navy mb-3 leading-snug">
                {featured.title}
              </h3>
              <p className="body-text text-sm">
                {featured.summary}
              </p>
              <a href="#" className="link-arrow mt-6 inline-flex">
                Read More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </article>
          </div>

          {/* News List */}
          <div className="lg:col-span-5">
            <div className="divide-y divide-warm-border">
              {newsItems.map((item) => (
                <article key={item.title} className="py-5 first:pt-0 last:pb-0 group">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[0.6875rem] font-semibold tracking-wider uppercase text-text-tertiary">
                      {item.category}
                    </span>
                    <span className="text-xs text-text-tertiary">{item.date}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-navy group-hover:text-cyan transition-colors leading-snug">
                    <a href="#">{item.title}</a>
                  </h4>
                </article>
              ))}
            </div>
            <a href="#" className="link-arrow mt-6 sm:hidden inline-flex">
              View All News
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}