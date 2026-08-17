import React, { useState } from "react";
import Image from "next/image";

type Props = {};

const StatsPC = (props: Props) => {
  const [tooltipStatus, setTooltipStatus] = useState(0);
  return (
    <div className="hidden lg:block">
      <p className="font-heading text-center text-4xl py-10 bg-brandPink4 font-bold">
        ನೀವು ನಿಮ್ಮ ಬಂಜೆತನ ಚಿಕಿತ್ಸೆಗಾಗಿ ಗರ್ಭಗುಡಿಯನ್ನು ನಂಬಬಹುದು
      </p>
      <div className="max-w-lg md:max-w-4xl mx-auto align-middle mt-4">
        <div className="text-center ">
          <div className="grid grid-cols-4 grid-rows-4 font-content ">
            <div>
              <div
                className="h-[130px] w-[130px] flex flex-col items-center justify-center rounded-full mx-auto my-4 -mt-2 -mr-4"
                onMouseEnter={() => setTooltipStatus(1)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <Image
                  src="https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms7ai6od08vm08pkbu54elhs"
                  alt="11+ years"
                  className="hover:scale-115 transition-all duration-500"
                  width={200}
                  height={200}
                  loading="lazy"
                />

                {tooltipStatus == 1 && (
                  <div className="absolute mt-44 text-sm">
                    Extensive Exprerience
                  </div>
                )}
              </div>
            </div>

            <div className="row-span-3 col-span-2 flex items-center justify-center rounded-full">
              <div className="absolute w-[700px] h-[700px] rounded-full bg-transparent border border-brandPink4 -z-30"></div>
              <div className="absolute w-[450px] h-[450px] rounded-full bg-transparent border-2 border-dashed border-brandPink4 animate-spinSlow -z-20"></div>
              <div className="flex items-center justify-center rounded-full ring-brandPink4 h-96 w-96 shadow-2xl border-4">
                <Image
                  src="https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms7ai6oz08vq08pk9nuarsth"
                  alt="garbhagudi logo"
                  className="h-64 w-64"
                  width={256}
                  height={256}
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <div
                className="h-[130px] w-[130px] flex items-center justify-center rounded-full mx-auto my-4 -mt-2 -ml-4"
                onMouseEnter={() => setTooltipStatus(2)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <Image
                  src="https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms7ai6po08vu08pkw8qrq5lo"
                  alt="Holostic Approach"
                  className="hover:scale-115 transition-all duration-500"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                {tooltipStatus == 2 && (
                  <div className="absolute text-sm mt-44">
                    Holistic Approach
                  </div>
                )}
              </div>
            </div>
            <div>
              <div
                className="h-[130px] w-[130px] flex items-center justify-center rounded-full mx-auto my-4 mr-14"
                onMouseEnter={() => setTooltipStatus(3)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <Image
                  src="https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms7ai6qg08vy08pkkptynjq8"
                  alt="Humane Touch"
                  className="hover:scale-115 transition-all duration-500"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                {tooltipStatus == 3 && (
                  <div className="absolute text-sm mt-44">Humane Touch</div>
                )}
              </div>
            </div>
            <div>
              <div
                className="h-[130px] w-[130px] flex items-center justify-center rounded-full mx-auto my-4 ml-14"
                onMouseEnter={() => setTooltipStatus(4)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <Image
                  src="https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms7ai6r708w208pk0ok4tc0d"
                  alt="High Success Rate"
                  className="hover:scale-115 transition-all duration-500"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                {tooltipStatus == 4 && (
                  <div className="absolute text-sm mt-44">
                    Successful Pregnancies
                  </div>
                )}
              </div>
            </div>
            <div>
              <div
                className="h-[130px] w-[130px] flex items-center justify-center rounded-full mx-auto my-4 mt-10 mr-0"
                onMouseEnter={() => setTooltipStatus(5)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <Image
                  src="https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8in18n3pky07pl537v57hy"
                  alt="Top Fertility Specialists"
                  className="hover:scale-115 transition-all duration-500"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                {tooltipStatus == 5 && (
                  <div className="absolute mt-44 text-sm">
                    Renowned Specialists
                  </div>
                )}
              </div>
            </div>
            <div>
              <div
                className="h-[130px] w-[130px] flex items-center justify-center rounded-full mx-auto ml-0 mt-10 my-4"
                onMouseEnter={() => setTooltipStatus(6)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <Image
                  src="https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8in19g3pl207plhoea2w49"
                  alt="Transparent Pricing"
                  className="hover:scale-115 transition-all duration-500"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                {tooltipStatus == 6 && (
                  <div className="absolute text-sm mt-44">
                    Transparent Pricing
                  </div>
                )}
              </div>
            </div>
            <div className="w-0"></div>
            <div>
              <div
                className="h-[130px] w-[130px] flex items-center justify-center rounded-full mx-auto my-4 -mt-2 ml-10"
                onMouseEnter={() => setTooltipStatus(7)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <Image
                  src="https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8in1a63pl607plcz55wsz8"
                  alt="World Class Labs"
                  className="hover:scale-115 transition-all duration-500"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                {tooltipStatus == 7 && (
                  <div className="absolute text-sm mt-44">
                    World-class Labrotories
                  </div>
                )}
              </div>
            </div>
            <div>
              <div
                className="h-[130px] w-[130px] flex items-center justify-center rounded-full mx-auto my-4 -mt-2 mr-10 "
                onMouseEnter={() => setTooltipStatus(8)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <Image
                  src="https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8in1ax3pla07plwitixgei"
                  alt="Cutting Edge Technologies"
                  className="hover:scale-115 transition-all duration-500"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                {tooltipStatus == 8 && (
                  <div className="absolute text-sm mt-44 ">
                    Cutting Edge Technologies
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPC;
