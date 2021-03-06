import { Popover, Transition } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";
import { Fragment } from "react";
import Link from "next/link";

const contact = [
  {
    name: "GG CARE",
    href: "/gg-care",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643459544/Icons/Contact/GG_Care_e7e1pc.svg",
  },

  {
    name: "ವೃತ್ತಿಗಳು",
    href: "https://garbhagudi.com/careers",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643264774/Icons/Contact/Careers_cgpaic.svg",
  },
  {
    name: "ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮ",
    href: "https://ggirhr.com",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643264793/Icons/Contact/Training_Program_dh9imv.svg",
  },
  // {
  //   name: "Upcoming Camps",
  //   href: "##",
  //   icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643264796/Icons/Contact/Up_coming_camps_pczhfy.svg",
  // },
  {
    name: "ಪಾಲುದಾರಿಕೆ",
    href: "https://garbhagudi.com/contact/partnership",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643264809/Icons/Contact/Partnership_srnnr9.svg",
  },
];

const language = [
  {
    name: "ಕನ್ನಡ ",
    href: "/",
  },
  {
    name: "English",
    href: "https://garbhagudi.com",
  },
];

const Resources = [
  // {
  //   name: "Blogs",
  //   description:
  //     "Our Blogs and Articles regarding Infertility, treatment and parenthood",
  //   href: "/blogs/page/1",
  //   icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642839773/Icons/Resources/Blogs_duatrt.svg",
  // },
  {
    name: "ಕಾರಣಗಳು",
    description: "ಬಂಜೆತನಕ್ಕೆ ಪ್ರಮುಖ ಕಾರಣಗಳು",
    href: "/resources/causes/",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642839775/Icons/Resources/Causes_cfivce.svg",
  },
  {
    name: "ರೋಗನಿರ್ಣಯ",
    description: "ಬಂಜೆತನ ರೋಗನಿರ್ಣಯಕ್ಕೆ ಪರೀಕ್ಷೆಗಳು",
    href: "/resources/diagnosis",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642839791/Icons/Resources/Diagnosis_psjq8s.svg",
  },
  {
    name: "ಚಿಕಿತ್ಸೆಗಳು",
    description: "ಚಿಕಿತ್ಸೆಯ ಆಯ್ಕೆಗಳು",
    href: "/resources/treatments",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642839802/Icons/Resources/Treatments_kcqops.svg",
  },
  // {
  //   name: "Events and Webinars",
  //   description: "Live Events",
  //   href: "##",
  //   icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642839833/Icons/Resources/Events_Webinars_buec8s.svg",
  // },
  {
    name: "FAQ",
    description: "ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು",
    href: "/resources/faq",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643264858/Icons/Resources/FAQs_x8rsvf.svg",
  },
];

const Location = [
  {
    name: "ಹನುಮಂತನಗರ",
    href: "/locations/hanumanthanagar",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643351546/Icons/Locations/Hanumanthanagar_ykripm.svg",
  },
  {
    name: "ಕಲ್ಯಾಣ್ ನಗರ",
    href: "/locations/kalyan-nagar",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643351546/Icons/Locations/Kalyan_Nagar_ivtier.svg",
  },
  {
    name: "ಸೌತ್ ಎಂಡ್ ಸರ್ಕಲ್",
    href: "/locations/south-end-circle",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643351530/Icons/Locations/South_End_Circle_l3ffwj.svg",
  },
  {
    name: "ಇಲೆಕ್ಟ್ರಾನಿಕ್ ಸಿಟಿ",
    href: "/locations/electronic-city",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643351530/Icons/Locations/Electronic_City_xntwob.svg",
  },
  {
    name: "ಮಾರತಹಳ್ಳಿ",
    href: "/locations/marathahalli",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643351530/Icons/Locations/Marathahalli_p99ljc.svg",
  },
];

const valueAddedServices = [
  {
    name: "ಐವಿಎಫ್‍ನ ಯಶಸ್ಸಿನ ಮಟ್ಟಗಳು",
    href: "/features/success-rates-of-ivf",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642841374/Icons/Why%20GarbhaGudi/Success_Rate_abmaf0.svg",
  },
  {
    name: "ವಿಶ್ವ ದರ್ಜೆಯ ಫರ್ಟಿಲಿಟಿ ಆರೈಕೆ",
    href: "/features/world-class-fertility-care",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840286/Icons/Features/World_Class_Fertility_Care_un83f6.svg",
  },
  {
    name: "ಉನ್ನತ ಫಲವತ್ತತೆ ತಜ್ಞರು",
    href: "/locations/fertility-experts",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840305/Icons/Features/Top_Fertility_Specialists_zkyl9x.svg",
  },
  {
    name: "ಕೈಗೆಟುಕುವ ಚಿಕಿತ್ಸೆಗಳು",
    href: "/features/affordable-treatments",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840310/Icons/Features/Affordable_Treatment_lwaaku.svg",
  },
  {
    name: "ಸಮಗ್ರ ಮಾರ್ಗ",
    href: "/features/holistic-approach",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642841451/Icons/Why%20GarbhaGudi/Holistic_Approach_sxh54y.svg",
  },
  {
    name: "ಹಣಕಾಸು ನೆರವು ಆಯ್ಕೆಗಳು",
    href: "/features/financing-options",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840329/Icons/Features/Financial_Options_rrv8hi.svg",
  },
  {
    name: "ಸಾಂಪ್ರದಾಯಿಕ ಶಿಷ್ಟಾಚಾರಗಳು",
    href: "/features/treatment-protocols",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840352/Icons/Features/Treatment_Protocols_hll4cu.svg",
  },
  {
    name: "ಮನೆಯಿಂದ ಐವಿಫ್ ",
    href: "/features/ivf-from-home",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642841462/Icons/Why%20GarbhaGudi/IVF_from_Home_qriw7n.svg",
  },
  {
    name: "ಅತ್ಯುತ್ತಮ ಸೌಲಭ್ಯಗಳು",
    href: "/features/best-in-class-facilities",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840357/Icons/Features/Best_in_Class_Facilities_fchmjr.svg",
  },
  {
    name: "ಪರಿಪೂರ್ಣ",
    href: "/features/paripoorna",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642841468/Icons/Why%20GarbhaGudi/Paripoorna_nikziu.svg",
  },
  {
    name: "ಗರ್ಭಗೃಹ",
    href: "/features/garbhagriha",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642841473/Icons/Why%20GarbhaGudi/GarbhaGriha_gyai6w.svg",
  },
];

const aboutUs = [
  {
    name: "ನಮ್ಮ ಬಗ್ಗೆ",
    href: "/about/overview",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642838895/Icons/About/About_Us_01_yz3h95.svg",
  },
  {
    name: "ಮಿಷನ್ ಮತ್ತು ವಿಷನ್",
    href: "/about/vision-and-mission",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642839038/Icons/About/Vision_jaxu8d.svg",
  },
  {
    name: "ಡಾ ಆಶಾ ಎಸ್ ವಿಜಯ್",
    href: "/doctors/dr-asha-s-vijay",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642838895/Icons/About/Asha_Vijay_zpq05s.svg",
  },
  {
    name: "ಸಂಸ್ಥಾಪಕರು ಮತ್ತು ನಿರ್ದೇಶಕರು",
    href: "/about/overview",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642839222/Icons/About/Directors_w3497h.svg",
  },
  {
    name: "ನಮ್ಮ ಫಲವತ್ತತೆ ತಜ್ಞರು",
    href: "/locations/fertility-experts",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642839012/Icons/About/Our_Fertility_Experts_bxsrrh.svg",
  },
  // {
  //   name: "Media",
  //   href: "/locations/media",
  //   icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643442839/Icons/About/Media_nyook4.svg",
  // },
  {
    name: "ಸಿಎಸ್ಆರ್",
    href: "https://garbhagnan.org",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643442833/Icons/About/CSR_qjlfzx.svg",
  },
  {
    name: "ಪ್ರಶಸ್ತಿಗಳು ಮತ್ತು ಪುರಸ್ಕಾರಗಳು",
    href: "/about/awards-and-accolades",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642838895/Icons/About/Awards_Accorlads_z68rlr.svg",
  },
];

export function About() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? "" : "text-opacity-90"}
                 `}
          >
            <span className="text-md">
              ನಮ್ಮ ಬಗ್ಗೆ <HiChevronDown className="inline-block" />
            </span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-screen max-w-md px-4 mt-7 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-xl">
              <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-5 grid-cols-2 lg:grid-cols-2">
                  {aboutUs.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-pink-100 focus:outline-none"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                        <img src={item.icon} alt={item.name} />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900 font-content">
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export function Treatment() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                  ${open ? "" : "text-opacity-90"}
                   `}
          >
            <span className="text-md">
              ಗರ್ಭಗುಡಿ ಏಕೆ?
              <HiChevronDown className="inline-block" />
            </span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-screen max-w-md px-4 mt-7 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-5 grid-cols-2 lg:grid-cols-3">
                  {valueAddedServices.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-pink-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                        <img src={item.icon} alt={item.name} />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export function KnowledgeCenter() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                  ${open ? "" : "text-opacity-90"}
                  `}
          >
            <span>
              ಸಂಪನ್ಮೂಲಗಳು <HiChevronDown className="inline-block" />
            </span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-96 px-4 mt-7 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-xl">
              <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-5 lg:grid-cols-1">
                  {Resources.map((item) => (
                    <Link key={item.name} href={item.href} passHref>
                      <a className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-pink-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                          <img src={item.icon} alt={item.name} />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export function Contact() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                  ${open ? "" : "text-opacity-90"}
                  `}
          >
            <span>
              ಸಂಪರ್ಕಿಸಿ <HiChevronDown className="inline-block" />
            </span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-96 px-4 mt-7 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-xl">
              <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-5 lg:grid-cols-1">
                  {contact.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-pink-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                        <img src={item.icon} alt={item.name} />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export function Locations() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? "" : "text-opacity-90"}
                 `}
          >
            <span>
              ಶಾಖೆಗಳು <HiChevronDown className="inline-block" />
            </span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-96 px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-xl">
              <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-5 lg:grid-cols-1">
                  {Location.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-pink-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                        <img src={item.icon} alt={item.name} />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export function Language() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? "" : "text-opacity-90"}
                 `}
          >
            <span>
              ಭಾಷೆ <HiChevronDown className="inline-block" />
            </span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-32 px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-xl">
              <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-5 lg:grid-cols-1">
                  {language.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-pink-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
