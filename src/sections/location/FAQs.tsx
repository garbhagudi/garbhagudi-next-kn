import Link from "next/link";

const Faq = () => {
  return (
    <div>
      <section className="mx-auto max-w-7xl pt-8 font-content">
        <div className="container mx-auto flex flex-col justify-center px-4 py-8 text-gray-800 dark:text-gray-200 md:p-8">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold leading-none sm:text-4xl">
            ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು
          </h2>
          <div className="divide-y divide-gray-700 dark:divide-gray-600">
            <div className="space-y-2 py-6 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-4">
                ದಾವಣಗೆರೆಯ ಗರ್ಭಗುಡಿ IVF ಸೆಂಟರನ್ನು ಸಂಪರ್ಕಿಸುವುದು ಹೇಗೆ?
              </h3>
              <div className="md:col-span-8 md:pl-0">
                ನೀವು ನಮ್ಮ ದಾವಣಗೆರೆ IVF ಸೆಂಟರ್‌ ಸಂಪರ್ಕಿಸಬೇಕಾದರೆ ನೇರವಾಗಿ ದಾವಣಗೆರೆ
                ಶಾಖೆಗೆ ಭೇಟಿ ನೀಡಬಹುದು ಅಥವಾ ಯಾವುದೇ ಮಾಹಿತಿ ಪಡೆಯಲು ನೀವು ಕೆಳಕಂಡ ಫೋನ್‌
                ನಂಬರ್‌ಗೆ ಕರೆ ಮಾಡಿ ಸಂಪೂರ್ಣ ಮಾಹಿತಿ ಪಡೆಯಬಹುದು.
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {getInTouch.map((items) => (
                    <div key={items.id}>
                      <div>
                        <div className="font-bold">{items.name}</div>
                        <div>
                          <Link
                            href={`mailto:${items.email}`}
                            className="font-semibold text-brandPurpleDark hover:underline dark:text-purple-400"
                          >
                            {items.email}
                          </Link>
                        </div>
                        <Link
                          href={`tel:${items.phone}`}
                          className="text-gg-500 hover:underline dark:text-gg-400"
                        >
                          {items.phone}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-2 py-6 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-4">
                ದಾವಣಗೆರೆಯಲ್ಲಿ IVF ಯಶಸ್ಸಿನ ಪ್ರಮಾಣ ಎಷ್ಟಿದೆ?
              </h3>
              <div className="md:col-span-8 md:pl-0">
                IVF ಯಶಸ್ಸಿನ ಪ್ರಮಾಣದ ನಿರ್ಧಾರ ಹಲವು ಅಂಶಗಳನ್ನು ಒಳಗೊಂಡಿದೆ. ಅಲ್ಲದೆ
                ಒಂದು IVF ಸೆಂಟರ್‌ಗೂ ಇನ್ನೊಂದು IVF ಸೆಂಟರ್‌ಗೂ ಯಶಸ್ಸಿನ ಪ್ರಮಾಣದಲ್ಲಿ
                ವ್ಯತ್ಯಾಸವಿರುತ್ತದೆ. ಆದ್ದರಿಂದ ಒಳ್ಳೆಯ ಯಶಸ್ಸಿರುವ IVF ಸೆಂಟರನ್ನು ಆಯ್ಕೆ
                ಮಾಡಿಕೊಳ್ಳುವುದು ಬಹಳ ಮುಖ್ಯವಾಗುತ್ತದೆ. ಅಲ್ಲದೆ ಕೆಲವು IVF ಸೆಂಟರ್‌ಗಳು,
                ಕೆಲವು ವೈದ್ಯಕೀಯ ವಿಧಾನಗಳು ಕೆಲವು ದಂಪತಿಗಳಲ್ಲಿ ಮಾತ್ರ ಒಳ್ಳೆಯ ಯಶಸ್ಸನ್ನು
                ನೀಡುತ್ತವೆ.
              </div>
            </div>

            <div className="space-y-2 py-6 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-4">
                ದಾವಣಗೆರೆ ಶಾಖೆಯಲ್ಲಿ ಒಟ್ಟು IVF ಚಿಕಿತ್ಸಾ ವೆಚ್ಚ ಎಷ್ಟಿದೆ?
              </h3>
              <div className="md:col-span-8 md:pl-0">
                IVF ವೆಚ್ಚ ಪ್ರತಿ ದಂಪತಿಯ ಅವಶ್ಯಕತೆಗನುಗುಣವಾಗಿ ನಿರ್ಧಾರವಾಗುತ್ತದೆ. ಅವರ
                ಆರೋಗ್ಯದ ಮೇಲೂ ನಿರ್ಧಾರವಾಗುತ್ತದೆ. ದಾವಣೆಗೆರೆಯಲ್ಲಿ IVF ದರ ರೂ.1,50,000
                ದಿಂದ ಆರಂಭವಾಗುತ್ತದೆ. ನಮ್ಮ ಪಲವತ್ತತೆ ತಜ್ಞರನ್ನು ಭೇಟಿ ಮಾಡಿ ಅವರ ಜೊತೆ
                ಚರ್ಚಿಸಿ ಸರಿಯಾದ ವೆಚ್ಚ, ಇತರೆ ವೆಚ್ಚ ಎಲ್ಲದರ ಮಾಹಿತಿ ಪಡೆಯಬಹುದು.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;

const getInTouch = [
  {
    id: 1,
    name: "ಅಪಾಯಿಂಟ್ಮೆಂಟ್‌ ಮತ್ತು ಮಾಹಿತಿಗಾಗಿ",
    email: "dreams@garbhagudi.com",
    phone: "+91 9108 9108 32",
  },
  {
    id: 2,
    name: "ಸಲಹೆ & ದೂರುಗಳು",
    email: "grievance@garbhagudi.com",
    phone: "+91 9108 9108 32",
  },
  {
    id: 3,
    name: "HR ವಿಭಾಗ ",
    email: "hr@garbhagudi.com",
  },
  {
    id: 4,
    name: "ಪಾಲುದಾರಿಕೆ ",
    email: "jayaram@garbhagudi.com",
  },
];
