import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BannerBelowContent = ({ branchTitle }) => {
  const path = usePathname();
  return (
    <div>
      <div className="h-full w-full">
        <Image
          src={
            "https://ap-south-1.graphassets.com/A7M5IxnSTWGtcRy2NVnmfz/cme6vu6fb00ff07pim0rjhnym"
          }
          alt="GarbhaGudi IVF Centre - Bangalore"
          className="mx-auto h-full w-full"
          width={1920}
          height={1080}
          priority
        />
      </div>
      <div className="flex flex-col items-center pt-9">
        <div className="mx-auto flex w-full flex-col items-center px-3 text-center text-base text-gray-800 dark:text-gray-200 md:max-w-lg md:text-left lg:max-w-3xl">
          <span className="text-3xl lg:text-4xl font-heading font-bold leading-tight">
            ಗರ್ಭಗುಡಿ IVF ಸೆಂಟರ್
            {branchTitle && (
              <span className="text-brandPink"> {branchTitle}</span>
            )}{" "}
            ಶಾಖೆಗೆ ಸ್ವಾಗತ
          </span>
          <h3 className="mt-4 font-content text-base font-semibold leading-7 text-gray-800 dark:text-gray-200 md:text-lg">
            ಕರ್ನಾಟಕದಾದ್ಯಂತ ನಾವು ಒಂಭತ್ತು ಅತ್ಯಾಧುನಿಕ ಶಾಖೆಗಳನ್ನು ಹೊಂದಿದ್ದೇವೆ.
            ತಮಿಳುನಾಡಿನ ಹೊಸೂರಿನ ಶಾಖೆಯಲ್ಲಿ ಎಲ್ಲಾ ರೀತಿಯ ಇನ್‌ಫರ್ಟಿಲಿಟಿ ಸಮಸ್ಯೆಗಳಿಗೂ
            ವಿಶ್ವದರ್ಜೆಯ ಚಿಕಿತ್ಸೆ ದೊರೆಯಲಿದೆ. <br />
            ನಮ್ಮ ಸೇವೆಗಳ ಕುರಿತು ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಲು ಮತ್ತು ನಿಮಗೆ ಹತ್ತಿರವಾದ ನಮ್ಮ
            ಶಾಖೆಯನ್ನು ಹುಡುಕಲು ಇಂದೇ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.
          </h3>
        </div>
        <div className="text-center lg:px-3 lg:text-left">
          <button className="mt-4 rounded-lg bg-brandPink px-4 py-2 font-content font-semibold text-white hover:bg-brandPink2 dark:bg-gray-500 dark:hover:bg-brandPink2">
            <Link href={`/contact/enquiry?pageVisit=${path}`}>ಸಂಪರ್ಕಿಸಿ</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerBelowContent;
