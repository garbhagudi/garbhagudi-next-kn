import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import {
  About,
  WhyGarbhaGudi,
  TreatmentOptions,
  KnowledgeCenter,
  ContactUs,
  Locations,
  Languages,
} from "components/header/popover";
import LanguageSelect from "components/languageSelect";
import Logo from "components/assets/logo";
// import TranslateWidget from "components/TranslatorWidget";

const menu = [
  {
    id: 1,
    option: <TreatmentOptions />,
  },
  {
    id: 2,
    option: <About />,
  },
  {
    id: 3,
    option: <WhyGarbhaGudi />,
  },
  {
    id: 4,
    option: <KnowledgeCenter />,
  },
  {
    id: 5,
    option: <ContactUs />,
  },
  {
    id: 6,
    option: <Locations />,
  },
  {
    id: 7,
    option: <Languages />,
  },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white shadow-xl sticky top-0 z-50">
      <nav className="shadow-2xl">
        <nav className="lg:px-6 lg:py-2 px-2">
          <div className="flex justify-between items-center max-w-screen-xl mx-auto">
            <Link href="/" className="hidden items-center xl:flex">
              <Logo />
            </Link>
            <Link href="/" className="flex items-center xl:hidden">
              <img
                className="h-full w-16"
                src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1659164257/logos/GG_Vertical_Logo_nrcl5h.svg"
                alt="logo"
              />
            </Link>

            <div className="flex items-center lg:order-2">
              <Link
                href="/contact/enquiry"
                target={"_blank"}
                rel="noreferrer"
                className="bg-brandPink rounded-lg text-white text-xs cursor-pointer font-semibold font-tiro hover:bg-brandPink3 px-3 py-2 xl:text-base"
              >
                ಬುಕ್ ಮಾಡಿ
              </Link>
              <div className="flex justify-center -mr-2 items-center ml-2 xl:hidden">
                <div className="mr-4 z-10">
                  <LanguageSelect />
                </div>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 justify-center p-2 rounded-full text-gray-200 focus:outline-none hover:bg-gray-800 hover:text-white inline-flex items-center mr-1"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <div className="sr-only">Open main menu</div>
                  {!isOpen ? (
                    <HiOutlineMenuAlt3 className="h-6 w-6 block" />
                  ) : (
                    <HiX className="h-6 w-6 block" />
                  )}
                </button>
              </div>
            </div>
            {/* <div className=" mx-2.5">
              <TranslateWidget />
            </div> */}
            <div
              className="justify-between w-full hidden items-center lg:flex lg:order-1 lg:w-auto"
              id="desktop-Menu"
            >
              <div className="flex flex-col font-medium lg:flex-row lg:mt-0 lg:space-x-8 mt-4 py-2">
                <div className="hidden xl:block">
                  <div className="flex items-baseline space-x-4">
                    {menu.map((items) => (
                      <div
                        key={items.id}
                        className="rounded-lg text-base text-gray-800 duration-200 ease-in font-bold font-tiro hover:bg-brandPink hover:text-white transition-all"
                      >
                        {items.option}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="bg-white mt-2 pb-2 xl:hidden" id="mobile-menu">
            <div className="px-2">
              {menu.map((items) => (
                <div
                  key={items.id}
                  className="rounded-md text-brandDark text-sm font-semibold font-tiro hover:bg-brandPink hover:text-white"
                >
                  <div>{items.option}</div>
                </div>
              ))}
              <Link
                href="https://consult.bestdocapp.com/home/GARBHAGUDI"
                target={"_blank"}
                rel="noreferrer"
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-md text-brandDark text-opacity-90 text-sm block cursor-pointer font-semibold font-tiro hover:bg-brandPink hover:text-white px-2 py-2"
              >
                ಬುಕ್ ಮಾಡಿ
              </Link>
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  );
};

export default Nav;
