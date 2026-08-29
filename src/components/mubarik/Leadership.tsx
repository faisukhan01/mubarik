import Image from 'next/image';

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding bg-white">
      <div className="container-site">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Portrait */}
          <div className="lg:col-span-4">
            <div className="relative aspect-[3/4] max-w-xs mx-auto lg:mx-0 overflow-hidden bg-warm-surface">
              <Image
                src="/images/principal.jpg"
                alt="Principal, Mubarik Science Academy"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 320px, 288px"
              />
            </div>
          </div>

          {/* Message */}
          <div className="lg:col-span-8">
            <span className="section-label mb-4 block">From the Leadership</span>
            <h2 className="editorial-heading text-3xl sm:text-4xl mb-6">
              A Message from the Principal
            </h2>
            <div className="border-l-2 border-cyan pl-6">
              <p className="body-text mb-4">
                At Mubarik Science Academy, we believe that education is the most meaningful investment a family can make. Our responsibility is to ensure that every student who walks through our doors receives a thorough, disciplined, and purposeful education.
              </p>
              <p className="body-text">
                We do not make exaggerated claims. Instead, we focus on what matters: qualified teachers, a structured curriculum, a safe learning environment, and clear expectations for both students and staff. This is the foundation on which meaningful academic achievement is built.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}