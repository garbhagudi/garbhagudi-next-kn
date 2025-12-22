import { useState } from "react";
import Link from "next/link";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";

const MapSection = ({ maplink, address, description, doctors, title }) => {
  const [showFullText, setShowFullText] = useState(false);
  return (
    <div className="px-3">
      <div className="text-gray-600 body-font max-w-7xl mx-auto relative">
        <div className="flex flex-wrap lg:flex-nowrap py-6">
          <div className="flex bg-gray-300 h-[32rem] justify-start p-2 rounded-3xl w-full items-end lg:p-10 lg:w-1/2 md:ml-auto overflow-hidden relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              loading="lazy"
              title="map"
              src={maplink}
            ></iframe>
            <div className="flex flex-wrap bg-white rounded-3xl shadow-3xl py-6 relative">
              <div className="lg:w-1/2 px-6">
                <div className="text-gray-900 text-xs font-qs font-semibold title-font tracking-widest">
                  ವಿಳಾಸ
                </div>
                <p className="text-sm font-content mt-1">{address}</p>
              </div>
              <div className="lg:mt-0 lg:w-1/2 mt-4 px-6">
                <div className="text-gray-900 text-xs font-qs font-semibold tracking-widest">
                  ಇಮೇಲ್
                </div>
                <div className="text-indigo-500 leading-relaxed">
                  <Link
                    href="mailto:dreams@garbhagudi.com"
                    className="text-brandPink text-sm font-qs"
                  >
                    dreams@garbhagudi.com
                  </Link>
                </div>
                <div className="text-gray-900 text-xs font-qs font-semibold mt-4 tracking-widest">
                  ದೂರವಾಣಿ
                </div>
                <p className="text-sm font-qs leading-relaxed">
                  <Link href="tel:+919108910832">+91 9108 9108 32</Link>
                </p>
                <div className="text-gray-900 text-xs font-qs font-semibold mt-4 tracking-widest">
                  WhatsApp
                </div>
                <p className="text-sm font-qs leading-relaxed">
                  <Link
                    href="https://wa.me/918951813344?text=Hi."
                    target="_blank"
                    rel="noreferrer"
                  >
                    +91 89518 13344
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center px-6 font-content  lg:w-1/2">
            <h2 className="py-3 font-heading text-xl font-bold lg:text-2xl">
              ಗರ್ಭಗುಡಿ IVF ಕೇಂದ್ರ, {title}
            </h2>
            <div
              className={`relative w-full transition-all duration-500 ease-in-out ${
                showFullText ? "max-h-full" : "max-h-[480px] overflow-hidden"
              } break-words whitespace-normal overflow-x-hidden`}
            >
              <RichText content={description} />
              {!showFullText && (
                <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-white to-transparent dark:from-gray-900"></div>
              )}
            </div>

            <button
              onClick={() => setShowFullText(!showFullText)}
              className="mt-4 text-sm font-semibold text-brandPink transition hover:underline"
            >
              {showFullText ? "ಸಂಕ್ಷೇಪಿಸಿ" : "ಇನ್ನಷ್ಟು ಓದಿ"}
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-white w-full md:mt-0 pb-8">
          <h2 className="text-2xl text-center font-heading font-semibold lg:mt-0 py-10">
            {title} ನಲ್ಲಿ ಫಲವತ್ತತೆ ತಜ್ಞರು
          </h2>
          <div className="mx-auto grid grid-cols-2 gap-3 space-y-0 sm:gap-8 sm:space-y-0 lg:grid-cols-6">
            {doctors?.map((item) => (
              <div
                className="mx-auto mb-2 flex transform flex-col items-center justify-start text-center transition-all duration-500 ease-in-out hover:scale-105"
                key={item?.id}
              >
                <Link href={`/fertility-experts/${item?.slug}`} passHref>
                  <div className="space-y-4">
                    <div className="relative mx-auto h-40 w-40">
                      <div className="bg-[length: 400%] absolute h-full w-full animate-rotate rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40"></div>
                      <Image
                        className="rounded-full bg-transparent shadow-2xl drop-shadow-2xl"
                        src={item?.image?.url}
                        alt={item?.name}
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-brandDark font-content ">
                          {item?.name}
                        </h3>
                        <p className="text-brandPurple text-sm font-content">
                          {item?.qualification}
                        </p>
                        <p className="font-content text-sm text-brandPink">
                          {item?.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
