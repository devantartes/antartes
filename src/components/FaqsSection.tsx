import FaqAccordion from "./FaqAccordion";



export default function FaqsSection({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <div className="md:px-20 md:py-20 px-10 py-10" id="faq-section">
      <h1 className="text-4xl md:text-5xl font-bold font-poppins leading-tight">
        Frequently Asked Questions
      </h1>
      <p className="text-black/60">
        Quick answers to common questions to help you understand how we work.
      </p>

      <div className="mt-10 space-y-15">
        {faqs.map((faq, index) => (
          <FaqAccordion key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
}
