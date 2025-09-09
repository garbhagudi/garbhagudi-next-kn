import React from "react";
import Link from "next/link";

const Banner = ({ branchTitle }) => {
  return (
    <div>
      <div className="bg-[url(https://res.cloudinary.com/garbhagudiivf/image/upload/v1672381537/Misc/happy-pregnant-woman-late-pregnancy-stage-sitting-grass-lawn-min_11zon_xkeac0.webp)] bg-cover bg-right sm:bg-center bg-no-repeat shadow-2xl">
        <div className="w-full h-full bg-gradient-to-r from-white to-transparent py-6">
          <div className="h-[50vh] mx-auto max-w-5xl flex items-center">
            <div className="absolute z-10">
              <div className="text-center md:text-left w-full md:max-w-lg text-base px-3 mx-auto">
                <span className="text-3xl lg:text-4xl font-heading font-bold leading-tight">
                  ಗರ್ಭಗುಡಿ IVF ಸೆಂಟರ್
                  {branchTitle && (
                    <span className="text-brandPink"> {branchTitle}</span>
                  )}{" "}
                  ಶಾಖೆಗೆ ಸ್ವಾಗತ
                </span>
                <h3 className="mt-4 font-semibold font-content leading-7">
                  ಕರ್ನಾಟಕದಾದ್ಯಂತ ನಾವು ಒಂಭತ್ತು ಅತ್ಯಾಧುನಿಕ ಶಾಖೆಗಳನ್ನು ಹೊಂದಿದ್ದೇವೆ.
                  ತಮಿಳುನಾಡಿನ ಹೊಸೂರಿನ ಶಾಖೆಯಲ್ಲಿ ಎಲ್ಲಾ ರೀತಿಯ ಇನ್‌ಫರ್ಟಿಲಿಟಿ
                  ಸಮಸ್ಯೆಗಳಿಗೂ ವಿಶ್ವದರ್ಜೆಯ ಚಿಕಿತ್ಸೆ ದೊರೆಯಲಿದೆ. <br />
                  ನಮ್ಮ ಸೇವೆಗಳ ಕುರಿತು ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಲು ಮತ್ತು ನಿಮಗೆ
                  ಹತ್ತಿರವಾದ ನಮ್ಮ ಶಾಖೆಯನ್ನು ಹುಡುಕಲು ಇಂದೇ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.
                </h3>
              </div>
              <div className="lg:text-left lg:px-3 text-center">
                <button className="px-4 mt-4 font-content font-semibold text-white pb-2 pt-3 bg-brandPink hover:bg-brandPink4 rounded-lg">
                  <Link href={"/contact/enquiry"}>ಸಂಪರ್ಕಿಸಿ</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
