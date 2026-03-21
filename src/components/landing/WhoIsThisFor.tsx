import { Check, X } from "lucide-react";

const yesItems = [
  "You're a trades business in BC (plumber, electrician, HVAC, roofer, contractor, landscaper)",
  "You want more inbound leads without relying on word of mouth",
  "You're ready to invest in marketing and want real results",
  "You want one person handling everything — not a big agency team",
  "You want leads within the first 30 days, not 6 months",
];

const noItems = [
  "You're looking for the cheapest option possible",
  "You want to micromanage every post",
  "You have zero budget for ads",
  "You're not serious about growing your business this year",
];

const WhoIsThisFor = () => (
  <section className="section-dark px-4 py-16 md:py-24">
    <div className="mx-auto max-w-5xl">
      <h2 className="mb-12 text-center font-inter text-3xl font-black md:text-5xl">
        This is for you if...
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          {yesItems.map((item, i) => (
            <div key={i} className="flex gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-green" />
              <p className="text-white/80">{item}</p>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {noItems.map((item, i) => (
            <div key={i} className="flex gap-3">
              <X className="mt-0.5 h-5 w-5 shrink-0 text-red" />
              <p className="text-white/80">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhoIsThisFor;
