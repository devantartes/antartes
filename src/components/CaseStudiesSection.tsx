import CaseStudyCard from "./CaseStudyCard";
import storyImg1 from "../assets/image/story1-img.png";
import storyImg2 from "../assets/image/story2-img.png";
import storyImg3 from "../assets/image/story3-img.png";

const caseStudies: {
  image: string;
  title: string;
  description: string;
  link: string;
}[] = [
  {
    title: "School Management System",
    description:
      "A secure and easy-to-use platform that helps schools manage student records, results, and academic operations from one centralized system.",
    image: storyImg1,
    link: "#",
  },
  {
    title: "E-commerce Platform",
    description:
      "A secure and easy-to-use platform that helps e-commerce businesses manage their online stores, inventory, and customer orders from one centralized system.",
    image: storyImg2,
    link: "#",
  },
  {
    title: "Healthcare Management System",
    description:
      "A secure and easy-to-use platform that helps healthcare providers manage patient records, appointments, and billing from one centralized system.",
    image: storyImg3,
    link: "#",
  },
  {
    title: "FinTech Platform",
    description:
      "A secure and easy-to-use platform that helps financial institutions manage their customer data, transactions, and compliance from one centralized system.",
    image: storyImg1,
    link: "#",
  },
  {
    title: "E-commerce Platform",
    description:
      "A secure and easy-to-use platform that helps e-commerce businesses manage their online stores, inventory, and customer orders from one centralized system.",
    image: storyImg1,
    link: "#",
  },
];
export default function CasesSection() {
  return (
    <div className="md:py-20 py-10" id="cases-section">
      <div className="md:px-20 px-10 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-poppins leading-tight">
          Cases Studies
        </h1>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-8 overflow-x-auto pb-8 px-6 md:px-20 no-scrollbar snap-x snap-mandatory scroll-smooth">
          {caseStudies.map((caseStudy, i) => (
            <div key={i} className="snap-center">
              <CaseStudyCard caseStudy={caseStudy} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
