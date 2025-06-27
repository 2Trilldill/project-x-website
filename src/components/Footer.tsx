export default function Footer() {
  return (
    <footer className="bg-steel-gray-900 text-steel-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
        {/* Company Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">
            Project X Construction
          </h3>
          <p className="text-sm">&copy; 2025 Project X Construction Co.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            {["Home","About","Services","Contact"].map((link) => (
              <li key={link}>
                <a
                  href={ link === "Home" ? "/" : `/${link.toLowerCase()}` }
                  className="hover:text-safety-yellow transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Contact</h3>
          <address className="not-italic text-sm space-y-1">
            <div>123 Beam St.</div>
            <div>Buildtown, USA</div>
            <div>info@projectxconstructionco.com</div>
            <div>(555) 123-4567</div>
          </address>
        </div>
      </div>
    </footer>
  );
}
