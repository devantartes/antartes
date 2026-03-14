import React from "react";
import PricingCardProps from "../components/PricingCardProps";
// import HeroSection from "../components/HeroSection";
import { ButtonBG } from "../components/ui/button";
import getStartedImg from "../assets/image/get-started-img.png";
import { useNavigate } from "react-router-dom";
import { Checkmark } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";


//  const Data = [
//   {
//     title: "Hello",
//     subtext: "hello world",
//     button: "submit"
//   },
//   {
//     title: "Hello 2",
//     subtext: "hello world 2",
//     button: "submit 2"
//   },
//   {
//     title: "Hello 2",
//     subtext: "hello world 2",
//     button: "submit 2"
//   }

// ]

const Pricing: React.FC = () => {
    const navigate = useNavigate();

  return (
    <>
      {/* <HeroSection /> */}

      <div className="md:px-20 md:py-20 px-10 py-10 text-white bg-black pt-30! md:pt-40! text-center z-10">
        <h1 className="text-4xl font-bold">
          Transparent Pricing for <br /> Professional Digital Solutions
        </h1>
        <p className="md:w-[70%] mx-auto mt-5 mb-20 w-full">
          We offer clear, flexible pricing packages designed for businesses and
          organizations looking to build high-quality digital products.
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-center ">
        <div className="w-full flex items-center justify-center ">
          <PricingCardProps
            title="Starter Website"
            subtext="Up to 6 pages "
            subtext2="Basic branding support "
            subtext3="Hosting setup "
            subtext4="Basic SEO configuration "
            subtext5="2 weeks post-launch support"
            subtext6="1 training session"
            buttontext="Get Started"
            Prices="$400 ~ $700/"
            icon={<HugeiconsIcon
                  icon={Checkmark}
                  className="text-green-500 text-[16px] mx-1"
                />}
            classname="flex flex-col bg-black text-white items-center justify-center"
          />

          
          <PricingCardProps
            title="Premium custom Website"
            subtext="Fully customized internal system (ERP, LMS, portal, automation) "
            subtext2="Advanced cloud/server architecture "
            subtext3="Advanced cybersecurity implementation "
            subtext4="3 months priority support "
            subtext5="Comprehensive staff onboarding"
            subtext6=""
            buttontext="Get Started"
            Prices="$3000 ~ $5000/"
                icon={<HugeiconsIcon
                  icon={Checkmark}
                  className="text-green-500 text-[16px] mx-1"
                />}
            classname="flex flex-col bg-black text-white items-center justify-center"
          />

            <PricingCardProps
            title="Professional Website"
            subtext="Custom website or web platform "
            subtext2="Admin dashboard (if required)"
            subtext3="Payment integration"
            subtext4="Email system setup"
            subtext5="1 month post-launch support"
            subtext6="2 training session"
            subtext7="Security Configuration"
            buttontext="Get Started"
            Prices="$1000 ~ $1500/"
                icon={<HugeiconsIcon
                  icon={Checkmark}
                  className="text-green-500 text-[16px] mx-1"
                />}
            classname="flex flex-col bg-black text-white items-center justify-center"
          />

        
   
          {/* <div className="flex">
      {

      Data.map((items, i) => (

        <div key={i}>
          <PricingCardProps title={items.title} subtext={items.subtext} classname="bg-blue-500 rounded-2xl" buttontext={items.button}/>
        </div>
      ) 

      )
      }
    </div> */}
        </div>
               <p className="mt-[-20px] pb-10 text-[16px]">

            Note: Prices shown are estimates. Final pricing may vary depending on project requirements and scope.
          </p>
              <div className="md:mx-20 mx-10 mb-20 md:px-20 px-10 py-10 bg-black  relative rounded-4xl flex flex-col overflow-hidden border border-body">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="625"
          height="778"
          viewBox="0 0 625 778"
          fill="none"
          className="absolute bottom-0 left-0"
        >
          <g filter="url(#filter0_f_546_150)">
            <ellipse
              cx="225.681"
              cy="388.87"
              rx="48.5"
              ry="108.777"
              transform="rotate(129.686 225.681 388.87)"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_546_150"
              x="-173.599"
              y="0"
              width="798.56"
              height="777.741"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="155"
                result="effect1_foregroundBlur_546_150"
              />
            </filter>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="604"
          height="770"
          viewBox="0 0 604 770"
          fill="none"
          className="absolute top-0 right-0"
        >
          <g filter="url(#filter0_f_546_149)">
            <ellipse
              cx="402.598"
              cy="384.944"
              rx="48.5"
              ry="108.777"
              transform="rotate(125.92 402.598 384.944)"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_546_149"
              x="0"
              y="0"
              width="805.196"
              height="769.887"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="155"
                result="effect1_foregroundBlur_546_149"
              />
            </filter>
          </defs>
        </svg>
        <div className="text-center text-white z-3">
          <h1 className="md:text-4xl text-2xl font-bold">
            Need something custom?
          </h1>
          <p className="text-white/75 mt-3">
        Every project is unique. If your requirements go beyond the packages listed above, our team can design a tailored solution that fits your goals and budget.
          </p>
          <p className="text-white/75 mt-3">
          Our process includes discovery, planning, design, development, and deployment to ensure a smooth and successful project delivery.
          </p>
          <p className="text-white/75 mt-3">

Start a conversation with our team to discuss your project
          </p>
        </div>
        <div className="w-fit mt-15 mx-auto z-3">
          <ButtonBG onClick={() => navigate("/get-started")}>
            Get Started
          </ButtonBG>
          <img
            src={getStartedImg}
            alt="get-started-img"
            className="relative left-[calc(100%-60px)] hidden md:block"
            draggable={false}
          />
        </div>
      </div>
      </div>
    </>
  );
};

export default Pricing;
