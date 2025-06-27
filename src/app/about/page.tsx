import PageHero from "@/components/PageHero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Owners Miles Austin & Desmond Bentley — proudly serving Lenoir & surrounding counties since 2024."
      />

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-steel-gray">
          <p>
            Founded in 2024 by lifelong friends Miles Austin and Desmond Bentley, Project X Construction LLC blends hometown grit with precision craft. Born and raised in Lenoir, North Carolina, our owners poured their roots into every beam and blueprint—and they treat each project like it’s their own backyard.
          </p>
          <p>
            From ground-up custom homes to backyard decks and interior renovations, our transparent communication, spotless jobsites, and unwavering quality standards mean you’ll always know what’s happening—and love the result.
          </p>
          <p>
            We’re not just builders—we’re your neighbors. Expect honest estimates, clear timelines, and a finished product you’ll be proud to call “home.” Let us build your future, beam by beam.
          </p>
        </div>
      </section>
    </>
  );
}
