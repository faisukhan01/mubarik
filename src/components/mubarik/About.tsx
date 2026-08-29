import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-site">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left - Heading Column */}
          <div className="lg:col-span-5">
            <span className="section-label mb-4 block">About Mubarik</span>
            <h2 className="editorial-heading text-3xl sm:text-4xl lg:text-[2.5rem]">
              An Institution
              <br />
              Committed to
              <br />
              Education
            </h2>
          </div>

          {/* Right - Description Column */}
          <div className="lg:col-span-7">
            <div className="border-t-2 border-navy pt-8">
              <p className="body-text mb-6">
                Mubarik Science Academy, along with its school division Mubarik Educare School, operates as a single educational system committed to developing students who think critically, learn thoroughly, and grow with purpose.
              </p>
              <p className="body-text mb-10">
                Our programmes are structured to build a strong academic foundation from the early years through to secondary level, with particular emphasis on science education, disciplined study habits, and character development. We believe that a well-structured learning environment, supported by experienced teachers, allows every student to reach their potential.
              </p>
              <Link href="#" className="link-arrow">
                Discover Our Story
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
