import React from "react";
import Link from "next/link";

const features = [
  {
    id: 1,
    name: "L«J¥sï£À  AiÀÄ±À¹ì£À ªÀÄlÖUÀ¼ÀÄ",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840283/Icons/Features/Success_Rate_lig6sq.svg",
    content:
      "UÀ¨sÀðUÀÄrAiÀÄÄ GzÀåªÀÄzÀ°è ±ÉÃPÀqÁ 65-73 QÌAvÀ ºÉaÑ£À L«J¥sï aQvÉìUÀ¼À AiÀÄ±À¹ì£À ªÀÄlÖªÀ£ÀÄß ºÉÆA¢zÉ.",
    link: "/features/success-rates-of-ivf",
  },
  {
    id: 2,
    name: "«±Àé zÀeÉðAiÀÄ ¥sÀnð°n DgÉÊPÉ",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840286/Icons/Features/World_Class_Fertility_Care_un83f6.svg",
    content:
      "2010 jAzÀ 7,000 PÀÆÌ ºÉZÀÄÑ ²±ÀÄUÀ¼À£ÀÄß dUÀwÛUÉ vÀgÀÄªÀ°è ¥ÀæªÀÄÄR ¥ÁvÀæ ªÀ»¹zÀ ºÉªÉÄä.",
    link: "/features/world-class-fertility-care",
  },
  {
    id: 3,
    name: "G£ÀßvÀ ¥sÀ®ªÀvÀÛvÉ vÀdÕgÀÄ",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840305/Icons/Features/Top_Fertility_Specialists_zkyl9x.svg",
    content:
      "¤ªÀÄUÉ UÀ¨sÀðzsÀj¸ÀÄªÀÅzÀPÉÌ ¸ÀºÁAiÀÄ ªÀiÁqÀ®Ä ¹ÛçÃgÉÆÃUÀ±Á¸ÀÛçvÀdÕgÀÄ, ¨sÀÆæt±Á¸ÀÛçdÕgÀÄ, vÀAvÀædÕgÀÄ ªÀÄvÀÄÛ ¹§âA¢UÀ¼ÀAvÀºÀ ¥sÀnð°n vÀdÕgÀ vÀAqÀ.",
    link: "/locations/fertility-experts",
  },
  {
    id: 4,
    name: "PÉÊUÉlÄPÀÄªÀ aQvÉìUÀ¼ÀÄ",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840310/Icons/Features/Affordable_Treatment_lwaaku.svg",
    content:
      "OμÀ¢üUÀ¼ÀÄ CxÀªÁ ¸ÉÃªÉUÀ¼À UÀÄtªÀÄlÖ CxÀªÁ ¸ÉÃªÁPÁAiÀÄðzÀ°è AiÀiÁªÀÅzÉÃ gÁf E®èzÉ PÉÊUÉlÄPÀÄªÀ ªÉZÀÑzÀ aQvÉì",
    link: "/features/affordable-treatments",
  },
  {
    id: 5,
    name: "GavÀ JgÀqÀ£ÉÃ C©ü¥ÁæAiÀÄ",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840323/Icons/Features/Free_Second_Opinion_lkihbz.svg",
    content:
      "gÉÆÃVUÀ¼ÀÄ §AzÀÄ £ÀªÀÄä ªÉÊzÀågÀ£ÀÄß ¨sÉÃn ªÀiÁqÀ§ºÀÄzÀÄ ªÀÄvÀÄÛ gÉÆÃV zÀA¥ÀwUÀ½UÉ ¸À®ºÉ ¤ÃqÀ¯ÁVgÀÄªÀ aQvÉìAiÀÄÄ GvÀÛªÀÄªÁVzÉAiÉÄÃ JAzÀÄ CxÀðªÀiÁrPÉÆ¼Àî§ºÀÄzÀÄ.",
    link: "https://garbhagudi-ivf.com/contact-us",
  },
  {
    id: 6,
    name: "ºÀtPÁ¸ÀÄ £ÉgÀªÀÅ DAiÉÄÌUÀ¼ÀÄ",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840329/Icons/Features/Financial_Options_rrv8hi.svg",
    content:
      "PÁAiÀÄð«zsÁ£ÀUÀ¼À ªÉZÀÑªÀ£ÀÄß ¥ÀÆgÉÊ¸ÀÄªÀÅzÀPÉÌ ºÀtPÁ¸ÀÄ ºÉÆA¢¸ÀÄªÀÅzÀÄ ¸ÁzsÀåªÁUÀ¢zÁÝUÀ gÉÆÃVUÀ½UÉ ±ÀÆ£Àå §rØAiÀÄ°è ºÀtPÁ¸ÀÄ £ÉgÀªÀÅ.",
    link: "/features/financing-options",
  },
  {
    id: 7,
    name: "¸ÀªÀÄUÀæ ªÀiÁUÀð",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840338/Icons/Features/Holistic_Approach_pcqyr1.svg",
    content:
      "ªÀÄ£À¸ÀÄì-zÉÃºÀ-DvÀäUÀ¼À£ÀÄß M¼ÀUÉÆAqÀ PÁAiÀÄðPÀæªÀÄUÀ¼À ªÀÄÆ®PÀ ¸ÀAvÁ£ÉÆÃvÀàwÛ ¸ÀªÀÄ¸ÉåUÉ aQvÉì ¤ÃqÀÄªÀÅzÀÄ.",
    link: "/features/holistic-approach",
  },
  {
    id: 8,
    name: "¸ÁA¥ÀæzÁ¬ÄPÀ ²µÁÖZÁgÀUÀ¼ÀÄ",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840352/Icons/Features/Treatment_Protocols_hll4cu.svg",
    content:
      "¥ÀæQæAiÉÄ, vÀAvÀæeÁÕ£À ªÀÄvÀÄÛ ªÉÊzÀåQÃAiÀÄ ¸ÀA±ÉÆÃzsÀ£ÉAiÀÄ°è EwÛÃa£À ¥ÀæUÀwUÀ¼À£ÀÄß C¼ÀªÀr¸À®Ä ¤UÀ¢vÀªÁV «¸ÀÛgÀuÉÉ ªÀÄvÀÄÛ £À«ÃPÀgÀt PÁAiÀÄð PÉÊUÉÆ¼Àî¯ÁUÀÄvÀÛzÉ.",
    link: "/features/treatment-protocols",
  },
  {
    id: 9,
    name: "CvÀÄåvÀÛªÀÄ ¸Ë®¨sÀåUÀ¼ÀÄ",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840357/Icons/Features/Best_in_Class_Facilities_fchmjr.svg",
    content:
      "£ÀªÀÄä°ègÀÄªÀ CvÁåzsÀÄ¤PÀ vÀAvÀæeÁÕ£ÀzÀ eÉÆvÉUÉ CvÀåAvÀ ¸ÀªÁ°£À ¥ÀæPÀgÀtUÀ¼À£ÀÄß ¤ªÀð»¸À®Ä PÉÃAzÀæUÀ¼ÀÄ ¸ÀeÁÓVªÉ",
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
        <p className="mt-5 max-w-6xl mx-auto text-2xl text-brandDark font-kanContent">
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
                      <h3 className="mt-8 text-3xl text-brandDark  font-kanContent">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-brandDark text-2xl font-kanContent min-h-[130px] tracking-tight">
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
