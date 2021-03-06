import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const navigation = {
  about: [
    { name: "ಮಿಷನ್ ಮತ್ತು ದೃಷ್ಟಿ", href: "/about/vision-and-mission" },
    { name: "ನಿರ್ದೇಶಕರು", href: "/about/overview" },
    {
      name: "ಪ್ರಶಸ್ತಿಗಳು ಮತ್ತು ಪುರಸ್ಕಾರಗಳು",
      href: "/about/awards-and-accolades",
    },
    { name: "ಡಾ ಆಶಾ ಎಸ್ ವಿಜಯ್", href: "https://drashasvijay.com" },
  ],
  support: [
    { name: "GG CARE", href: "/gg-care" },
    { name: "ರೋಗನಿರ್ಣಯದ ಆಯ್ಕೆಗಳು", href: "/resources/diagnosis" },
    { name: "ಚಿಕಿತ್ಸೆಯ ಆಯ್ಕೆಗಳು", href: "/resources/treatments" },
  ],
  company: [
    { name: "ಗರ್ಭಗುಡಿ", href: "/about/overview" },
    { name: "GGIRHR", href: "https://ggirhr.com" },
    { name: "ಗರ್ಭಜ್ಞಾನ್ ಫೌಂಡೇಶನ್", href: "https://garbhagnan.org" },
    { name: "ಗರ್ಭಗುಡಿ ಫಾರ್ಮಾ", href: "#" },
  ],
  legal: [
    { name: "ಗೌಪ್ಯತೆ", href: "https://garbhagudi.com/legal/privacy-policy" },
    {
      name: "ನಿಯಮಗಳು",
      href: "https://garbhagudi.com/legal/terms-and-conditions",
    },
    {
      name: "ಮರುಪಾವತಿ ನೀತಿ",
      href: "https://garbhagudi.com/legal/refund-policy",
    },
  ],
};

export default function Footer() {
  return (
    <footer
      className="bg-neutral-50 font-content"
      aria-labelledby="footerHeading"
      id="footer"
    >
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:py-8 lg:px-8 border-t">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-full text-center antialiased">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-brandliteGray tracking-wider uppercase">
                  ನಮ್ಮ ಬಗ್ಗೆ
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {navigation.about.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} passHref>
                        <span className=" text-brandDark hover:text-brandPink hover:underline cursor-pointer">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-brandliteGray tracking-wider uppercase">
                  ಸಪೋರ್ಟ್
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link passHref href={item.href}>
                        <span className=" text-brandDark hover:text-brandPink hover:underline cursor-pointer">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-brandliteGray tracking-wider uppercase">
                  ಸಂಸ್ಥೆ
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} rel="noreferrer" target={"_blank"}>
                        <span className=" text-brandDark hover:text-brandPink hover:underline cursor-pointer">
                          {item.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-brandliteGray tracking-wider uppercase">
                  ಕಾನೂನು
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link passHref href={item.href}>
                        <span className=" text-brandDark hover:text-brandPink hover:underline cursor-pointer">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-gray-200 ">
        <div className="mt-8 space-x-2 flex items-ceter justify-center">
          <SocialIcon
            url="https://www.youtube.com/c/GarbhaGudiIVFCentre"
            style={{ width: "40px", height: "40px" }}
            target="_blank"
          />
          <SocialIcon
            url="https://www.facebook.com/garbhagudiIVF/"
            style={{ width: "40px", height: "40px" }}
            target="_blank"
          />
          <SocialIcon
            url="https://www.linkedin.com/company/garbagudi"
            style={{ width: "40px", height: "40px" }}
            target="_blank"
          />
          <SocialIcon
            url="https://api.whatsapp.com/send/?phone=918884183338&text=Hi."
            style={{ width: "40px", height: "40px" }}
            target="_blank"
          />
          <SocialIcon
            url="https://twitter.com/garbhagudiivf"
            style={{ width: "40px", height: "40px" }}
            target="_blank"
          />
          <SocialIcon
            url="mailto:dreams@garbhagudi.com"
            style={{ width: "40px", height: "40px" }}
            target="_blank"
          />
        </div>
        <p className="font-content text-gray-900 text-center py-8">
          &copy; {new Date().getFullYear()} GarbhaGudi IVF Centre, Inc. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
