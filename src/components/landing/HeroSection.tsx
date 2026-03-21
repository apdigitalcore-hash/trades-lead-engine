const CALENDLY = "https://calendly.com/apdigital-core/30min";

const stats = [
  { number: "31", label: "LEADS GENERATED", desc: "First 30 days — HVAC client, Surrey BC" },
  { number: "3.2x", label: "RETURN ON AD SPEND", desc: "Meta Ads — General Contractor, Langley BC" },
  { number: "4,200", label: "INSTAGRAM FOLLOWERS", desc: "0 to 4,200 in 90 days — Trades client BC" },
  { number: "$14", label: "COST PER LEAD", desc: "Meta Lead Ads — Plumber, Metro Vancouver" },
];

const HeroSection = () => (
  <section className="section-dark px-4 py-16 md:py-24">
    <div className="mx-auto max-w-4xl text-center">
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple/30 bg-purple/10 px-4 py-2 text-sm font-medium text-purple">
        <span className="inline-block h-2 w-2 rounded-full bg-purple animate-pulse" />
        DIGITAL MARKETING FOR TRADES | BC CANADA
      </div>

      <h1 className="mb-6 font-inter text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
        IS YOUR COMPETITOR STEALING YOUR CUSTOMERS WHILE YOU'RE ON THE JOB?
      </h1>

      <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60 md:text-xl">
        We run your Instagram, Reels, and Meta Ads so trades businesses in BC get booked out — without you lifting a finger
      </p>

      <div className="mx-auto mb-10 max-w-[680px]">
        <p className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-purple">
          <span className="inline-block h-2 w-2 rounded-full bg-purple mr-2 align-middle" />
          REAL CLIENT RESULTS — BC CANADA
        </p>
        <div
          className="rounded-2xl border border-purple p-6 md:p-10"
          style={{
            background: "#0a0e1a",
            boxShadow: "0 0 40px rgba(108,71,255,0.15)",
          }}
        >
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {stats.slice(0, 2).map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="text-[40px] font-black leading-none text-white md:text-[52px]">{s.number}</div>
                <div className="mt-2 text-[13px] font-bold uppercase tracking-wider text-purple">{s.label}</div>
                <div className="mt-1 text-[12px]" style={{ color: "#9394a0" }}>{s.desc}</div>
              </div>
            ))}
          </div>
          <div className="my-6 h-px bg-purple/25" />
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {stats.slice(2).map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="text-[40px] font-black leading-none text-white md:text-[52px]">{s.number}</div>
                <div className="mt-2 text-[13px] font-bold uppercase tracking-wider text-purple">{s.label}</div>
                <div className="mt-1 text-[12px]" style={{ color: "#9394a0" }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/70">
        AP Digital is a Pitt Meadows, BC agency serving trades businesses across Metro Vancouver, Surrey, Langley, Burnaby, and Coquitlam. We handle your entire digital marketing — Instagram content, Reels, Meta Ads — done for you by founder Arjun Sharma personally. Not an account manager. Not an intern. Arjun.
      </p>

      <a
        href={CALENDLY}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full max-w-md rounded-md bg-purple px-8 py-4 text-center text-lg font-bold uppercase tracking-wide text-white transition-all hover:brightness-110 active:scale-[0.98]"
      >
        BOOK YOUR FREE STRATEGY CALL →
      </a>
    </div>
  </section>
);

export default HeroSection;