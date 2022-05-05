import React from "react";

const metrics = [
  {
    id: 1,
    stat: "7000+",
    emphasis: "¸ÀAvÉÆÃμÀ vÀÄA©zÀ PÀÄlÄA§UÀ¼ÀÄ",
  },
  {
    id: 2,
    stat: "111+",
    emphasis: "GavÀ ¥sÀnð°n eÁUÀÈw ²©gÀUÀ¼ÀÄ",
  },
  {
    id: 3,
    stat: "65-73%",
    emphasis: "L«J¥sï AiÀÄ±À¹ì£À ªÀÄlÖ ",
  },
  {
    id: 4,
    stat: "5",
    emphasis: "¨ÉAUÀ¼ÀÆj£À ««zsÉqÉ 5 PÉÃAzÀæUÀ¼ÀÄ",
  },
];

const Stat = () => {
  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <img
              className="h-full w-full object-cover opacity-70 xl:absolute xl:inset-0"
              src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643272924/Home/Our_never_ending_s0dbde.webp"
              alt="People working on laptops"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <p className="mt-3 text-5xl text-brandDark font-kanHeadingBold">
            £ÀªÀÄä ¸ÀzÁ ¨É¼ÉAiÀÄÄwÛgÀÄªÀ AiÀÄ±À¸ÀÄì
          </p>
          <p className="mt-5 text-2xl text-brandDark font-kanContent">
            UÀ¨sÀðUÀÄr JAzÀgÉ PÀ£À¸ÀÄUÀ¼ÀÄ fÃªÀAvÀªÁVgÀÄªÀ ¸ÀÜ¼À, E°è
            ¨sÀgÀªÀ¸ÉUÀ¼ÀÄ JA¢UÀÆ ªÀÄgÉAiÀiÁUÀÄªÀÅ¢®è ªÀÄvÀÄÛ ¸ÁzsÀåvÉUÀ¼ÀÄ
            JA¢UÀÆ PÉÆ£ÉUÉÆ¼ÀÄîªÀÅ¢®è. ¤ªÀÄä D£ÀAzÀzÀ PÀAzÀªÀÄäUÀ¼À£ÀÄß
            PÉÊAiÀÄ°è JwÛ»rAiÀÄÄªÀ ¸ÀÄªÀtð PÀëtªÀ£ÀÄß C£ÀÄ¨sÀ«¸À®Ä ¤ªÀÄUÉ
            ¸ÀºÁAiÀÄ ªÀiÁqÀ®Ä £ÁªÀÅ ¤gÀAvÀgÀªÁV PÉ®¸À ªÀiÁqÀÄvÉÛÃªÉ. £ÀªÀÄä
            UÀÄtªÀÄlÖzÀ aQvÉì ªÀÄvÀÄÛ DgÉÊPÉAiÀÄ eÉÆvÉUÉ, G£ÀßvÀ AiÀÄ±À¹ì£À
            ªÀÄlÖUÀ¼À£ÀÄß ¸Á¢ü¸À®Ä PÉÆqÀÄUÉ ¤ÃqÀÄªÀ EvÀgÀ PÉ®ªÀÅ CA±ÀUÀ¼ÀÄ:
          </p>
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {metrics.map((item) => (
              <p key={item.id}>
                <span className="block text-2xl font-bold text-brandDark">
                  {item.stat}
                </span>
                <span className="mt-1 block text-brandliteGray">
                  <span className="text-2xl text-brandDark font-kanContent">
                    {item.emphasis}
                  </span>
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stat;
