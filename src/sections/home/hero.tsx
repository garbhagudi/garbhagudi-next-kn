import React from "react";
import { BsChevronRight } from "react-icons/bs";

const Hero = () => {
  return (
    <main className="mt-8 sm:mt-8">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>
              <h1 className="mt-4 text-4xl font-semibold text-brandDark sm:mt-5 sm:leading-none lg:mt-6 lg:text-4xl xl:text-5xl font-heading">
                <span className="md:block">ಪರಿಪೂರ್ಣತೆಯ</span>
                <span className="text-brandPink md:block md:mt-2">
                  ಸಂತಸವನ್ನು ಅನುಭವಿಸಿ
                </span>
              </h1>
              <div className="font-content text-right">
                ... ಬೆಂಗಳೂರಿನ ಅತ್ಯುನ್ನತ ಐವಿಎಫ್ ಸೆಂಟರ್ ಜೊತೆ
              </div>
              <p className="mt-3 text-brandDark sm:mt-5 text-md sm:text-xl font-content">
                &quot;ಗರ್ಭಗುಡಿ&quot; ಹೊಸ ತಲೆಮಾರಿನ ಸಂತಾನೋತ್ಪತ್ತಿ ಚಿಕಿತ್ಸಾ
                ಆಸ್ಪತ್ರೆಗಳ ಸಮೂಹ ವಾಗಿದೆ. ದಿನೇದಿನೇ ಹೆಚ್ಚುತ್ತಿರುವ ಸಂತಾನೋತ್ಪತ್ತಿ
                ಸಮಸ್ಯೆಗಳ ಪರಿಹಾರಕ್ಕೆ ಬೇಕಾದ ಅತ್ಯಾಧುನಿಕ ಮೂಲ ಸೌಕರ್ಯ ಮತ್ತು
                ತಂತ್ರಜ್ಞಾನವನ್ನು ಗರ್ಭಗುಡಿ ಹೊಂದಿದೆ. ಖ್ಯಾತ ಸ್ತ್ರೀರೋಗ ತಜ್ಞೆ ಮತ್ತು
                ಫರ್ಟಿಲಿಟಿ ತಜ್ಞೆಯಾದ ಡಾ. ಆಶಾ ಎಸ್‌. ವಿಜಯ್‌ ಅವರ ನೇತೃತ್ವದಲ್ಲಿ ನುರಿತ
                ವೈದ್ಯರ ತಂಡವೊಂದು ಗರ್ಭಗುಡಿಯನ್ನ ಸ್ಥಾಪಿಸಿದ್ದು ಅದು ಕರ್ನಾಟಕದಾದ್ಯಂತ
                ಇಂದು ಮನೆಮಾತಾಗಿದೆ.
              </p>
            </div>
          </div>
          <div className="hidden sm:mt-16 lg:mt-0 lg:col-span-6 md:block">
            <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
              <div className="my-6">
                <img
                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1670926735/Home/Home-Experience_the_Joy_kvdfwj-min_i0j1gw.jpg"
                  alt="Experience the joy of being complete"
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
