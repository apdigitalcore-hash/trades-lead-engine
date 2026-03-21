const stats = [
  { number: "47", label: "Leads in 30 Days — HVAC Surrey BC" },
  { number: "3.2x", label: "Average Return on Ad Spend" },
  { number: "100%", label: "Clients Get Personal Founder Access" },
  { number: "$0", label: "Extra Cost for Content + Ads Together" },
];

const SocialProofBar = () => (
  <section className="section-light px-4 py-14">
    <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
      {stats.map((s) => (
        <div key={s.number} className="text-center">
          <div className="font-inter text-4xl font-black text-purple md:text-5xl">{s.number}</div>
          <p className="mt-2 text-sm font-medium text-navy/70">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default SocialProofBar;
