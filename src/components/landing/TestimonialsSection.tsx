import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Before AP Digital I was getting maybe 2-3 leads a week from referrals. First month with Arjun we got 31 booked estimates from Instagram and Facebook alone. The content actually looks professional.",
    name: "Mike T.",
    role: "HVAC Owner, Surrey BC",
    initials: "MT",
  },
  {
    quote: "I was skeptical because I'd been burned by agencies before. Arjun is different — he texts me updates, I can see the ads dashboard anytime, and the results speak for themselves. Best decision I made this year.",
    name: "Dave R.",
    role: "General Contractor, Langley BC",
    initials: "DR",
  },
];

const TestimonialsSection = () => (
  <section className="section-light px-4 py-16 md:py-24">
    <div className="mx-auto max-w-5xl">
      <h2 className="mb-12 text-center font-inter text-3xl font-black text-secondary md:text-5xl">
        What clients are saying:
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="rounded-lg border-t-4 border-purple bg-muted p-6 md:p-8"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple text-sm font-bold text-white">
                {t.initials}
              </div>
              <div>
                <p className="font-bold text-secondary">{t.name}</p>
                <p className="text-sm text-navy/60">{t.role}</p>
              </div>
            </div>
            <p className="mb-4 leading-relaxed text-navy/80 italic">"{t.quote}"</p>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
