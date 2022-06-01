const Header = () => {
  return (
    <div className="relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden xl:block absolute right-0 inset-y-0 h-full w-56 mr-4 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight sm:text-5xl md:text-6xl font-heading font-bold text-brandliteGray">
                <span className="block xl:inline ">ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಸೆಂಟರ್</span>
              </h1>
              <p className="mt-3 text-base text-brandDark sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-content overflow-visible z-10">
                ಗರ್ಭಗುಡಿ ಹೊಸ ಪೀಳಿಗೆಯ ಸಂತಾನಪ್ರಾಪ್ತಿ ಚಿಕಿತ್ಸಾ ಆಸ್ಪತ್ರೆಗಳ
                ಸರಣಿಯಾಗಿದ್ದು, ಈ ನಿರಂತರ ಹೆಚ್ಚುತ್ತಿರುವ ಸಮಸ್ಯೆಯನ್ನು ಪರಿಹರಿಸಲು
                ಅತ್ಯಾಧುನಿಕ ಮೂಲಸೌಕರ್ಯ ಮತ್ತು ಅತ್ಯಾಧುನಿಕ ತಂತ್ರಜ್ಞಾನವನ್ನು ಹೊಂದಿದೆ.
                ಪ್ರಸಿದ್ಧ ಸ್ತ್ರೀರೋಗತಜ್ಞೆ ಮತ್ತು ಫರ್ಟಿಲಿಟಿ ತಜ್ಞರಾದ ಡಾ. ಆಶಾ ಎಸ್
                ವಿಜಯ್ ನೇತೃತ್ವದ ಬದ್ಧತೆಯುಳ್ಳ ಉದ್ಯಮಿಗಳು ಮತ್ತು ಆರೋಗ್ಯ ತಜ್ಞರ ತಂಡವು ಈ
                ಕೇಂದ್ರವನ್ನು ಸ್ಥಾಪಿಸಿದೆ.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 ">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full "
          src="https://res.cloudinary.com/garbhagudiivf/image/upload/q_auto:eco/v1643461022/Banner/About_us_xg1b1l.webp"
          alt=""
        />
      </div>
    </div>
  );
};
export default Header;
