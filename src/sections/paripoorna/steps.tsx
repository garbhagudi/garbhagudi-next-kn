import Image from "next/image";

const Steps = () => {
  return (
    <div
      className="mx-auto px-4 pt-12 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-7xl lg:px-8 lg:pt-16"
      id="how-to"
    >
      <h3 className="mb-12 text-center font-lexend text-3xl font-bold text-gray-800 dark:text-gray-200 lg:text-4xl">
        ಪರಿಪೂರ್ಣ ಪ್ರಯೋಜನವನ್ನು ಪಡೆಯುವುದು ಹೇಗೆ?
      </h3>
      <div className="flex flex-col items-center justify-center gap-3 lg:flex-row">
        <div className="grid w-full gap-2 font-lexend md:w-7/12 lg:grid-cols-2">
          <div className="group rounded p-3 hover:bg-green-50 md:p-2 lg:p-5 lg:transition lg:duration-300">
            <div className="mb-1 flex items-center">
              <span className="mr-2 flex h-4 w-4 items-center justify-center rounded bg-green-500 text-xs font-medium text-white">
                1
              </span>
              <p className="font-lexend text-base text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800">
                ನಿಮ್ಮ ಹತ್ತಿರದ ಗರ್ಭಗುಡಿ IVF ಕೇಂದ್ರಕ್ಕೆ ಭೇಟಿ ನೀಡಿ 📍
              </p>
            </div>
            <p className="text-sm text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800">
              ಗರ್ಭಗುಡಿ ಐವಿಎಫ್‌ ಕೇಂದ್ರಕ್ಕೆ ಭೇಟಿ ನೀಡುವುದರ ಮೂಲಕ ನಿಮ್ಮ ಫಲವತ್ತತೆ
              ಪಯಣವನ್ನು ಇಂದೇ ಆರಂಭಿಸಿ. ಗರ್ಭಗುಡಿ ಶಾಖೆಯಲ್ಲಿ ಸಿಗುವ ಪ್ರೀತಿ ಮತ್ತು
              ಅತ್ಯುತ್ತಮ ಆರೈಕೆಯೊಂದಿಗೆ ಅತ್ಯಾಧುನಿಕ ಸೌಲಭ್ಯವನ್ನು ಪಡೆಯಿರಿ.
            </p>
          </div>
          <div className="group rounded p-5 hover:bg-purple-50 md:p-2 lg:p-5 lg:transition lg:duration-300">
            <div className="mb-1 flex items-center">
              <span className="mr-2 flex h-4 w-4 items-center justify-center rounded bg-purple-500 text-xs font-medium text-white">
                2
              </span>
              <p className="font-lexend text-base text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800">
                ಫಲವತ್ತತೆ ತಜ್ಞರೊಂದಿಗೆ ನಿಮ್ಮ ಸಮಾಲೋಚನೆಯನ್ನು ಕಾದಿರಿಸಿ 👩‍⚕️
              </p>
            </div>
            <p className="text-sm text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800">
              ನಿಮ್ಮ ಅಗತ್ಯಗಳನ್ನು ಸರಿಯಾಗಿ ಅರ್ಥಮಾಡಿಕೊಂಡು ಸೂಕ್ತ ಚಿಕಿತ್ಸೆ ನೀಡುವಂಥ
              ಅನುಭವಿ ಮತ್ತು ಸಹಾನುಭೂತಿ ಫಲವತ್ತತೆ ತಜ್ಞರು ನಮ್ಮಲ್ಲಿದ್ದಾರೆ. ಅವರನ್ನು
              ಭೇಟಿ ಮಾಡಿ. ವಿಶೇಷವೆಂದರೆ ನಿಮ್ಮ ತಾಯ್ತನದ ಪಯಣಕ್ಕೆ ಸಹಾಯ ಮಾಡುವ
              ನಿಟ್ಟಿನಲ್ಲಿ ನಮ್ಮ ಫಲವತ್ತತೆ ತಜ್ಞರು ನಿಮ್ಮ ಮಾತನ್ನು ಕೇಳಲು,
              ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಮತ್ತು ಸಹಕಾರ ನೀಡಲು ಸದಾ ಲಭ್ಯವಿರುತ್ತಾರೆ.
            </p>
          </div>
          <div className="group rounded p-5 hover:bg-pink-50 md:p-2 lg:p-5 lg:transition lg:duration-300">
            <div className="mb-1 flex items-center">
              <span className="mr-2 flex h-4 w-4 items-center justify-center rounded bg-brandPink text-xs font-medium text-white">
                3
              </span>
              <p className="font-lexend text-base text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800">
                ನಮ್ಮ ಹಣಕಾಸು ಸಲಹೆಗಾರರೊಂದಿಗೆ ಚರ್ಚಿಸಿ 🧑‍💼
              </p>
            </div>
            <p className="text-sm text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800">
              ಹಣಕಾಸಿಗೆ ಸಂಬಂಧಪಟ್ಟ ಯಾವುದೇ ವಿಷಯವನ್ನು ಗರ್ಭಗುಡಿಯ ಹಣಕಾಸು ತಜ್ಞರೊಂದಿಗೆ
              ಚರ್ಚಿಸಿ. ಇದರಿಂದ ನೀವು ಯಾವುದೇ ಒತ್ತಡವಿಲ್ಲದೆ ಫಲವತ್ತತೆ ಚಿಕಿತ್ಸೆ
              ಪಡೆಯಬಹುದು. ವಿಶೇಷವೆಂದರೆ, ನಿಮ್ಮ ತಾಯ್ತನದ ಪಯಣವನ್ನು ಆದಷ್ಟು ಸುಗಮವಾಗಿಸಲು
              ಪಾರದರ್ಶಕ ಮತ್ತು ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಪರಿಹಾರಗಳನ್ನು ಅವರು ನೀಡುತ್ತಾರೆ.
            </p>
          </div>
          <div className="group rounded p-5 hover:bg-yellow-50 md:p-2 lg:p-5 lg:transition lg:duration-300">
            <div className="mb-1 flex items-center">
              <span className="mr-2 flex h-4 w-4 items-center justify-center rounded bg-yellow-500 text-xs font-medium text-white">
                4
              </span>
              <p className="font-lexend text-base text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800">
                ಆರಾಮಾಗಿರಿ 😌
              </p>
            </div>
            <p className="text-sm text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800">
              ನೀವು ಒಮ್ಮೆ ತಾಯ್ತನದ ಪಯಣ ಆರಂಭಿಸಿ, ನಮ್ಮ ಮೇಲೆ ನಂಬಿಕೆ ಇಡಿ ಸಾಕು. ಉಳಿದ
              ಎಲ್ಲವನ್ನೂ ಗರ್ಭಗುಡಿಯ ಎಕ್ಸ್‌ಪರ್ಟ್‌ ಟೀಮ್‌ ನಿರ್ವಹಿಸುತ್ತದೆ. ಅಂದರೆ ನಿಮ್ಮ
              ಕುಟುಂಬವನ್ನು ಪರಿಪೂರ್ಣಗೊಳಿಸಿಕೊಳ್ಳುವ ಉತ್ಸಾಹದಲ್ಲಿ ನೀವಿರಿ, ನಾವು ನಿಮಗೆ
              ಅಪ್ರತಿಮ ಬೆಂಬಲ ನೀಡಲು ಬದ್ಧರಾಗಿದ್ದೇವೆ.
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center md:w-5/12">
          <Image
            className="inset-0 w-full rounded object-cover object-bottom shadow-lg"
            width={1024}
            height={1024}
            src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1700052783/paripoorna/mother-with-daughter-lie-bed-dog-looking-them-min_uecuvg.webp"
            alt="couple with baby picture"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Steps;
