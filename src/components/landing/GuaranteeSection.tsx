import { Shield } from "lucide-react";

const GuaranteeSection = () => (
  <section className="section-light px-4 py-16 md:py-24">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="mb-6 font-inter text-3xl font-black text-secondary leading-tight md:text-5xl">
        If you don't get results in 30 days, you don't pay for month 2.
      </h2>
      <p className="mx-auto mb-10 max-w-xl leading-relaxed text-navy/70">
        We're so confident in our system that if we don't generate measurable results — leads, booked calls, or meaningful Instagram growth — in your first 30 days, your second month is free. That's how confident we are. That's how different we are.
      </p>

      <div className="mx-auto inline-flex items-center gap-3 rounded-lg border-2 border-purple/30 bg-purple/5 px-6 py-4">
        <Shield className="h-8 w-8 text-purple" />
        <span className="font-inter text-lg font-black uppercase tracking-wide text-purple">
          30-Day Results Guarantee
        </span>
      </div>
    </div>
  </section>
);

export default GuaranteeSection;
