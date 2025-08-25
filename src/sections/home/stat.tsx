import React from "react";

const metrics = [
  {
    id: 1,
    stat: "15000+",
    emphasis: "ಸಂತೋಷ ತುಂಬಿದ ಕುಟುಂಬಗಳು",
  },
  {
    id: 2,
    stat: "500+",
    emphasis: "ಉಚಿತ ಫರ್ಟಿಲಿಟಿ ಜಾಗೃತಿ ಶಿಬಿರಗಳು",
  },
  {
    id: 8,
    stat: "9",
    emphasis: "ಬೆಂಗಳೂರಿನ ವಿವಿಧೆಡೆ 9 ಕೇಂದ್ರಗಳು",
  },
];

const Stat = () => {
  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <img
              className="h-full w-full object-cover opacity-70 xl:absolute xl:inset-0"
              src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1670926739/Home/Our_never_ending_s0dbde-min_djdemx.jpg"
              alt="Garbhagudi Statistics"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <p className="mt-3 text-4xl text-brandPink font-semibold font-heading">
            ನಮ್ಮ ಸದಾ ಬೆಳೆಯುತ್ತಿರುವ ಯಶಸ್ಸು
          </p>
          <p className="mt-5 text-md sm:text-xl text-brandDark font-content">
            ಗರ್ಭಗುಡಿ ಎಂದರೆ ಕನಸುಗಳು ಜೀವಂತವಾಗಿರುವ ಸ್ಥಳ, ಇಲ್ಲಿ ಭರವಸೆಗಳು ಎಂದಿಗೂ
            ಮರೆಯಾಗುವುದಿಲ್ಲ ಮತ್ತು ಸಾಧ್ಯತೆಗಳು ಎಂದಿಗೂ ಕೊನೆಗೊಳ್ಳುವುದಿಲ್ಲ. ನಿಮ್ಮ
            ಆನಂದದ ಕಂದಮ್ಮಗಳನ್ನು ಕೈಯಲ್ಲಿ ಎತ್ತಿಹಿಡಿಯುವ ಸುವರ್ಣ ಕ್ಷಣವನ್ನು ಅನುಭವಿಸಲು
            ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ನಾವು ನಿರಂತರವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತೇವೆ. ನಮ್ಮ ಗುಣಮಟ್ಟದ
            ಚಿಕಿತ್ಸೆ ಮತ್ತು ಆರೈಕೆಯ ಜೊತೆಗೆ, ಉನ್ನತ ಯಶಸ್ಸಿನ ಮಟ್ಟಗಳನ್ನು ಸಾಧಿಸಲು
            ಕೊಡುಗೆ ನೀಡುವ ಇತರ ಕೆಲವು ಅಂಶಗಳು:
          </p>
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {metrics.map((item) => (
              <p key={item.id}>
                <span className="block text-2xl font-bold text-brandDark">
                  {item.stat}
                </span>
                <span className="mt-1 block text-brandliteGray">
                  <span className="text-md sm:text-xl text-brandDark font-content">
                    {item.emphasis}
                  </span>
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stat;
