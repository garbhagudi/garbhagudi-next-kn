import React from "react";
import { BsChevronRight } from "react-icons/bs";

const Hero = () => {
  return (
    <main className="mt-8 sm:mt-8">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>
              <h1 className="mt-4 text-4xl text-brandDark sm:mt-5 sm:leading-none lg:mt-6 lg:text-4xl xl:text-5xl font-heading font-semibold">
                <span className="md:block">ಸಂಪೂರ್ಣವಾಗಿರುವ </span>{" "}
                <span className="text-brandPink md:block md:mt-2">
                  ಸಂತೋಷವನ್ನು ಅನುಭವಿಸಿ
                </span>
              </h1>
              <p className="mt-3 text-brandDark sm:mt-5 text-md sm:text-xl font-content">
                ಗರ್ಭಗುಡಿ ನೂತನ ಪೀಳಿಗೆಯ ಸಂತಾನೋತ್ಪತ್ತಿ ಸಮಸ್ಯೆ ಚಿಕಿತ್ಸಾ ಆಸ್ಪತ್ರೆಗಳ
                ಸರಣಿಯಾಗಿದ್ದು, ಈ ನಿರಂತರವಾಗಿ ಹೆಚ್ಚುತ್ತಿರುವ ಸಂತಾನೋತ್ಪತ್ತಿ
                ಸಮಸ್ಯೆಯನ್ನು ಪರಿಹರಿಸಲು ಅತ್ಯಾಧುನಿಕ ಮೂಲಸೌಕರ್ಯ ಮತ್ತು ಅತ್ಯಾಧುನಿಕ
                ತಂತ್ರಜ್ಞಾನವನ್ನು ಹೊಂದಿದೆ. ಖ್ಯಾತ ಸ್ತ್ರೀರೋಗತಜ್ಞರು ಮತ್ತು ಫರ್ಟಿಲಿಟಿ
                ತಜ್ಞೆ ಡಾ. ಆಶಾ ಎಸ್. ವಿಜಯ್ ನೇತೃತ್ವದ ಬದ್ಧತೆಯ ಉದ್ಯಮಿಗಳು ಮತ್ತು ಆರೋಗ್ಯ
                ತಜ್ಞರ ತಂಡವು ಇದನ್ನು ಸ್ಥಾಪಿಸಿದೆ.
              </p>
            </div>
          </div>
          <div className="sm:mt-16 lg:mt-0 lg:col-span-6 hidden md:block">
            <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
              <div className="my-6">
                <img
                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643272918/Home/Home-Experience_the_Joy_kvdfwj.webp"
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
