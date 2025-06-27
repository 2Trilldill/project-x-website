import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="Let’s discuss your next project—beam by beam."
      />

      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <form className="grid gap-6">
            <label className="block">
              <span className="text-steel-gray">Name</span>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-steel-gray">Email</span>
              <input
                type="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="you@example.com"
              />
            </label>
            <label className="block">
              <span className="text-steel-gray">Message</span>
              <textarea
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                rows={5}
                placeholder="Tell us about your project..."
              />
            </label>
            <button
              type="submit"
              className="self-start bg-safety-yellow text-steel-gray font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
