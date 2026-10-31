import { useState, type MouseEvent } from "react";
import {
  PHONE_HREF,
  PHONE_LABEL,
  WHATSAPP_HREF,
  faqs,
  terms,
  termsIntro,
} from "./data";
import { H2, WRAP } from "./ui";

const footerLinks = [
  { label: "ಫರ್ಟಿಲಿಟಿ 360", href: "#path" },
  { label: "ಪರಿಪೂರ್ಣ 2026", href: "#paripoorna" },
  { label: "ಪ್ರಶ್ನೆಗಳು", href: "#faqs" },
  { label: "ಶಾಖೆಗಳು", href: "#institution" },
  { label: "ವಾಟ್ಸ್ಯಾಪ್‌", href: WHATSAPP_HREF, external: true },
  { label: PHONE_LABEL, href: PHONE_HREF },
];

const SUMMARY =
  "flex cursor-pointer list-none items-center justify-between gap-5 font-pp-ui leading-[1.55] text-pp-char max-[640px]:px-[18px] max-[640px]:py-4 max-[640px]:text-[0.98rem] [&::-webkit-details-marker]:hidden";

const BAR =
  "absolute left-1/2 top-1/2 h-[2px] w-3 -translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-pp-pink transition-transform duration-300 group-open:bg-white";

const PlusMinus = () => (
  <span className="relative h-[34px] w-[34px] flex-none rounded-full bg-pp-pink-t transition-[background,transform] duration-300 group-open:bg-pp-pink max-[640px]:h-[30px] max-[640px]:w-[30px]">
    <span className={BAR} />
    <span className={`${BAR} rotate-90 group-open:rotate-0`} />
  </span>
);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i: number) => (e: MouseEvent) => {
    e.preventDefault();
    setOpenIndex((current) => (current === i ? -1 : i));
  };

  return (
    <section
      id="faqs"
      className="relative bg-white pb-[110px] pt-11 max-[1040px]:pt-8 max-[640px]:pt-7"
    >
      <div
        className={`${WRAP} grid max-w-[900px] grid-cols-1 items-start gap-9`}
      >
        <div className="text-center">
          <h2 className={`${H2} max-[640px]:text-[1.9rem]`}>
            ದಂಪತಿಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಕೇಳುವ ಪ್ರಶ್ನೆಗಳು
          </h2>
          <p className="mt-4 text-pp-grey-2">
            ಇನ್ನೂ ಗೊಂದಲವಿದೆಯೆ? ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ಸಂಪರ್ಕಿಸಿ{" "}
            <a
              href={PHONE_HREF}
              className="whitespace-nowrap font-bold text-pp-pink-d"
            >
              {PHONE_LABEL}
            </a>
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <details
                key={faq.q}
                open={openIndex === i}
                className="group rounded-[20px] border border-pp-line bg-white text-left transition-[border-color,background] duration-300 open:border-pp-mauve open:bg-pp-mauve-t"
              >
                <summary
                  onClick={toggle(i)}
                  className={`${SUMMARY} px-[26px] py-[22px] text-[1.06rem] font-semibold`}
                >
                  {faq.q}
                  <PlusMinus />
                </summary>
                <div className="px-[26px] pb-6 text-[1rem] text-pp-grey max-[640px]:px-5 max-[640px]:pb-5 [&_a]:border-b [&_a]:border-current [&_a]:font-bold [&_a]:text-pp-pink-d">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          <div id="terms" className="mt-6">
            <details className="group rounded-[22px] border-2 border-pp-char bg-white">
              <summary
                className={`${SUMMARY} px-7 py-6 font-pp-head text-[1.4rem] font-bold`}
              >
                ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು
                <PlusMinus />
              </summary>
              <div className="px-7 pb-7 text-[0.95rem] text-pp-grey max-[640px]:px-[22px] max-[640px]:pb-6">
                {termsIntro.map((p) => (
                  <p key={p} className="mb-3">
                    {p}
                  </p>
                ))}
                <ol className="mt-2 list-decimal pl-[22px]">
                  {terms.map((term) => (
                    <li
                      key={term}
                      className="py-[5px] pl-1.5 marker:font-bold marker:text-pp-pink"
                    >
                      {term}
                    </li>
                  ))}
                </ol>
              </div>
            </details>
          </div>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-pp-line pt-8 font-pp-ui text-[0.98rem] font-semibold text-pp-char max-[640px]:gap-x-6">
          {footerLinks.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              className="whitespace-nowrap transition-colors duration-200 hover:text-pp-pink-d"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Faq;
