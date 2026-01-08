import ClientGeographySection from "../components/ClientGeographySection";
import FaqsSection from "../components/FaqsSection";
import GetStartedSection from "../components/GetStartedSection";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import CasesSection from "../components/CaseStudiesSection";
import TestimonySection from "../components/TestimonySection";
import ellipseGlow from "../assets/image/ellipse-glow.png";

const faqs: { question: string; answer: string }[] = [
  {
    question: "What is Antartes?",
    answer:
      "Antartes is a digital marketing agency that helps businesses grow their online presence and increase their revenue.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services including SEO, PPC advertising, social media management, content marketing, and web design.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "While some results like PPC can be immediate, SEO and content marketing typically take 3-6 months to show significant impact.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes, we tailor our strategies to fit businesses of all sizes, from startups to established enterprises.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We track key performance indicators (KPIs) such as website traffic, conversion rates, and return on investment (ROI) to ensure your goals are met.",
  },
  {
    question: "How can I get started with Antartes?",
    answer:
      "You can start by booking a free consultation through our contact form, where we'll discuss your business needs and goals.",
  },
];
export default function Home() {
  return (
    <main id="home">
      <div className="absolute -top-20 w-full z-0">
        <div className="flex w-full justify-center">
          <img src={ellipseGlow} alt="header-ellipse" draggable={false} />
        </div>
      </div>
      <HeroSection />
      <ServicesSection />
      <CasesSection />
      <ClientGeographySection />
      <TestimonySection />
      <FaqsSection faqs={faqs} />
      <GetStartedSection />
    </main>
  );
}
