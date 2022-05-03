import React from "react";
import Link from "next/link";

const features = [
  {
    id: 1,
    name: "L«J¥sï£À  AiÀÄ±À¹ì£À ªÀÄlÖUÀ¼ÀÄ",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840283/Icons/Features/Success_Rate_lig6sq.svg",
    content:
      "GarbhaGudi has one of the highest IVF treatments success rates in the industry over 65-73 per cent.",
    link: "/features/success-rates-of-ivf",
  },
  {
    id: 2,
    name: "«±Àé zÀeÉðAiÀÄ ¥sÀnð°n DgÉÊPÉ",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840286/Icons/Features/World_Class_Fertility_Care_un83f6.svg",
    content:
      "Proud to have played a key role in bringing more than 7,000+ babies into the world since 2010.",
    link: "/features/world-class-fertility-care",
  },
  {
    id: 3,
    name: "PÉÊUÉlÄPÀÄªÀ aQvÉìUÀ¼ÀÄ",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840305/Icons/Features/Top_Fertility_Specialists_zkyl9x.svg",
    content:
      "Team of fertility specialists like gynecologists, embryologists, technicians and staff to help you conceive.",
    link: "/locations/fertility-experts",
  },
  {
    id: 4,
    name: "PÉÊUÉlÄPÀÄªÀ aQvÉìUÀ¼ÀÄ",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840310/Icons/Features/Affordable_Treatment_lwaaku.svg",
    content:
      "Affordable treatment without any compromise on service or quality of medicines or services",
    link: "/features/affordable-treatments",
  },
  {
    id: 5,
    name: "GavÀ JgÀqÀ£ÉÃ C©ü¥ÁæAiÀÄ",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840323/Icons/Features/Free_Second_Opinion_lkihbz.svg",
    content:
      "Patients can come and meet our doctors and understand if the advised treatment is the best thing for the patient couple.",
    link: "https://garbhagudi-ivf.com/contact-us",
  },
  {
    id: 6,
    name: "ºÀtPÁ¸ÀÄ £ÉgÀªÀÅ DAiÉÄÌUÀ¼ÀÄ",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840329/Icons/Features/Financial_Options_rrv8hi.svg",
    content:
      "0% interest for patients when they cannot manage the finances to meet the cost of procedures.",
    link: "/features/financing-options",
  },
  {
    id: 7,
    name: "¸ÀªÀÄUÀæ ªÀiÁUÀð",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840338/Icons/Features/Holistic_Approach_pcqyr1.svg",
    content: "Treating infertility through mind-body-soul programs.",
    link: "/features/holistic-approach",
  },
  {
    id: 8,
    name: "¸ÁA¥ÀæzÁ¬ÄPÀ  L«J¥sï ²µÁÖZÁgÀUÀ¼ÀÄ",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840352/Icons/Features/Treatment_Protocols_hll4cu.svg",
    content:
      "Regularly enhanced and upgraded to incorporate the latest advancements in process, technology and clinical research.",
    link: "/features/treatment-protocols",
  },
  {
    id: 9,
    name: "CvÀÄåvÀÛªÀÄ ¸Ë®¨sÀåUÀ¼ÀÄ",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840357/Icons/Features/Best_in_Class_Facilities_fchmjr.svg",
    content:
      "Centers are equipped to handle the most challenging cases with state of the art technology at our disposal",
    link: "/features/best-in-class-facilities",
  },
];

const Features = () => {
  return (
    <div className="relative bg-white py-8 sm:py-18" id="features">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-4xl text-brandDark sm:text-5xl font-kanHeadingBold">
          £ÀªÀÄä §ºÀÄPÁAiÉÆÃð¥ÀAiÉÆÃV «zsÁ£À
        </p>
        <p className="mt-5 max-w-prose mx-auto text-2xl text-brandDark font-kanContent">
          ¥sÀnð°nAiÀÄ aQvÉìUÀ¼ÀÄ ªÀiÁ£À¹PÀªÁV ªÀÄvÀÄÛ zÉÊ»PÀªÁV MvÀÛqÀªÀ£ÀÄß
          GAlÄªÀiÁqÀ§ºÀÄzÀÄ JAzÀÄ UÀ¨sÀðUÀÄrAiÀÄ°è £ÁªÀÅ CxÀðªÀiÁrPÉÆArzÉÝÃªÉ.
          §ºÀ¼ÀµÀÄÖ DAiÉÄÌUÀ¼À£ÀÄß MzÀV¸À®Ä ªÀÄvÀÄÛ UÀ¨sÀðzsÁgÀuÉUÉ
          ¥ÀæAiÀÄwß¸ÀÄwÛgÀÄªÀ C£ÉÃPÀjUÉ ¨sÀgÀªÀ¸ÉAiÀÄ £ÀÆvÀ£À QgÀtªÀ£ÀÄß vÀgÀ®Ä
          £ÁªÀÅ AiÀiÁªÁUÀ®Æ §zÀÞgÁVzÉÝÃªÉ. DzÀÝjAzÀ, ¤ÃªÀÅ F PÉ¼ÀV£ÀzÀ£ÀÄß
          ¤jÃQë¸À§ºÀÄzÀÄ:
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Link href={feature.link} key={feature.id} passHref>
                <div className=" pt-6 cursor-pointer ">
                  <div className=" flow-root bg-gray-50 rounded-lg px-6 pb-8 hover:shadow-2xl">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-2 bg-brandPink rounded-full shadow-xl">
                          <img
                            src={feature.icon}
                            alt={feature.name}
                            className="h-9 w-9"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-2xl text-brandDark  font-kanHeadingBold">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-brandDark antialiased font-content min-h-[80px]">
                        {feature.content}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
