import PageHero from "@/components/PageHero";

export default function ServicesPage() {
  const services = [
    {
      title: "Residential Construction",
      desc: "Tailored custom homes, additions, and multi-unit townhouses built to last.",
    },
    {
      title: "Deck & Patio Building",
      desc: "Aluminum, composite, or wood decks—expand your living space outdoors.",
    },
    {
      title: "Roof Repairs & Replacements",
      desc: "Shingle, metal, or flat roofing—protect your home from the top down.",
    },
    {
      title: "Bathroom Remodels",
      desc: "Modern tile, accessible layouts, and spa-style finishes.",
    },
  ];

  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Residential builds, decks, roofs, baths & more."
      />

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="p-6 bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-brand-blue">
                {svc.title}
              </h3>
              <p className="text-gray-700">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
