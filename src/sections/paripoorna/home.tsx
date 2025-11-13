import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const LiteYouTubeEmbed = dynamic(() => import("react-lite-youtube-embed"), {
  ssr: false,
});
interface PriceSlashProps {
  originalPrice: number;
  slashedPrice: number;
}

const PriceSlash: React.FC<PriceSlashProps> = ({
  originalPrice,
  slashedPrice,
}) => {
  const calculateDiscountPercentage = () => {
    const discount = ((originalPrice - slashedPrice) / originalPrice) * 100;
    return Math.round(discount);
  };

  const formatNumberWithCommas = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="flex flex-col items-start py-8">
      <div className="flex items-center space-x-4">
        <div className="font-lexend text-3xl text-gray-600 dark:text-gray-300">
          <span className="font-lexend font-bold line-through">
            ₹{formatNumberWithCommas(originalPrice)}
          </span>{" "}
          IVF ಪ್ಯಾಕೇಜ್‌
        </div>
      </div>
      <div className="mt-5 flex items-center font-lexend text-3xl text-brandPink3 dark:text-brandPink4">
        ಈಗ ಕೇವಲ &nbsp;
        <span className="font-lexend font-bold">
          ₹{formatNumberWithCommas(slashedPrice)}
        </span>
        <div className="ml-2 text-sm text-green-600 dark:text-green-500">
          ({calculateDiscountPercentage()}% ರಿಯಾಯಿತಿ)
        </div>
      </div>
      <div className="mt-5 text-left">
        ಈ ಪ್ಯಾಕೇಜ್‌ನಲ್ಲಿ ಏನೇನು ಸೇರಿದೆ?
        <ul className="list-inside list-disc">
          <li>
            ಸ್ಟಿಮ್ಯುಲೇಷನ್‌ ಸಮಯದಲ್ಲಿ ಸ್ಕ್ಯಾನ್‌ ಮತ್ತು ಫಲವತ್ತತೆ ತಜ್ಞರ ಜೊತೆ
            ಸಮಾಲೋಚನೆ.
          </li>
          <li>ಒವರಿಯನ್‌ ಸ್ಟಿಮ್ಯುಲೇಷನ್‌ ಇಂಜೆಕ್ಷನ್ಸ್‌;</li>
          <li>
            ಲ್ಯಾಬೊರೇಟರಿ ಪರೀಕ್ಷೆಗಳು (ಎರಡು ಸಲ ಎಸ್ಟ್ರಾಡಿಯೋಲ್ ಟೆಸ್ಟ್ಸ್,
            ಲ್ಯುಟೈನೈಜಿಂಗ್ ಹಾರ್ಮೋನ್ ಟೆಸ್ಟ್ಸ್ ಮತ್ತು ಒಂದು ಸಲ ಪ್ರೊಜೆಸ್ಟರಾನ್
            ಟೆಸ್ಟ್‌);
          </li>
          <li>OTಯಲ್ಲಿ ಬಳಸುವ ವಸ್ತುಗಳೊಂದಿಗೆ ಮೊಟ್ಟೆ ಮರುಪಡೆಯುವಿಕೆ (OPU);</li>
          <li>ಇಂಟ್ರಾಸೈಟೋಪ್ಲಾಸ್ಮಿಕ್ ಸ್ಪರ್ಮ್‌ ಇಂಜೆಕ್ಷನ್ (ICSI) ವಿಧಾನ;</li>
          <li>
            ಘನೀಕೃತ ಭ್ರೂಣ ವರ್ಗಾವಣೆ (FET) ಮತ್ತು ಆಪರೇಟಿಂಗ್ ಥಿಯೇಟರ್‌ನಲ್ಲಿ ಬಳಸುವ (OT)
            ವಸ್ತುಗಳು;
          </li>
          <li>ಬ್ಲಾಸ್ಟೊಸಿಸ್ಟ್ ಕಲ್ಚರ್‌;</li>
          <li>3 ತಿಂಗಳ ಕಾಲ ಎಗ್‌ ಫ್ರೀಜಿಂಗ್‌;</li>
          <li>ತಾಜಾ ಭ್ರೂಣ ವರ್ಗಾವಣೆ (ET) / ಘನೀಕೃತ ಭ್ರೂಣ ವರ್ಗಾವಣೆ (FET);</li>
          <li>
            ಅರ್ಹ ದಂಪತಿಗಳಿಗೆ ಅನುಕೂಲವಾಗಲು ಸಮಾಲೋಚನೆ, ಧ್ಯಾನ, ಪ್ರಾಣಾಯಾಮ, ಉಸಿರಾಟಕ್ಕೆ
            ಸಂಬಂಧಪಟ್ಟ ವ್ಯಾಯಾಮಗಳು ಮತ್ತು ಯೋಗಾಸನಗಳನ್ನು ಒಳಗೊಂಡಂತೆ ಉಚಿತ ಸಮಗ್ರ
            ಚಿಕಿತ್ಸೆ.
          </li>
          <li>ಯಾವುದೇ ಒಳ ವೆಚ್ಚಗಳಿಲ್ಲ.</li>
        </ul>
        <div className="mt-8 text-xs">
          *ಮೇಲೆ ತಿಳಿಸಿರುವ ವಿವರಗಳು ಒಂದು ಅವಧಿಗೆ ಮಾತ್ರ ಅನ್ವಯಿಸುತ್ತವೆ. *ನಿಯಮಗಳು
          ಮತ್ತು ಷರತ್ತುಗಳು ಅನ್ವಯ.
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <div className="py-12 text-center font-lexend text-4xl font-bold text-gg-600 lg:py-24 lg:text-5xl">
          <h1 className="mx-auto max-w-lg rounded-md py-2 dark:bg-gray-200 dark:bg-opacity-80">
            ಪರಿಪೂರ್ಣ
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col items-start justify-center px-3">
            <div className="py-8 font-lexend text-2xl font-bold text-gg-500 dark:text-gg-400">
              &quot;ಅತಿ ದೊಡ್ಡ ಉಳಿತಾಯ, ನಿಮ್ಮ IVF ಚಿಕಿತ್ಸೆಯಲ್ಲಿ{" "}
              <span className="text-purple-900 dark:text-purple-200">
                ₹1,11,111 ರಿಯಾಯಿತಿ{" "}
              </span>{" "}
              ಪಡೆಯಿರಿ &quot;
            </div>

            <div className="hidden md:block font-lexend text-lg text-gray-800 dark:text-gray-200">
              ತಾಯ್ತನದ ಅಮೂಲ್ಯ ಸಂತೋಷವನ್ನು ಕಳೆದುಕೊಂಡಿರುವಂಥ ಅನೇಕ ದಂಪತಿಗಳಿದ್ದಾರೆ.
              ಅಂಥವರಿಗೆ ಸಹಾಯವಾಗಲಿ, ಆದಷ್ಟು ಬೇಗ ಚಿಕಿತ್ಸೆ ತೆಗೆದುಕೊಂಡು ಮಕ್ಕಳು
              ಪಡೆದುಕೊಳ್ಳಲಿ ಅನ್ನುವುದು ನಮ್ಮ ಉದ್ದೇಶ. ನಮಗೆ ಗೊತ್ತಿದೆ, ಬಹುತೇಕ
              ದಂಪತಿಗಳಿಗೆ ಐವಿಎಫ್‌ ಚಿಕಿತ್ಸೆ ಭರಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ. ಇದನ್ನು
              ಗಮನದಲ್ಲಿಟ್ಟುಕೊಂಡು ಗರ್ಭಗಡಿ ಐವಿಎಫ್‌ ಸೆಂಟರ್‌ ಗರ್ಭಜ್ಞಾನ್‌ ಫೌಂಡೇಷನ್‌
              ಸಹಯೋಗದೊಂದಿಗೆ ಅತ್ಯಂತ ಮಹತ್ವಾಕಾಂಕ್ಷೆಯ ಪರಿಪೂರ್ಣ ಕಾರ್ಯಕ್ರಮವನ್ನು
              ಜಾರಿಗೊಳಿಸಿದೆ.
              <PriceSlash originalPrice={291111} slashedPrice={180000} />ಈ
              ನವೆಂಬರ್ ಮತ್ತು ಡಿಸೆಂಬರ್ 2025 ರಲ್ಲಿ, ಪರಿಪೂರ್ಣ ಕೊಡುಗೆಯೊಂದಿಗೆ ನಿಮ್ಮ
              ತಾಯ್ತನದ ಆನಂದವನ್ನು ಸಂಭ್ರಮಿಸಿ. ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಕೇಂದ್ರವು ನಿಮ್ಮ ಐವಿಎಫ್
              ವೆಚ್ಚದಲ್ಲಿ{" "}
              <span className="font-bold underline">₹1,11,111/-</span>{" "}
              ರಿಯಾಯಿತಿಯನ್ನು ನೀಡುತ್ತಿದೆ. ಈ ಅವಕಾಶವನ್ನು ಪಡೆಯಲು ಮತ್ತು ನಿಮ್ಮ ತಾಯ್ತನದ
              ಪಯಣದಲ್ಲಿ ಮೊದಲ ಹೆಜ್ಜೆ ಇಡಲು ಹತ್ತಿರದ ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಕೇಂದ್ರಕ್ಕೆ ಭೇಟಿ
              ನೀಡಿ.
              <div className="mt-10 flex flex-col items-start space-x-0 space-y-3 md:items-center lg:flex-row lg:space-x-5 lg:space-y-0">
                <div className="min-w-fit rounded-xl bg-purple-700 px-3 py-2 font-lexend text-white dark:bg-purple-800">
                  <Link href="/contact/enquiry?pageVisit=/features/paripoorna">
                    <div>ಬುಕ್ ಮಾಡಿ</div>
                  </Link>
                </div>
                <div className="min-w-fit cursor-pointer rounded-xl border border-brandPink3 px-3 py-2 font-lexend text-brandPink3 hover:border-brandPink4 hover:bg-brandPink3 hover:text-white dark:hover:bg-brandPink4">
                  <Link
                    href="tel:+919108910832"
                    className="flex items-center gap-2"
                  >
                    <span>ಕರೆಮಾಡಿ: </span>
                    <span>9108 9108 32</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="block md:hidden font-lexend text-lg text-gray-800 dark:text-gray-200">
              ತಾಯ್ತನದ ಅಮೂಲ್ಯ ಸಂತೋಷವನ್ನು ಕಳೆದುಕೊಂಡಿರುವಂಥ ಅನೇಕ ದಂಪತಿಗಳಿದ್ದಾರೆ.
              ಅಂಥವರಿಗೆ ಸಹಾಯವಾಗಲಿ, ಆದಷ್ಟು ಬೇಗ ಚಿಕಿತ್ಸೆ ತೆಗೆದುಕೊಂಡು ಮಕ್ಕಳು
              ಪಡೆದುಕೊಳ್ಳಲಿ ಅನ್ನುವುದು ನಮ್ಮ ಉದ್ದೇಶ. ನಮಗೆ ಗೊತ್ತಿದೆ, ಬಹುತೇಕ
              ದಂಪತಿಗಳಿಗೆ ಐವಿಎಫ್‌ ಚಿಕಿತ್ಸೆ ಭರಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ. ಇದನ್ನು
              ಗಮನದಲ್ಲಿಟ್ಟುಕೊಂಡು ಗರ್ಭಗಡಿ ಐವಿಎಫ್‌ ಸೆಂಟರ್‌ ಗರ್ಭಜ್ಞಾನ್‌ ಫೌಂಡೇಷನ್‌
              ಸಹಯೋಗದೊಂದಿಗೆ ಅತ್ಯಂತ ಮಹತ್ವಾಕಾಂಕ್ಷೆಯ ಪರಿಪೂರ್ಣ ಕಾರ್ಯಕ್ರಮವನ್ನು
              ಜಾರಿಗೊಳಿಸಿದೆ.
              <Image
                src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1731247437/paripoorna/Paripoorna_English_tfrujt.webp"
                alt="pp logo"
                width={500}
                height={500}
                className="mx-auto aspect-square scale-90 lg:scale-105"
                priority={true}
              />
              <PriceSlash originalPrice={291111} slashedPrice={180000} />ಈ
              ನವೆಂಬರ್ ಮತ್ತು ಡಿಸೆಂಬರ್ 2025 ರಲ್ಲಿ, ಪರಿಪೂರ್ಣ ಕೊಡುಗೆಯೊಂದಿಗೆ ನಿಮ್ಮ
              ತಾಯ್ತನದ ಆನಂದವನ್ನು ಸಂಭ್ರಮಿಸಿ. ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಕೇಂದ್ರವು ನಿಮ್ಮ ಐವಿಎಫ್
              ವೆಚ್ಚದಲ್ಲಿ{" "}
              <span className="font-bold underline">₹1,11,111/-</span>{" "}
              ರಿಯಾಯಿತಿಯನ್ನು ನೀಡುತ್ತಿದೆ. ಈ ಅವಕಾಶವನ್ನು ಪಡೆಯಲು ಮತ್ತು ನಿಮ್ಮ ತಾಯ್ತನದ
              ಪಯಣದಲ್ಲಿ ಮೊದಲ ಹೆಜ್ಜೆ ಇಡಲು ಹತ್ತಿರದ ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಕೇಂದ್ರಕ್ಕೆ ಭೇಟಿ
              ನೀಡಿ.
              <div className="mt-10 flex flex-col items-start space-x-0 space-y-3 md:items-center lg:flex-row lg:space-x-5 lg:space-y-0">
                <div className="min-w-fit rounded-xl bg-purple-700 px-3 py-2 font-lexend text-white dark:bg-purple-800">
                  <Link href="/contact/enquiry?pageVisit=/features/paripoorna">
                    <div>ಬುಕ್ ಮಾಡಿ</div>
                  </Link>
                </div>
                <div className="min-w-fit cursor-pointer rounded-xl border border-brandPink3 px-3 py-2 font-lexend text-brandPink3 hover:border-brandPink4 hover:bg-brandPink3 hover:text-white dark:hover:bg-brandPink4">
                  <Link
                    href="tel:+919108910832"
                    className="flex items-center gap-2"
                  >
                    <span>ಕರೆಮಾಡಿ: </span>
                    <span>9108 9108 32</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center justify-center gap-5 lg:ml-10">
            <Image
              src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1731247437/paripoorna/Paripoorna_English_tfrujt.webp"
              alt="pp logo"
              width={500}
              height={500}
              className="mx-auto aspect-square scale-90 lg:scale-105"
              priority={true}
            />
            <div className="relative aspect-[9/16] w-full max-w-[400px] overflow-hidden rounded-lg">
              <LiteYouTubeEmbed
                id="TH68dBLfq2I"
                title="YouTube Shorts | Paripoorna | GarbhaGudi IVF Centre"
                poster="maxresdefault"
                webp={true}
                wrapperClass="lty-playbtn yt-lite"
              />
            </div>
          </div>
          <div className="flex md:hidden flex-col items-center justify-center gap-5 lg:ml-10 mt-5">
            <div className="relative aspect-[9/16] w-full max-w-[400px] overflow-hidden rounded-lg">
              <LiteYouTubeEmbed
                id="TH68dBLfq2I"
                title="YouTube Shorts | Paripoorna | GarbhaGudi IVF Centre"
                poster="maxresdefault"
                webp={true}
                wrapperClass="lty-playbtn yt-lite"
              />
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .lty-playbtn {
            --aspect-ratio: 200% !important;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
