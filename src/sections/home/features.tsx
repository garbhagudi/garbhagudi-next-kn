import React from "react";
import Link from "next/link";
import {
  CiPercent,
  CiMedicalCase,
  CiMedicalClipboard,
  CiBank,
} from "react-icons/ci";
import { BsBuildings, BsCurrencyRupee, BsQuestionCircle } from "react-icons/bs";
import { GiMeditation } from "react-icons/gi";
import { ImLab } from "react-icons/im";

const features = [
  {
    id: 1,
    name: "ಐವಿಎಫ್‍ನ ಯಶಸ್ಸಿನ ಮಟ್ಟಗಳು",
    icon: <CiPercent />,
    content:
      "ಗರ್ಭಗುಡಿಯು ಉದ್ಯಮದಲ್ಲಿ  ಹೆಚ್ಚಿನ ಐವಿಎಫ್ ಚಿಕಿತ್ಸೆಗಳ ಯಶಸ್ಸಿನ ಮಟ್ಟವನ್ನು ಹೊಂದಿದೆ.",
    link: "/features/success-rates-of-ivf",
  },
  {
    id: 2,
    name: "ವಿಶ್ವ ದರ್ಜೆಯ ಫರ್ಟಿಲಿಟಿ ಆರೈಕೆ",
    icon: <BsBuildings />,
    content:
      "2011 ರಿಂದ 10,500 ಕ್ಕೂ ಹೆಚ್ಚು ಶಿಶುಗಳನ್ನು ಜಗತ್ತಿಗೆ ತರುವಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸಿದ ಹೆಮ್ಮೆ.",
    link: "/features/world-class-fertility-care",
  },
  {
    id: 3,
    name: "ಉನ್ನತ ಫಲವತ್ತತೆ ತಜ್ಞರು",
    icon: <CiMedicalCase />,
    content:
      "ನಿಮಗೆ ಗರ್ಭಧರಿಸುವುದಕ್ಕೆ ಸಹಾಯ ಮಾಡಲು ಸ್ತ್ರೀರೋಗಶಾಸ್ತ್ರತಜ್ಞರು, ಭ್ರೂಣಶಾಸ್ತ್ರಜ್ಞರು, ತಂತ್ರಜ್ಞರು ಮತ್ತು ಸಿಬ್ಬಂದಿಗಳಂತಹ ಫರ್ಟಿಲಿಟಿ ತಜ್ಞರ ತಂಡ.",
    link: "/fertility-experts",
  },
  {
    id: 4,
    name: "ಕೈಗೆಟುಕುವ ಚಿಕಿತ್ಸೆಗಳು",
    icon: <BsCurrencyRupee />,
    content:
      "ಔಷಧಿಗಳು ಅಥವಾ ಸೇವೆಗಳ ಗುಣಮಟ್ಟ ಅಥವಾ ಸೇವಾಕಾರ್ಯದಲ್ಲಿ ಯಾವುದೇ ರಾಜಿ ಇಲ್ಲದೆ ಕೈಗೆಟುಕುವ ವೆಚ್ಚದ ಚಿಕಿತ್ಸೆ",
    link: "/features/affordable-treatments",
  },
  {
    id: 5,
    name: "ಉಚಿತ ಎರಡನೇ ಅಭಿಪ್ರಾಯ",
    icon: <BsQuestionCircle />,
    content:
      "ರೋಗಿಗಳು ಬಂದು ನಮ್ಮ ವೈದ್ಯರನ್ನು ಭೇಟಿ ಮಾಡಬಹುದು ಮತ್ತು ರೋಗಿ ದಂಪತಿಗಳಿಗೆ ಸಲಹೆ ನೀಡಲಾಗಿರುವ ಚಿಕಿತ್ಸೆಯು ಉತ್ತಮವಾಗಿದೆಯೇ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬಹುದು.",
    link: "https://garbhagudi-ivf.com/contact-us",
  },
  {
    id: 6,
    name: "ಹಣಕಾಸು ನೆರವು ಆಯ್ಕೆಗಳು",
    icon: <CiBank />,
    content:
      "ಕಾರ್ಯವಿಧಾನಗಳ ವೆಚ್ಚವನ್ನು ಪೂರೈಸುವುದಕ್ಕೆ ಹಣಕಾಸು ಹೊಂದಿಸುವುದು ಸಾಧ್ಯವಾಗದಿದ್ದಾಗ ರೋಗಿಗಳಿಗೆ ಶೂನ್ಯ ಬಡ್ಡಿಯಲ್ಲಿ ಹಣಕಾಸು ನೆರವು.",
    link: "/features/financing-options",
  },
  {
    id: 7,
    name: "ಸಮಗ್ರ ಮಾರ್ಗ",
    icon: <GiMeditation />,
    content:
      "ಮನಸ್ಸು-ದೇಹ-ಆತ್ಮಗಳನ್ನು ಒಳಗೊಂಡ ಕಾರ್ಯಕ್ರಮಗಳ ಮೂಲಕ ಸಂತಾನೋತ್ಪತ್ತಿ ಸಮಸ್ಯೆಗೆ ಚಿಕಿತ್ಸೆ ನೀಡುವುದು.",
    link: "/features/holistic-approach",
  },
  {
    id: 8,
    name: "ಸಾಂಪ್ರದಾಯಿಕ ಶಿಷ್ಟಾಚಾರಗಳು",
    icon: <CiMedicalClipboard />,
    content:
      "ಪ್ರಕ್ರಿಯೆ, ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ವೈದ್ಯಕೀಯ ಸಂಶೋಧನೆಯಲ್ಲಿ ಇತ್ತೀಚಿನ ಪ್ರಗತಿಗಳನ್ನು ಅಳವಡಿಸಲು ನಿಗದಿತವಾಗಿ ವಿಸ್ತರಣೆÉ ಮತ್ತು ನವೀಕರಣ ಕಾರ್ಯ ಕೈಗೊಳ್ಳಲಾಗುತ್ತದೆ.",
    link: "/features/treatment-protocols",
  },
  {
    id: 9,
    name: "ಅತ್ಯುತ್ತಮ ಸೌಲಭ್ಯಗಳು",
    icon: <ImLab />,
    content:
      "ನಮ್ಮಲ್ಲಿರುವ ಅತ್ಯಾಧುನಿಕ ತಂತ್ರಜ್ಞಾನದ ಜೊತೆಗೆ ಅತ್ಯಂತ ಸವಾಲಿನ ಪ್ರಕರಣಗಳನ್ನು ನಿರ್ವಹಿಸಲು ಕೇಂದ್ರಗಳು ಸಜ್ಜಾಗಿವೆ",
    link: "/features/best-in-class-facilities",
  },
];

const Features = () => {
  return (
    <div className="relative bg-white py-8 sm:py-18" id="features">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-3xl text-brandPink font-semibold sm:text-4xl font-heading">
          ನಮ್ಮ ಬಹುಕಾರ್ಯೋಪಯೋಗಿ ವಿಧಾನ
        </p>
        <p className="mt-5 max-w-6xl mx-auto text-md sm:text-xl text-brandDark font-content">
          ಫರ್ಟಿಲಿಟಿಯ ಚಿಕಿತ್ಸೆಗಳು ಮಾನಸಿಕವಾಗಿ ಮತ್ತು ದೈಹಿಕವಾಗಿ ಒತ್ತಡವನ್ನು
          ಉಂಟುಮಾಡಬಹುದು ಎಂದು ಗರ್ಭಗುಡಿಯಲ್ಲಿ ನಾವು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇವೆ. ಬಹಳಷ್ಟು
          ಆಯ್ಕೆಗಳನ್ನು ಒದಗಿಸಲು ಮತ್ತು ಗರ್ಭಧಾರಣೆಗೆ ಪ್ರಯತ್ನಿಸುತ್ತಿರುವ ಅನೇಕರಿಗೆ
          ಭರವಸೆಯ ನೂತನ ಕಿರಣವನ್ನು ತರಲು ನಾವು ಯಾವಾಗಲೂ ಬದ್ಧರಾಗಿದ್ದೇವೆ. ಆದ್ದರಿಂದ, ನೀವು
          ಈ ಕೆಳಗಿನದನ್ನು ನಿರೀಕ್ಷಿಸಬಹುದು:
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-2 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Link href={feature.link} key={feature.id} passHref>
                <div className="pt-3 group max-w-sm mx-auto">
                  <div className="rounded-lg overflow-hidden shadow-3xl hover:shadow-2xl hover:scale-110 transition-all duration-200">
                    <div className="grid grid-cols-6 h-36">
                      <div className="col-span-1 bg-brandPink flex items-center justify-center h-full">
                        <div className="text-4xl text-white font-bold">
                          {feature.icon}
                        </div>
                      </div>
                      <div className="flex flex-col justify-center col-span-5 px-2 border-2 border-brandPink rounded-tr-lg rounded-br-lg">
                        <h3 className="mt-3 text-base font-semibold text-brandDark tracking-tight font-heading">
                          {feature.name}
                        </h3>
                        <p className="mt-2 pb-3 text-brandDark antialiased text-sm  font-content font-normal">
                          {feature.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
