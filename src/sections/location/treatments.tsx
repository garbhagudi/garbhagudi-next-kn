import React from "react";
import Image from "next/image";
import Link from "next/link";

const TreatmentOptions = ({ branch }) => {
  return (
    <div className="container mx-auto">
      <h2 className="py-16 lg:py-20 text-xl lg:text-2xl font-heading text-center font-bold px-2">
        {branch} ನಲ್ಲಿ ಬಂಜೆತನ ಚಿಕಿತ್ಸೆಯ ಆಯ್ಕೆಗಳು
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-3 lg:gap-16 pb-10 lg:pb-16 px-2">
        {Data.map((items) => (
          <div
            key={items?.id}
            className="font-content border border-brandPink4 rounded-2xl flex items-center justify-between flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover:bg-pink-50"
          >
            <div className="w-28 h-28 -mt-14 mx-auto flex items-center justify-center rounded-full">
              <Image
                src={items?.image}
                alt={items?.treatent}
                width={100}
                height={100}
                className="w-20"
              />
            </div>
            <div className="flex flex-col items-center justify-center py-2">
              <div className="text-xl font-heading text-center font-bold pb-2">
                {items?.treatent}
              </div>
              <div className="px-3 text-base text-center">{items?.desc}</div>
            </div>
            <div className=" text-center border w-full bg-brandPink4 py-1 rounded-b-2xl">
              <Link
                href={items?.link}
                className="font-bold text-white font-content"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentOptions;

const Data = [
  {
    id: 1,
    treatent: "IVF ಚಿಕಿತ್ಸೆ",
    desc: "ಗರ್ಭಗುಡಿಯ ಸುಧಾರಿತ ಐವಿಎಫ್ ಚಿಕಿತ್ಸಾ ಆಯ್ಕೆಗಳೊಂದಿಗೆ ಪಿತೃತ್ವದ ಬಾಗಿಲುಗಳನ್ನು ಅನ್ಲಾಕ್ ಮಾಡಿ ಮತ್ತು ಕುಟುಂಬವನ್ನು ಪ್ರಾರಂಭಿಸುವ ನಿಮ್ಮ ಕನಸುಗಳಿಗೆ ಹೊಸ ಜೀವನವನ್ನು ನೀಡಿ.",
    link: "/resources/treatments/in-vitro-fertilization-ivf",
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/ivf_jwjqwf.webp",
  },
  {
    id: 2,
    treatent: "ICSI",
    desc: "ಗರ್ಭಗುಡಿಯ IUI ಚಿಕಿತ್ಸೆಯೊಂದಿಗೆ ಪಿತೃತ್ವದ ಸಂತೋಷವನ್ನು ಅನುಭವಿಸಿ, ನೈಸರ್ಗಿಕ ರೀತಿಯಲ್ಲಿ ನಿಮ್ಮ ಗರ್ಭಧಾರಣೆಯ ಸಾಧ್ಯತೆಗಳನ್ನು ಹೆಚ್ಚಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ.",
    link: "/resources/treatments/intracytoplasmic-sperm-injection-icsi",
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/fertilization_o5hpkk.webp",
  },
  {
    id: 3,
    treatent: "IUI",
    desc: "ಗರ್ಭಗುಡಿಯ ಅತ್ಯಾಧುನಿಕ ICSI ಚಿಕಿತ್ಸೆಯೊಂದಿಗೆ ಪಿತೃತ್ವದ ಕಡೆಗೆ ಮೊದಲ ಹೆಜ್ಜೆ ಇರಿಸಿ, ಇದು ಬಂಜೆತನದಿಂದ ಹೋರಾಡುತ್ತಿರುವ ದಂಪತಿಗಳಿಗೆ ಹೆಚ್ಚಿನ ಯಶಸ್ಸಿನ ಪ್ರಮಾಣವನ್ನು ನೀಡುತ್ತದೆ.",
    link: "/resources/treatments/intra-uterine-insemination-iui",
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/in-vitro_mujzkz.webp",
  },
  {
    id: 4,
    treatent: "TESA/PESA",
    desc: "ಗರ್ಭಗುಡಿಯ TESA/PESA ಚಿಕಿತ್ಸೆಯೊಂದಿಗೆ ಮಗುವಿಗೆ ತಂದೆಯಾಗುವ ಅವಕಾಶವನ್ನು ಪಡೆಯಿರಿ, ಕಡಿಮೆ ವೀರ್ಯಾಣು ಎಣಿಕೆ ಅಥವಾ ಕಳಪೆ ಗುಣಮಟ್ಟದ ಪುರುಷರಿಗೆ ಕ್ರಾಂತಿಕಾರಿ ಆಯ್ಕೆಯಾಗಿದೆ.",
    link: "/resources/treatments/pesa-and-tesa",
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/research_j8mdnk.webp",
  },
  {
    id: 5,
    treatent: "ಬ್ಲಾಸ್ಟೊಸಿಸ್ಟ್ ಸಂಸ್ಕೃತಿ",
    desc: "ಬ್ಲಾಸ್ಟೊಸಿಸ್ಟ್ ಕಲ್ಚರ್ ಚಿಕಿತ್ಸೆಯೊಂದಿಗೆ ನಿಮ್ಮ ಅವಕಾಶಗಳನ್ನು ಹೆಚ್ಚಿಸಿಕೊಳ್ಳಿ, ಇದು ವರ್ಗಾವಣೆಯ ಮೊದಲು ಭ್ರೂಣಗಳು ದೀರ್ಘಕಾಲದವರೆಗೆ ಬೆಳೆಯಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ, ಇಂಪ್ಲಾಂಟೇಶನ್ ಸಾಧ್ಯತೆಗಳನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ.",
    link: "/resources/treatments/in-vitro-fertilization-ivf",
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/sperm_utf0oe.webp",
  },
  {
    id: 6,
    treatent: "ಗೈನೆಕ್ ಚಿಕಿತ್ಸೆಗಳು",
    desc: "ಗರ್ಭಗುಡಿಯ ಸಮಗ್ರ ಶ್ರೇಣಿಯ ಚಿಕಿತ್ಸೆಗಳೊಂದಿಗೆ ಸ್ತ್ರೀರೋಗ ಸಮಸ್ಯೆಗಳಿಗೆ ವಿದಾಯ ಹೇಳಿ, ವಿಶೇಷವಾಗಿ ನಿಮ್ಮನ್ನು ಆರೋಗ್ಯಕರವಾಗಿ ಮತ್ತು ಫಲವತ್ತಾಗಿ ಇರಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ.",
    link: "/resources/causes/polycystic-ovarian-syndrome-pcos",
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/gynecology_ynvds8.webp",
  },
  {
    id: 7,
    treatent: "ನೈಸರ್ಗಿಕ ಗರ್ಭಧಾರಣೆ",
    desc: "ಗರ್ಭಗುಡಿಯ ನೈಸರ್ಗಿಕ ಗರ್ಭಧಾರಣೆಯ ಕಾರ್ಯಕ್ರಮದೊಂದಿಗೆ ನಿಮ್ಮ ಪಿತೃತ್ವದ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಿ, ಇದು ಅವರ ಫಲವತ್ತತೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಮತ್ತು ಅವರ ಗರ್ಭಧರಿಸುವ ಸಾಧ್ಯತೆಗಳನ್ನು ಹೆಚ್ಚಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    link: "/resources/treatments/natural-pregnancy",
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/maternity_cee8v2.webp",
  },
  {
    id: 8,
    treatent: "ವೀರ್ಯ ವಿಶ್ಲೇಷಣೆ / CASA",
    desc: "ಗರ್ಭಗುಡಿಯ ಅತ್ಯಾಧುನಿಕ ವೀರ್ಯ ವಿಶ್ಲೇಷಣೆ / CASA ಸೇವೆಗಳೊಂದಿಗೆ ನಿಮ್ಮ ವೀರ್ಯದ ಸಂಪೂರ್ಣ ವಿವರವನ್ನು ತಿಳಿದುಕೊಂಡು, ನಿಮ್ಮ ಸಂತಾನೋತ್ಪತ್ತಿ ಸಾಮರ್ಥ್ಯದ ಬಗ್ಗೆ ಸ್ಪಷ್ಟತೆ ಪಡೆಯಿರಿ.",
    link: "/resources/diagnosis/semen-analysis",
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890580/Misc/ivf%20icons/semen_nqxd6s.webp",
  },
];
