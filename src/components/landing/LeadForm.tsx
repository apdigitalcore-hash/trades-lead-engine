import { FormEvent } from "react";

const LeadForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `Name: ${data.get("name")}\nTrade Type: ${data.get("trade")}\nCity: ${data.get("city")}\nPhone: ${data.get("phone")}`;
    window.location.href = `mailto:apdigital.core@gmail.com?subject=Trades Marketing Strategy Call - ${data.get("trade")} in ${data.get("city")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="section-light px-4 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-3 text-center font-inter text-3xl font-black text-secondary md:text-4xl">
          Get a Free BC Trades Marketing Strategy Call
        </h2>
        <p className="mb-8 text-center text-base text-navy/60 md:text-lg leading-relaxed">
          20 minutes. No obligation. We'll tell you exactly how many leads are available in your trade and city.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            required
            className="w-full rounded-lg border border-purple/20 bg-white px-4 py-3 text-secondary placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-purple text-sm md:text-base"
          />
          <select
            name="trade"
            required
            className="w-full rounded-lg border border-purple/20 bg-white px-4 py-3 text-secondary focus:outline-none focus:ring-2 focus:ring-purple text-sm md:text-base"
          >
            <option value="" disabled>Trade Type</option>
            <option>Plumber</option>
            <option>Electrician</option>
            <option>HVAC</option>
            <option>Roofer</option>
            <option>General Contractor</option>
            <option>Landscaper</option>
            <option>Other</option>
          </select>
          <input
            name="city"
            type="text"
            placeholder="City in BC"
            required
            className="w-full rounded-lg border border-purple/20 bg-white px-4 py-3 text-secondary placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-purple text-sm md:text-base"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full rounded-lg border border-purple/20 bg-white px-4 py-3 text-secondary placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-purple text-sm md:text-base"
          />
          <button
            type="submit"
            className="w-full rounded-lg py-4 text-base font-extrabold tracking-wide text-white transition-colors duration-200 md:text-lg"
            style={{ background: "hsl(25, 95%, 53%)" }}
          >
            Get My Free Trades Marketing Call
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
