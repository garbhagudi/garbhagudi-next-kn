import React from "react";
import Link from "next/link";
import Image from "next/image";

const Steps = () => {
  return (
    <div
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-7xl md:px-24 lg:px-8 lg:py-24"
      id="how-to"
    >
      <h3 className="text-3xl lg:text-4xl font-heading font-bold text-center mb-14">
        ಪರಿಪೂರ್ಣ ಯೋಜನೆಯ ಲಾಭ ಪಡೆಯುವುದು ಹೇಗೆ ?
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3 font-content">
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded bg-brandPink">
                1
              </span>
              <p className="text-lg font-semibold sm:text-base">
                ಜಿಜಿ-ಕೇರ್‌ನಿಂದ ಆಫರ್ ಕೋಡ್ ಪಡೆದುಕೊಳ್ಳಿ
              </p>
            </div>
            <p className="text-sm text-gray-900">
              <Link href={"/gg-care"} className="text-brandPink underline">
                ಜಿಜಿ-ಕೇರ್‌ಗೆ
              </Link>{" "}
              ಭೇಟಿ ನೀಡಿ ಮತ್ತು ನೀವು ಪ್ರಯೋಜನಕ್ಕಾಗಿ ಅರ್ಹರೇ ಎಂಬುದನ್ನು ಪರಿಶೀಲಿಸಲು
              ನಮ್ಮ ಪ್ರತಿನಿಧಿಗಳನ್ನು ಸಂಪರ್ಕಿಸಿ, ಅರ್ಹರಾಗಿದ್ದರೆ, ನಿಮಗೆ ಆಫರ್
              ಕೋಡ್ ಪೂರೈಸಲಾಗುವುದು
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-teal-50">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium rounded bg-brandYellow">
                2
              </span>
              <p className="text-lg font-semibold sm:text-base">
                ಗರ್ಭಗುಡಿ ಶಾಖೆಗೆ ಭೇಟಿ ನೀಡಿ
              </p>
            </div>
            <p className="text-sm text-gray-900">
              ಹತ್ತಿರದ ಗರ್ಭಗುಡಿ ಶಾಖೆಗೆ ಭೇಟಿ ನೀಡಿ, ಬೆಂಗಳೂರಿ ವಿವಿಧ ಸ್ಥಳಗಳಲ್ಲಿ
              ಗರ್ಭಗುಡಿ 5 ಸಂತಾನೋತ್ಪತ್ತಿಗೆ ನೆರವು ನೀಡುವ ಕೇಂದ್ರಗಳನ್ನು ಹೊಂದಿದೆ,
              ಹತ್ತಿರದ ಶಾಖೆ ಪರಿಶೀಲಿಸಲು{" "}
              <Link href={"/gg-care"} className="text-brandPink underline">
                ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ.
              </Link>
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-teal-50">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded bg-brandPurpleDark">
                3
              </span>
              <p className="text-lg font-semibold sm:text-base">
                ಅರ್ಜಿಯನ್ನು ಭರ್ತಿ ಮಾಡಿ
              </p>
            </div>
            <p className="text-sm text-gray-900">
              ವೈದ್ಯರ ಸಲಹೆ ಪಡೆಯಿರಿ ಮತ್ತು ಶಾಖೆಯಲ್ಲಿ ಅಧಿಕಾರಿಗಳು ಒದಗಿಸಿದ ಅರ್ಜಿ ಭರ್ತಿ
              ಮಾಡಿ, ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಲು ದಯವಿಟ್ಟು{" "}
              <Link
                href={"/contact/enquiry"}
                className="text-brandPink underline"
              >
                ಇಲ್ಲಿಗೆ ಭೇಟಿ ನೀಡಿ.
              </Link>
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white bg-brandliteGray">
                4
              </span>
              <p className="text-lg font-semibold sm:text-base">ಒಪ್ಪಿಗೆ</p>
            </div>
            <p className="text-sm text-gray-900">
              ಕುಳಿತುಕೊಳ್ಳಿ ೨ ಮತ್ತು ವಿಶ್ರಾಂತಿ ಪಡೆದುಕೊಳ್ಳಿ! ನಿಮ್ಮ ಅರ್ಜಿಯನ್ನು
              ಸೂಕ್ಷ್ಮವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗುವುದು ಮತ್ತು ಸಂಬಂಧಿತ ಲಾಭಗಳನ್ನು ನೀಡಲಾಗುವುದು.
            </p>
          </div>
        </div>
        <div className="relative md:col-span-2 lg:col-span-2">
          <Image
            className="inset-0 object-cover object-bottom w-full rounded shadow-lg lg:absolute"
            width={1024}
            height={1024}
            src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1669644725/paripoorna/Paripoorna_2022_Couple_Hor-min-compressed_xhckqj.jpg"
            alt="couple with baby picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Steps;
