import React from "react";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

const Video = () => {
  return (
    <div>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 mb-16 ">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl font-heading">
                <span className="block text-gray-900">ಗರ್ಭಗುಡಿಯ</span>
                <span className="block text-brandPink3">ಧ್ಯೇಯ </span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-content">
              &quot;ಪೋಷಕರಾಗಲು ಬಯಸುವ ಪ್ರತಿ ದಂಪತಿಗಳ ಕೈಗೆಟಕುವ ವ್ಯಾಪ್ತಿಯೊಳಗೆ ಅಸಾಧಾರಣ
              ಗುಣಮಟ್ಟದ ಸಂತಾನೋತ್ಪತ್ತಿ ಆರೋಗ್ಯ ರಕ್ಷಣೆಯನ್ನು ಒದಗಿಸಲು. ಮಾನವತೆಯ
              ಕಲ್ಯಾಣಕ್ಕಾಗಿ ಶಿಕ್ಷಣ, ಸಂಶೋಧನೆ ಮತ್ತು ಆರೋಗ್ಯ ಸೇವೆಯಲ್ಲಿ ಯಶಸ್ಸು ಮತ್ತು
              ಶ್ರೇಷ್ಠತೆಯನ್ನು ಸಾಧಿಸಲು ನಾವು ಅಚಲವಾಗಿ ಶ್ರಮಿಸುತ್ತೇವೆ.&quot;
            </p>
          </div>
          <div className="mt-12 relative sm:max-w-xl sm:mx-auto lg:mt-0 lg:max-w-xl lg:mx-0 lg:col-span-6">
            <div className="relative mx-auto w-full aspect-video shadow-lg rounded-3xl overflow-hidden">
              <LiteYouTubeEmbed
                id="3l4gWsVlhE4"
                title="Successful IVF Treatment Testimonial | ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಕೇಂದ್ರ | Dr Asha S Vijay"
                poster="maxresdefault"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Video;
