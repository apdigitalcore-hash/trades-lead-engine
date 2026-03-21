import { useState } from "react";

const businessTypes = [
  "Plumber",
  "Electrician",
  "HVAC",
  "Roofer",
  "General Contractor",
  "Landscaper",
  "Other",
];

const FinalCTA = () => {
  const [form, setForm] = useState({ name: "", business: "", city: "", phone: "" });

  return (
    <section id="book-call" className="section-dark px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple/30 bg-purple/10 px-4 py-2 text-sm font-medium text-purple">
          <span className="inline-block h-2 w-2 rounded-full bg-purple animate-pulse" />
          LIMITED SPOTS AVAILABLE — BC TRADES ONLY
        </div>

        <h2 className="mb-4 font-inter text-3xl font-black uppercase leading-[0.95] tracking-tight md:text-6xl">
          READY TO STOP LOSING JOBS TO COMPETITORS?
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60">
          Book a free 20-minute strategy call. We'll audit your current online presence, show you exactly what competitors are doing, and give you a custom game plan — whether you work with us or not.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto max-w-md space-y-4"
        >
          <input
            type="text"
            placeholder="First Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-md bg-white px-4 py-3 text-secondary font-medium placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-purple"
          />
          <select
            value={form.business}
            onChange={(e) => setForm({ ...form, business: e.target.value })}
            className="w-full rounded-md bg-white px-4 py-3 text-secondary font-medium focus:outline-none focus:ring-2 focus:ring-purple"
          >
            <option value="" disabled>Business Type</option>
            {businessTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="City"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            className="w-full rounded-md bg-white px-4 py-3 text-secondary font-medium placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-purple"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-md bg-white px-4 py-3 text-secondary font-medium placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-purple"
          />
          <button
            type="submit"
            className="w-full rounded-md bg-purple px-8 py-4 text-lg font-bold uppercase tracking-wide text-white transition-all hover:brightness-110 active:scale-[0.98]"
          >
            BOOK MY FREE STRATEGY CALL →
          </button>
        </form>

        <p className="mt-4 text-sm text-white/40 leading-relaxed">
          No commitment. No sales pressure. 20 minutes.<br />
          Arjun will personally review your business before the call.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
