import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  About,
  Treatment,
  KnowledgeCenter,
  Contact,
  Locations,
} from "components/header/popover";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="sticky top-0 z-50">
      <nav className="border-b pb-4 bg-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between align-middle cursor-pointer">
              <div className="flex-shrink-0 pt-4 ">
                <Link href="/" passHref>
                  <a>
                    <img
                      className="h-full w-48 xl:w-64 "
                      src="https://res.cloudinary.com/garbhagudi/image/upload/v1633780956/garbhagudi-ivf/SVGs/logo_tyy9tg.svg"
                      alt="logo"
                    />
                  </a>
                </Link>
              </div>

              <div className="hidden xl:block">
                <div className=" ml-16 flex items-baseline space-x-4 pt-4 ">
                  <Link href="/" passHref>
                    <span
                      className={
                        router.pathname == "/"
                          ? "bg-brandPink text-white px-3 py-2 rounded-2xl text-xl font-kanContent"
                          : "text-gray-700 hover:bg-brandPink hover:text-white px-3 py-2 rounded-2xl text-xl font-kanContent cursor-pointer"
                      }
                    >
                      ªÀÄ£É
                    </span>
                  </Link>

                  <span className="text-gray-700 hover:bg-brandPink hover:text-white rounded-2xl px-3 py-2 text-sm font-kanContent">
                    <About />
                  </span>

                  <span className=" text-gray-700 hover:bg-brandPink hover:text-white rounded-2xl px-3 py-2 text-sm font-kanContent">
                    <Treatment />
                  </span>

                  <span className=" text-gray-700 hover:bg-brandPink hover:text-white rounded-2xl px-3 py-2 text-sm font-kanContent">
                    <KnowledgeCenter />
                  </span>
                  <span className="text-gray-700 hover:bg-brandPink hover:text-white rounded-2xl px-3 py-2 text-sm font-kanContent">
                    <Contact />
                  </span>
                  <span className="text-gray-700 hover:bg-brandPink hover:text-white rounded-2xl px-3 py-2 text-sm font-kanContent">
                    <Locations />
                  </span>

                  <a
                    href="https://consult.bestdocapp.com/home/GARBHAGUDI"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <span className="text-white bg-brandPink font-semibold px-3 py-2 rounded-2xl text-xl font-kanHeadingBold cursor-pointer hover:bg-brandPink3">
                      £ÉÃªÀÄPÁw
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex xl:hidden">
              <button className="mt-4 mr-4">
                <a
                  href="https://consult.bestdocapp.com/home/GARBHAGUDI"
                  className="bg-brandPink hover:bg-gray-800 text-white px-3 py-2 rounded-2xl text-xs font-bold font-content"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Book Now
                </a>
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 mt-4 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="xl:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/">
                  <a className="text-brandDark hover:bg-brandPink hover:text-white block px-3 py-2 rounded-md text-sm font-content">
                    Home
                  </a>
                </Link>
                <span className="text-brandDark hover:bg-brandPink hover:text-white block px-3 py-2 rounded-md text-sm font-content">
                  <About />
                </span>

                <span className="text-brandDark hover:bg-brandPink hover:text-white block px-3 py-2 rounded-md text-sm font-content">
                  <Treatment />
                </span>
                <span className="text-brandDark hover:bg-brandPink hover:text-white block px-3 py-2 rounded-md text-sm font-content">
                  <KnowledgeCenter />
                </span>
                <span className="text-brandDark hover:bg-brandPink hover:text-white block px-3 py-2 rounded-md text-sm font-content">
                  <Contact />
                </span>
                <span className="text-brandDark hover:bg-brandPink hover:text-white block px-3 py-2 rounded-md text-sm font-content">
                  <Locations />
                </span>
                <a
                  href="https://consult.bestdocapp.com/home/GARBHAGUDI"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className="text-brandDark hover:bg-brandPink hover:text-white block px-3 py-2 rounded-md text-xl font-kanHeadingBold cursor-pointer">
                    £ÉÃªÀÄPÁw
                  </span>
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Nav;
