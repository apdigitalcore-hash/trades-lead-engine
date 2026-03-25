import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How fast will I see results?",
    a: "Most clients see their first leads within the first 2 weeks of running ads. Organic Instagram growth takes 60-90 days to compound. We set realistic expectations on our first call.",
  },
  {
    q: "Do I have to sign a long-term contract?",
    a: "No lock-in contracts. We work month-to-month because we believe results should keep you here — not a contract.",
  },
  {
    q: "What if I've tried marketing agencies before and it didn't work?",
    a: "That's the most common thing we hear. The difference is niche expertise and founder-direct service. Most agencies have never been on a job site. We've built our entire system around how trades businesses actually operate.",
  },
  {
    q: "Will Arjun personally handle my account?",
    a: "Yes. There is no team, no account managers, no outsourcing. Arjun personally manages every client account. That's the model and it's not changing.",
  },
  {
    q: "What's the minimum budget I need for ads?",
    a: "We recommend a minimum ad spend of $500/month. Most clients start between $500-$1,500/month and scale up once they see the ROI.",
  },
];

const FAQSection = () => (
  <section className="section-dark px-4 py-16 md:py-24">
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-12 text-center font-inter text-3xl font-black md:text-5xl">
        Questions about no-contract trades marketing? Answered.
      </h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="rounded-lg border-none bg-navy-light px-6"
          >
            <AccordionTrigger className="text-left font-inter font-bold text-white hover:no-underline [&>svg]:text-purple">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-white/70 leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
