import { Checkmark } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

type CardProps = {
  title: string;
  subtext: string;
  subtext2: string;
  subtext3: string;
  subtext4: string;
  subtext5: string;
  subtext6: string;
  subtext7?: string;
  classname: string;
  buttontext: string;
  Prices: string;
  icon?: React.ReactNode;
};

const PricingCardProps: React.FC<CardProps> = ({
  title,
  subtext,
  subtext2,
  subtext3,
  subtext4,
  subtext5,
  subtext6,
  subtext7,
  classname,
  buttontext,
  Prices,
  icon
}) => {
  return (
    <div className="w-full flex justify-center items-center min-h-svh">
      <div className={`${classname} w-[375px] rounded-2xl`}>
        <div className="w-[90%]">
          <div className="w-full">
            <h1 className="font-poppins font-semibold font-[600px] text-[20px] mb-3 py-4">
              {title}
            </h1>
            <ul className="flex flex-col">
              <li className="my-2 text-[16px] font=poppins font-[400px] flex items-center">
                {icon}

                {subtext}
              </li>
              <li className="my-2 text-[16px] font=poppins font-[400px] flex items-center">
                {icon}

                {subtext2}
              </li>
              <li className="my-2 text-[16px] font=poppins font-[400px] flex items-center">
               {icon}

                {subtext3}
              </li>
              <li className="my-2 text-[16px] font=poppins font-[400px] flex items-center">
               {icon}

                {subtext4}
              </li>
              <li className="my-2 text-[16px] font=poppins font-[400px] flex items-center">
               {icon}

                {subtext5}
              </li>
              <li className="my-2 text-[16px] font=poppins font-[400px] flex items-center">
               {icon}

                {subtext6}
              </li>
              <li className="my-2 text-[16px] font=poppins font-[400px] flex items-center">
               {icon}

                {subtext7}
              </li>
            </ul>
          </div>
          <div className="w-full py-7">
            <h3 className="font-poppins- font-bold text-[20px] py-10">
              {Prices}{" "}
              <span className="text-[12px] font-poppins font-normal">
                one time
              </span>
            </h3>
            <button className="cursor-pointer bg-[#7FFBAE] py-3 w-full rounded-full text-black text-[16px] font-poppins">
              {buttontext}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCardProps;
