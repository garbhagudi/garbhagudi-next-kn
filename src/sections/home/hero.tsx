import React from "react";
import { BsChevronRight } from "react-icons/bs";

const Hero = () => {
  return (
    <main className="mt-8 sm:mt-8">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>
              <h1 className="mt-4 text-5xl text-brandDark sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl font-kanHeadingBold">
                <span className="md:block">¸ÀA¥ÀÆtðªÁVgÀÄªÀ </span>{" "}
                <span className="text-brandPink md:block md:mt-2">
                  ¸ÀAvÉÆÃμÀªÀ£ÀÄß C£ÀÄ¨sÀ«¹
                </span>
              </h1>
              <p className="mt-3 text-brandDark sm:mt-5 text-2xl font-kanContent">
                UÀ¨sÀðUÀÄr £ÀÆvÀ£À ¦Ã½UÉAiÀÄ ¸ÀAvÁ£ÉÆÃvÀàwÛ ¸ÀªÀÄ¸Éå aQvÁì
                D¸ÀàvÉæUÀ¼À ¸ÀgÀtÂAiÀiÁVzÀÄÝ, F ¤gÀAvÀgÀªÁV ºÉZÀÄÑwÛgÀÄªÀ
                ¸ÀAvÁ£ÉÆÃvÀàwÛ ¸ÀªÀÄ¸ÉåAiÀÄ£ÀÄß ¥ÀjºÀj¸À®Ä CvÁåzsÀÄ¤PÀ
                ªÀÄÆ®¸ËPÀAiÀÄð ªÀÄvÀÄÛ CvÁåzsÀÄ¤PÀ vÀAvÀæeÁÕ£ÀªÀ£ÀÄß ºÉÆA¢zÉ.
                SÁåvÀ ¹ÛçÃgÉÆÃUÀvÀdÕgÀÄ ªÀÄvÀÄÛ ¥sÀnð°n vÀeÉÕ qÁ. D±Á J¸ï.
                «dAiÀiï £ÉÃvÀÈvÀézÀ §zÀÞvÉAiÀÄ GzÀå«ÄUÀ¼ÀÄ ªÀÄvÀÄÛ DgÉÆÃUÀå
                vÀdÕgÀ vÀAqÀªÀÅ EzÀ£ÀÄß ¸ÁÜ¦¹zÉ.
              </p>
            </div>
          </div>
          <div className="sm:mt-16 lg:mt-0 lg:col-span-6 hidden md:block">
            <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
              <div className="my-6">
                <img
                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643272918/Home/Home-Experience_the_Joy_kvdfwj.webp"
                  alt="Experience the joy of being complete"
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
