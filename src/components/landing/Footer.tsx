const Footer = () => (
  <footer className="section-dark px-4 py-8 text-center text-sm text-white/40 space-y-2">
    <p>© 2026 AP Digital — Pitt Meadows, BC Canada</p>
    <p>📧 apdigital.core@gmail.com</p>
    <p>
      Book a call:{" "}
      <a
        href="https://calendly.com/apdigital-core/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple hover:underline"
      >
        calendly.com/apdigital-core/30min
      </a>
    </p>
    <p>
      <a href="https://ap-digital.ca" className="hover:text-white/70 underline transition-colors duration-200">
        ← Back to AP Digital | Full-Service Digital Marketing
      </a>
    </p>
  </footer>
);

export default Footer;