import { useEffect } from "react";

const CALENDLY_URL = "https://calendly.com/apdigital-core/30min?background_color=0f1629&text_color=ffffff&primary_color=6c47ff";

const FinalCTA = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="book-call" className="section-dark px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple/30 bg-purple/10 px-4 py-2 text-sm font-medium text-purple">
          <span className="inline-block h-2 w-2 rounded-full bg-purple animate-pulse" />
          LIMITED SPOTS AVAILABLE — BC TRADES ONLY
        </div>

        <h2 className="mb-4 font-inter text-3xl font-black uppercase leading-[0.95] tracking-tight md:text-6xl">
          Book Your Free 30-Min Strategy Call
        </h2>

        <p className="mx-auto mb-6 max-w-2xl text-lg text-white/60">
          Pick a time that works for you. Arjun will personally review your business before the call — no prep needed on your end.
        </p>

        <p className="mb-6 text-sm font-semibold" style={{ color: "#f59e0b" }}>
          ⚡ Only 3 new client spots open this month in BC
        </p>

        <div
          className="mx-auto overflow-hidden rounded-2xl border border-purple"
          style={{ maxWidth: 700 }}
        >
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            style={{ minWidth: 320, height: 700 }}
          />
        </div>

        <p className="mt-6 text-sm text-white/40 leading-relaxed">
          No commitment. No sales pressure. 20 minutes.<br />
          Arjun will personally review your business before the call.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;