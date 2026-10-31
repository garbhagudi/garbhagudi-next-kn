import { inclusions } from "./data";
import { LineIcon } from "./icons";
import { EM, H2, SEC_HEAD, WRAP } from "./ui";

const Inclusions = () => (
  <section
    id="included"
    className="relative bg-pp-bg pb-12 pt-[120px] max-[640px]:pt-[84px]"
  >
    <div className={WRAP}>
      <div className={SEC_HEAD}>
        <div>
          <h2 className={H2}>
            <em className={EM}>ಪರಿಪೂರ್ಣದಲ್ಲಿ</em> ಏನೆಲ್ಲ ಸೇರಿವೆ?
          </h2>
        </div>
        <p className="pb-1.5 text-[1.06rem] text-pp-grey">
          ಕನ್ಸಲ್ಟೇಷನ್‌ನಿಂದ ಹಿಡಿದು ಗರ್ಭಧಾರಣೆ ಕನ್‌ಫರ್ಮ್‌ ಆಗುವವರೆಗಿನ ಎಲ್ಲ ಹಂತಗಳೂ
          ಪರಿಪೂರ್ಣ 2026ರಲ್ಲಿ ಸೇರಿವೆ. ಚಿಕಿತ್ಸೆಯ ಬಗ್ಗೆ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವ ಮೊದಲೇ
          ಏನೆಲ್ಲ ಸೌಲಭ್ಯಗಳು ದೊರೆಯುತ್ತವೆ ಎಂಬ ಸಂಪೂರ್ಣ ಮಾಹಿತಿ ನಿಮಗೆ ತಿಳಿಯುತ್ತದೆ.
        </p>
      </div>
      <ol className="m-0 grid list-none grid-cols-5 gap-4 p-0 max-[1180px]:grid-cols-3 max-[640px]:grid-cols-2 max-[640px]:gap-2.5">
        {inclusions.map((item, i) => (
          <li
            key={item.title}
            className="relative flex min-h-[220px] flex-col rounded-[14px] bg-pp-pink px-5 pb-6 pt-[26px] text-white max-[640px]:min-h-0 max-[640px]:px-[14px] max-[640px]:pb-[18px] max-[640px]:pt-4"
          >
            <span className="absolute right-5 top-5 font-pp-head text-[1.5rem] font-bold leading-none tracking-[-0.02em] text-white/[0.55] max-[640px]:right-[14px] max-[640px]:top-[14px] max-[640px]:text-[1.15rem]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="mb-4 grid h-16 w-16 place-items-center rounded-full bg-white text-pp-pink max-[640px]:mb-3 max-[640px]:h-11 max-[640px]:w-11">
              <LineIcon className="h-[30px] w-[30px] max-[640px]:h-[22px] max-[640px]:w-[22px]">
                {item.icon}
              </LineIcon>
            </span>
            <h3 className="mb-1.5 mt-0 font-pp-head text-[1.12rem] font-bold leading-[1.4] text-white max-[640px]:text-[1rem]">
              {item.title}
            </h3>
            <p className="text-[0.88rem] leading-[1.5] text-[#fff1f4] max-[640px]:text-[0.82rem]">
              {item.text}
            </p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Inclusions;
