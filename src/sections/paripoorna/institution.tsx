import Reveal from "./reveal";
import { EM, H2, SEC_HEAD, WRAP } from "./ui";

const stats = [
  {
    value: "15+",
    label: "ದಂಪತಿಗಳ ಸಂತಾನೋತ್ಪತ್ತಿ ಚಿಕಿತ್ಸಾ ಪಯಣದಲ್ಲಿ ಸಾರ್ಥಕ ಸೇವೆ",
  },
  {
    value: "10",
    label: "ಬೆಂಗಳೂರು, ದಾವಣಗೆರೆ ಮತ್ತು ಹೊಸೂರು ಸೇರಿ ಒಟ್ಟು ಶಾಖೆಗಳು",
  },
];

const Institution = () => (
  <section
    id="institution"
    className="relative bg-white pb-11 pt-12 text-pp-grey max-[1040px]:pb-8 max-[640px]:pb-7"
  >
    <div className={WRAP}>
      <div className={SEC_HEAD}>
        <div>
          <h2 className={H2}>
            ಪರಿಪೂರ್ಣತೆಯ <em className={EM}>ಸಂತಸ</em>
          </h2>
        </div>
        <div>
          <p>
            ಕಳೆದ 15 ವರ್ಷಗಳಿಂದ ಗರ್ಭಗುಡಿ IVF ಸೆಂಟರ್‌ ದಂಪತಿಗಳ ಪೋಷಕರಾಗುವ ಕನಸಿಗೆ
            ಜೊತೆಯಾಗುತ್ತಿದೆ. ಬೆಂಗಳೂರು, ದಾವಣಗೆರೆ ಮತ್ತು ಹೊಸೂರು ಸೇರಿದಂತೆ ಒಟ್ಟು ಹತ್ತು
            ಶಾಖೆಗಳಿದ್ದು, ನಿಮ್ಮ ಹತ್ತಿರದ ಶಾಖೆಗೆ ಭೇಟಿ ನೀಡಿ, ಸಂತಾನೋತ್ಪತ್ತಿ ತಜ್ಞರನ್ನು
            ಭೇಟಿ ಮಾಡಬಹುದು, ಅಗತ್ಯ ಪರೀಕ್ಷೆಗಳನ್ನು ಮಾಡಿಸಿಕೊಳ್ಳಬಹುದು ಹಾಗೆ ಸೂಕ್ತ
            ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಬಹುದು.
          </p>
          <p className="mt-[22px]">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 border-b-2 border-pp-pink pb-0.5 font-pp-ui text-[0.95rem] font-semibold leading-[normal] text-pp-pink-d"
            >
              ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ
            </a>
          </p>
        </div>
      </div>
      <Reveal className="mt-[70px] grid grid-cols-2 gap-4 max-[1040px]:mt-7 max-[640px]:gap-2.5">
        {stats.map((s) => (
          <div
            key={s.value}
            className="rounded-[14px] border border-pp-line bg-pp-bg px-[26px] py-8 max-[640px]:px-4 max-[640px]:py-5"
          >
            <b className="block font-pp-head text-[clamp(2.8rem,4.6vw,3.8rem)] font-bold leading-none tracking-[-0.04em] text-pp-char max-[640px]:text-[2.4rem]">
              {s.value}
            </b>
            <span className="mt-[14px] block text-[0.9rem] leading-[1.55] text-pp-grey-2">
              {s.label}
            </span>
          </div>
        ))}
      </Reveal>
    </div>
  </section>
);

export default Institution;
