import React from "react";
import Link from "next/link";
import Paripoorna from "sections/home/paripoorna";

const column = "lg:row-start-1 lg:flex lg:flex-col";
const cta =
  "rounded-md bg-brandPink px-3 py-2 text-sm font-bold text-white hover:bg-brandPink2";

const Hero = () => {
  return (
    <main className="my-8 sm:mt-8">
      {/* Mobile: Paripoorna first, stacked. Desktop: hero text left, Paripoorna right. */}
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Paripoorna className={`${column} lg:col-start-2`} />
        <div className={`${column} text-center lg:col-start-1 lg:text-left`}>
          <div>
            <h1 className="text-4xl font-semibold text-brandDark sm:leading-none lg:text-4xl xl:text-5xl font-heading">
              <span className="md:block">ಪರಿಪೂರ್ಣತೆಯ</span>{" "}
              <span className="text-brandPink md:block md:mt-2">
                ಸಂತಸವನ್ನು ಅನುಭವಿಸಿ
              </span>
            </h1>
            <div className="mt-2 font-content text-right">
              ... ಬೆಂಗಳೂರಿನ ಅತ್ಯುನ್ನತ ಐವಿಎಫ್ ಸೆಂಟರ್ ಜೊತೆ
            </div>
          </div>
          <div className="mt-6">
            <p className="text-brandDark text-md sm:mt-5 sm:text-lg font-content">
              &quot;ಗರ್ಭಗುಡಿ&quot; ಹೊಸ ತಲೆಮಾರಿನ ಸಂತಾನೋತ್ಪತ್ತಿ ಚಿಕಿತ್ಸಾ ಆಸ್ಪತ್ರೆಗಳ
              ಸಮೂಹ ವಾಗಿದೆ. ದಿನೇದಿನೇ ಹೆಚ್ಚುತ್ತಿರುವ ಸಂತಾನೋತ್ಪತ್ತಿ ಸಮಸ್ಯೆಗಳ
              ಪರಿಹಾರಕ್ಕೆ ಬೇಕಾದ ಅತ್ಯಾಧುನಿಕ ಮೂಲ ಸೌಕರ್ಯ ಮತ್ತು ತಂತ್ರಜ್ಞಾನವನ್ನು
              ಗರ್ಭಗುಡಿ ಹೊಂದಿದೆ. ಖ್ಯಾತ ಸ್ತ್ರೀರೋಗ ತಜ್ಞೆ ಮತ್ತು ಫರ್ಟಿಲಿಟಿ ತಜ್ಞೆಯಾದ
              ಡಾ. ಆಶಾ ಎಸ್‌. ವಿಜಯ್‌ ಅವರ ನೇತೃತ್ವದಲ್ಲಿ ನುರಿತ ವೈದ್ಯರ ತಂಡವೊಂದು
              ಗರ್ಭಗುಡಿಯನ್ನ ಸ್ಥಾಪಿಸಿದ್ದು ಅದು ಕರ್ನಾಟಕದಾದ್ಯಂತ ಇಂದು ಮನೆಮಾತಾಗಿದೆ.
            </p>
            <h2 className="mt-5 font-content text-base font-semibold">
              <Link
                href="/about/awards-and-accolades"
                className="text-brandPink hover:underline"
              >
                ಭಾರತದಲ್ಲಿ ಅತ್ಯುತ್ತಮ ಐವಿಎಫ್ ಮತ್ತು ಫರ್ಟಿಲಿಟಿ ಹಾಸ್ಪಿಟಲ್ ಎಂದು ಪ್ರಶಸ್ತಿ
                ನೀಡಲಾಗಿದೆ
              </Link>
            </h2>
          </div>
          <div className="flex flex-wrap items-start justify-center gap-3 pt-6 lg:mt-auto lg:justify-start">
            <Link href="/about/awards-and-accolades" className={cta}>
              ಪ್ರಶಸ್ತಿಗಳು ಮತ್ತು ಪುರಸ್ಕಾರಗಳು
            </Link>
            <Link href="/gg-care" className={cta}>
              ಸಂಪರ್ಕಿಸಿ
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
