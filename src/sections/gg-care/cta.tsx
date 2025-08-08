import { BsWhatsapp } from "react-icons/bs";
const Cta = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
          <span className="block text-brandPink3">
            ನೀವು ಪ್ರಾರಂಭಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?
          </span>
          <span className="block text-brandDark text-xl md:text-2xl">
            ಮಾಹಿತಿ, ಸಲಹೆ, ಬೆಂಬಲ ಮತ್ತು ತಿಳುವಳಿಕೆಯನ್ನು ಒದಗಿಸಲು ನಾವು ಸಂತೋಷಪಡುತ್ತೇವೆ
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="/contact/enquiry"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 pt-4 border border-transparent font-content text-base font-medium rounded-md text-white bg-brandPink hover:bg-brandPink4"
            >
              ಸಂಪರ್ಕಿಸಿ
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="https://wa.me/919108910832?text=Hi."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-5 py-3  pt-4 border border-transparent font-content text-base font-medium rounded-md text-brandPink bg-white hover:bg-pink-50"
            >
              <BsWhatsapp /> <span className="ml-2">ವಾಟ್ಸ್ಯಾಪ್ಪ್ </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
