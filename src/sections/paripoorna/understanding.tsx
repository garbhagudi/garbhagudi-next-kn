import { FERTILITY360_LOGO, steps } from "./data";
import { EM, H2, SEC_HEAD, WRAP } from "./ui";

const questions = [
  "ಯಾಕೆ ಇಷ್ಟು ತಡವಾಗುತ್ತಿದೆ?",
  "ಇನ್ನೂ ಒಂದು ತಿಂಗಳು ಕಾಯಬೇಕಾ?",
  "ಚಿಕಿತ್ಸೆಯ ಅಗತ್ಯವಿದೆಯಾ?",
];

const mantras = [
  "ಅನಿಶ್ಷಿತತೆ ಬೇಡ, ಸ್ಪಷ್ಟತೆ ಇರಲಿ.",
  "ಊಹೆ ಬೇಡ, ತಿಳುವಳಿಕೆ ಇರಲಿ.",
  "ಒತ್ತಡ ಬೇಡ, ಭರವಸೆಯ ಹೆಜ್ಜೆ ಇರಲಿ.",
];

const Fertility360 = () => (
  <div id="path" className="mt-16">
    <div className="mb-9 grid grid-cols-[auto_1fr] items-center gap-16 max-[1040px]:grid-cols-1 max-[1040px]:gap-4">
      <div>
        <img
          src={FERTILITY360_LOGO}
          loading="lazy"
          decoding="async"
          alt="ಫರ್ಟಿಲಿಟಿ 360"
          className="m-0 h-[clamp(64px,6.4vw,92px)] w-auto max-[640px]:h-[52px]"
        />
      </div>
      <div>
        <h2 className="m-0 font-pp-head text-[clamp(1.7rem,2.6vw,2.5rem)] font-bold leading-[1.4] text-pp-char max-[640px]:text-[1.5rem]">
          ಮೊದಲು ಅರ್ಥ ಮಾಡ್ಕೊಳಿ. <em className={EM}>ನಂತರ ನಿರ್ಧರಿಸಿ.</em>
        </h2>
      </div>
    </div>
    <ol className="relative m-0 grid list-none grid-cols-4 gap-x-20 p-0 max-[1040px]:mx-auto max-[1040px]:mt-2.5 max-[1040px]:max-w-[440px] max-[1040px]:grid-cols-1 max-[1040px]:gap-[22px]">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className={`relative text-center max-[1040px]:grid max-[1040px]:grid-cols-[88px_1fr] max-[1040px]:grid-rows-[auto_auto] max-[1040px]:content-center max-[1040px]:items-center max-[1040px]:gap-x-5 max-[1040px]:gap-y-0.5 max-[1040px]:text-left max-[640px]:grid-cols-[76px_1fr] max-[640px]:gap-x-[14px] ${
            i > 0
              ? "after:absolute after:inset-y-0 after:left-[-40px] after:w-px after:bg-pp-pink after:opacity-[0.45] after:content-[''] max-[1040px]:after:content-none"
              : ""
          }`}
        >
          <span className="relative z-[1] mx-auto grid h-[132px] w-[132px] place-items-center overflow-hidden rounded-full max-[1040px]:row-span-2 max-[1040px]:mx-0 max-[1040px]:h-[88px] max-[1040px]:w-[88px] max-[1040px]:self-center max-[640px]:h-[76px] max-[640px]:w-[76px]">
            <img
              src={step.image}
              alt=""
              width="170"
              height="170"
              loading="lazy"
              decoding="async"
              className="h-full w-full"
            />
          </span>
          <h3 className="mb-1.5 mt-[22px] font-pp-ui text-[1.08rem] font-semibold leading-[1.5] tracking-normal text-pp-char max-[1040px]:col-start-2 max-[1040px]:mt-0 max-[1040px]:self-end max-[1040px]:text-[1.02rem]">
            {step.title}
          </h3>
          <p className="text-[0.96rem] leading-[1.55] text-pp-grey-2 max-[1040px]:col-start-2 max-[1040px]:m-0 max-[1040px]:self-start max-[1040px]:text-[0.92rem]">
            {step.text}
          </p>
        </li>
      ))}
    </ol>
    <p className="mt-9 text-[1.08rem] italic text-pp-grey max-[640px]:mt-[26px] max-[640px]:text-[1rem]">
      ನೀವು ತಾಯ್ತನದ ಪಯಣದ ಯಾವ ಹಂತದಲ್ಲಿದ್ದೀರಿ, ಯಾವ ವೈದ್ಯಕೀಯ ಮಾರ್ಗದರ್ಶನದ ಅಗತ್ಯವಿದೆ
      ಮತ್ತು ಯಾವುದು ಸೂಕ್ತ ಎಂಬುದನ್ನು ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಲು ಒಂದು ಭೇಟಿ ಸಾಕು.
    </p>
  </div>
);

const Understanding = () => (
  <section
    id="understanding"
    className="relative bg-white pb-[120px] pt-10 max-[640px]:pb-[84px]"
  >
    <div className={WRAP}>
      <div className={SEC_HEAD}>
        <div>
          <h2 className={H2}>
            ನಿಮ್ಮ ಪಯಣ ವೈಯಕ್ತಿಕವಾದುದು.{" "}
            <em className={EM}>ನಿಮ್ಮ ಮುಂದಿನ ಹೆಜ್ಜೆಯೂ ಹಾಗೇ ಇರಲಿ.</em>
          </h2>
        </div>
        <div className="pb-1.5 text-[1.06rem] text-pp-grey">
          <p>ಕಾಯುವಿಕೆ ನೂರಾರು ಪ್ರಶ್ನೆಗಳನ್ನು ಹುಟ್ಟುಹಾಕುತ್ತದೆ.</p>
          <ul className="mb-[18px] mt-[14px] flex list-none flex-col gap-2 p-0">
            {questions.map((q) => (
              <li
                key={q}
                className="flex items-center gap-3 py-1 font-pp-ui text-[1.08rem] font-medium leading-[1.55] text-pp-char before:h-[7px] before:w-[7px] before:flex-none before:rounded-full before:bg-pp-pink before:content-[''] max-[640px]:text-[1rem]"
              >
                {q}
              </li>
            ))}
          </ul>
          <p>
            ನಾವು ಮೊದಲಿಗೆ ನಿಮ್ಮ ಮಾತುಗಳನ್ನ ಆಲಿಸುತ್ತೇವೆ. ಅವಶ್ಯಕತೆ ಇದ್ದಲ್ಲಿ
            ಇಬ್ಬರನ್ನೂ ಪರೀಕ್ಷಿಸಿ, ಲಭ್ಯವಿರುವ ಚಿಕಿತ್ಸೆಯ ಆಯ್ಕೆಗಳನ್ನು ನಿಮ್ಮ
            ಮುಂದಿಡುತ್ತೇವೆ. ನೆನಪಿರಲಿ, IVF ಚಿಕಿತ್ಸೆಯೊಂದೇ ಪರಿಹಾರವಾಗಿರಲ್ಲ.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 border-b border-t-2 border-b-pp-line border-t-pp-char max-[1040px]:grid-cols-1">
        {mantras.map((m, i) => (
          <span
            key={m}
            className={`py-[22px] pr-6 font-pp-ui text-[1.15rem] font-medium leading-[1.55] text-pp-char max-[1040px]:px-0 max-[1040px]:py-4 max-[640px]:text-[1.02rem] ${
              i > 0
                ? "border-l border-l-pp-line pl-6 max-[1040px]:border-l-0 max-[1040px]:border-t max-[1040px]:border-t-pp-line"
                : "pl-0"
            }`}
          >
            {m}
          </span>
        ))}
      </div>
      <Fertility360 />
    </div>
  </section>
);

export default Understanding;
