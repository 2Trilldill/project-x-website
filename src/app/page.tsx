// src/app/page.tsx
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      {/* Hero: full viewport height, pulled up under the transparent navbar */}
      <section className="relative h-screen -mt-16">
        <Image
          src="/hero.png"
          alt="Construction site"
          fill
          className="object-cover object-top"
          priority
        />

        {/* Overlay + centered text */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          {/* pt-16 ensures the text sits just below the navbar */}
          <div className="pt-16 text-center px-4 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">
              Building the Future,
              <br />
              Beam by Beam
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              From groundbreaking to grand opening, we deliver innovative, safe,
              and sustainable construction solutions.
            </p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-steel-gray mb-4">
            About Us
          </h2>
          <p className="text-gray-700">
            Project X Construction Co. blends decades of expertise in commercial,
            institutional, and industrial projects—committed to safety, quality,
            and sustainability.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-steel-gray text-center mb-8">
            Our Services
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Commercial Builds",
                desc: "Office, retail & mixed-use projects.",
              },
              {
                title: "Renovations",
                desc: "Historic restorations & modern upgrades.",
              },
              {
                title: "Site Management",
                desc: "End-to-end project coordination.",
              },
            ].map((svc) => (
              <div
                key={svc.title}
                className="p-6 bg-white rounded-xl shadow hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-2 text-brand-blue">
                  {svc.title}
                </h3>
                <p className="text-gray-600">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-blue text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4">Ready to build?</h2>
          <p className="mb-6">Get in touch to discuss your next project.</p>
          <a
            href="/contact"
            className="inline-block bg-safety-yellow text-steel-gray font-semibold px-8 py-3 rounded-full hover:bg-yellow-400 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
