import HeroSection from "@/components/landing/HeroSection";
import SocialProofBar from "@/components/landing/SocialProofBar";
import ProblemSection from "@/components/landing/ProblemSection";
import OfferSection from "@/components/landing/OfferSection";
import WhoIsThisFor from "@/components/landing/WhoIsThisFor";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import StickyMobileCTA from "@/components/landing/StickyMobileCTA";
import LeadForm from "@/components/landing/LeadForm";

const Index = () => (
  <main className="overflow-x-hidden">
    <HeroSection />
    <LeadForm />
    <SocialProofBar />
    <ProblemSection />
    <OfferSection />
    <TestimonialsSection />
    <WhoIsThisFor />
    <FAQSection />
    <GuaranteeSection />
    <FinalCTA />
    <LeadForm />
    <Footer />
    <StickyMobileCTA />
  </main>
);

export default Index;
