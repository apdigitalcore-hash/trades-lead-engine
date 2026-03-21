import { Play } from "lucide-react";

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

      <div className="mx-auto mb-10 flex aspect-video max-w-2xl items-center justify-center rounded-lg bg-navy-light border border-white/10">
        <div className="flex flex-col items-center gap-4">
          <button className="flex h-16 w-16 items-center justify-center rounded-full bg-purple transition-transform hover:scale-105 active:scale-95">
            <Play className="h-7 w-7 fill-white text-white ml-1" />
          </button>
          <span className="px-4 text-sm font-medium text-white/50">
            Watch: How We Get BC Trades Businesses 30+ Leads/Month
          </span>
        </div>
      </div>

      <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/70">
        AP Digital is a Pitt Meadows BC agency that handles your entire digital marketing — Instagram content, Reels, Meta Ads — done for you by founder Arjun Sharma personally. Not an account manager. Not an intern. Arjun.
      </p>

      <a
        href="#book-call"
        className="inline-block w-full max-w-md rounded-md bg-purple px-8 py-4 text-center text-lg font-bold uppercase tracking-wide text-white transition-all hover:brightness-110 active:scale-[0.98]"
      >
        BOOK YOUR FREE STRATEGY CALL →
      </a>
    </div>
  </section>
);

export default HeroSection;
