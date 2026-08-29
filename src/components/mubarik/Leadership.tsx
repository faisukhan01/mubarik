import Image from 'next/image';

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding bg-warm-surface">
      <div className="container-site">
        <div className="mb-14">
          <span className="section-label mb-4 block">From the Leadership</span>
          <h2 className="editorial-heading text-3xl sm:text-4xl">
            A Message from the Principal
          </h2>
        </div>

        <div className="bg-white rounded-xl p-8 sm:p-10">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Portrait */}
            <div className="md:col-span-4">
              <div className="relative aspect-[3/4] max-w-xs mx-auto md:mx-0 overflow-hidden rounded-xl bg-warm-surface">
                <Image
                  src="/images/principal.jpg"
                  alt="Principal, Mubarik Science Academy"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 320px, 288px"
                />
              </div>
            </div>

            {/* Message */}
            <div className="md:col-span-8">
              <div className="border-l-[3px] border-cyan pl-6 sm:pl-8">
                <p className="body-text mb-4">
                  At Mubarik Science Academy, we believe that education is the most meaningful investment a family can make. Our responsibility is to ensure that every student who walks through our doors receives a thorough, disciplined, and purposeful education.
                </p>
                <p className="body-text">
                  We do not make exaggerated claims. Instead, we focus on what matters: qualified teachers, a structured curriculum, a safe learning environment, and clear expectations for both students and staff. This is the foundation on which meaningful academic achievement is built.
                </p>
              </div>
              <div className="mt-6 pl-6 sm:pl-8">
                <p className="font-semibold text-navy">The Principal</p>
                <p className="text-sm text-text-secondary">Mubarik Science Academy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}