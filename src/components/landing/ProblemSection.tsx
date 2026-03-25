const problems = [
  "You're paying a generic agency that doesn't know the difference between a plumber and an electrician",
  "You're posting on Instagram but getting zero leads — just likes from other contractors",
  "Your competitors across Metro Vancouver, Maple Ridge, and Abbotsford are running ads, showing up on Instagram, and booking the jobs that should be yours",
];

const ProblemSection = () => (
  <section className="section-dark px-4 py-16 md:py-24">
    <div className="mx-auto max-w-5xl text-center">
      <p className="mb-4 text-sm font-bold uppercase tracking-widest text-purple">
        WHY MOST TRADES BUSINESSES STAY STUCK
      </p>
      <h2 className="mb-12 font-inter text-3xl font-black leading-tight md:text-5xl">
          BC Plumber, Electrician &amp; HVAC Lead Generation starts with the right system — not more posting.
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {problems.map((text, i) => (
          <div
            key={i}
            className="rounded-lg border-l-4 border-purple bg-navy-light p-6 text-left text-white/80"
          >
            <p className="leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;