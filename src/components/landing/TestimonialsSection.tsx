import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "We were slow in January and February every year. Now we keep the trucks running year-round. AP Digital changed how we get work.",
    name: "Mike T.",
    role: "General Contractor — Surrey, BC",
    initials: "MT",
  },
  {
    quote: "Arjun personally manages our account and actually answers texts. I've never had that from an agency before.",
    name: "Raj P.",
    role: "Plumber — Langley, BC",
    initials: "RP",
  },
  {
    quote: "Started at $500/month ad spend. Made it back on the first job. Now we're spending $1,500 and fully booked out 6 weeks.",
    name: "David C.",
    role: "Electrician — Burnaby, BC",
    initials: "DC",
  },
];

const TestimonialsSection = () => (
  <section className="section-light px-4 py-16 md:py-24">
    <div className="mx-auto max-w-5xl">
      <h2 className="mb-12 text-center font-inter text-3xl font-black text-secondary md:text-5xl">
        What BC Trades Are Saying
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="rounded-lg border-t-4 border-purple bg-muted p-6 md:p-8"
          >
            <div className="mb-4 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="mb-6 leading-relaxed text-navy/80 italic">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple text-sm font-bold text-white">
                {t.initials}
              </div>
              <div>
                <p className="font-bold text-secondary">{t.name}</p>
                <p className="text-sm text-navy/60">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
