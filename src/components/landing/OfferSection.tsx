const offers = [
  { title: "Instagram & Reels Management", desc: "3-5 posts/week of professional content that builds trust before the call happens" },
  { title: "Meta Ads (Facebook + Instagram)", desc: "Targeted ads to homeowners in your service area. We set up, manage, and optimize every campaign" },
  { title: "Custom Content Carousels", desc: "Educational and trust-building carousel posts that position you as the expert in your trade" },
  { title: "Monthly Strategy Calls", desc: "Direct calls with Arjun every month to review results and adjust strategy" },
  { title: "Landing Page Design", desc: "A dedicated page built to convert ad traffic into booked estimates" },
  { title: "Monthly Performance Reports", desc: "Clear, no-BS reports showing exactly what's working and what's not" },
];

const valueStack = [
  { item: "Instagram Management", price: "$1,200/mo" },
  { item: "Meta Ads Management", price: "$800/mo" },
  { item: "Content Creation", price: "$600/mo" },
  { item: "Strategy Calls", price: "$400/mo" },
  { item: "Landing Page", price: "$1,500 one-time" },
];

const OfferSection = () => (
  <section className="section-light px-4 py-16 md:py-24">
    <div className="mx-auto max-w-4xl">
      <div className="text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-purple">
          WHAT YOU GET WITH AP DIGITAL
        </p>
        <h2 className="mb-12 font-inter text-3xl font-black leading-tight text-secondary md:text-5xl">
          Everything you need to dominate your local market. Nothing you don't.
        </h2>
      </div>

      <div className="mb-12 space-y-6">
        {offers.map((o, i) => (
          <div key={i} className="flex gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple text-sm font-bold text-white">
              {i + 1}
            </span>
            <div>
              <h3 className="font-inter text-lg font-bold text-secondary">{o.title}</h3>
              <p className="text-navy/70">{o.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-lg rounded-lg border-2 border-purple/20 bg-muted p-6 md:p-8">
        <div className="space-y-2 text-secondary">
          {valueStack.map((v) => (
            <div key={v.item} className="flex justify-between text-sm md:text-base">
              <span>{v.item}</span>
              <span className="line-through text-navy/40">{v.price}</span>
            </div>
          ))}
        </div>
        <div className="my-4 border-t border-border" />
        <div className="flex justify-between text-sm font-bold text-navy/50 line-through md:text-base">
          <span>TOTAL VALUE</span>
          <span>$4,500/mo</span>
        </div>
        <div className="mt-2 flex justify-between text-lg font-black text-purple md:text-xl">
          <span>YOUR INVESTMENT</span>
          <span>Starting at $997/mo</span>
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href="mailto:apdigital.core@gmail.com"
          className="inline-block w-full max-w-md rounded-md bg-purple px-8 py-4 text-center text-lg font-bold uppercase tracking-wide text-white transition-all hover:brightness-110 active:scale-[0.98]"
        >
          GET STARTED — BOOK A FREE CALL →
        </a>
      </div>
    </div>
  </section>
);

export default OfferSection;
