import { PARIPOORNA_LOGO } from "./data";
import { Arrow } from "./icons";
import Reveal from "./reveal";
import { WRAP, button } from "./ui";

const pillars = ["ನಿಗದಿತ ಚಿಕಿತ್ಸೆ", "ನಿಗದಿತ ವೆಚ್ಚ", "ಆಯ್ಕೆಯ ಅವಕಾಶ"];

const RING =
  "pointer-events-none absolute left-[58%] top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/[0.14] max-[1040px]:hidden";

const Offer = () => (
  <section
    id="paripoorna"
    className="relative overflow-hidden bg-[linear-gradient(130deg,#9c5f8c_0%,#b479a4_38%,#e2597e_78%,#ef4266_100%)] py-[88px] text-white max-[640px]:py-14"
  >
    <span aria-hidden="true" className={`${RING} h-[820px] w-[820px]`} />
    <span
      aria-hidden="true"
      className={`${RING} h-[560px] w-[560px] border-dashed`}
    />
    <div
      className={`${WRAP} relative z-[2] grid grid-cols-2 items-center gap-[60px] max-[1040px]:grid-cols-1 max-[1040px]:gap-9`}
    >
      <Reveal>
        <img
          src={PARIPOORNA_LOGO}
          alt="ಪರಿಪೂರ್ಣ 2026"
          width="624"
          height="668"
          className="mb-3 h-auto w-[clamp(170px,15vw,210px)] max-[640px]:w-[150px]"
        />
        <div className="max-w-[510px] text-[1rem] text-[#fff6f8] max-[1040px]:max-w-none max-[640px]:text-[0.98rem]">
          <p className="mt-[14px]">
            IVF ಚಿಕಿತ್ಸೆ ಅಗತ್ಯವಿದ್ದವರಿಗೆ, ಗರ್ಭಗುಡಿಯ ʼಪರಿಪೂರ್ಣ 2026 ʼ
            ಕಾರ್ಯಕ್ರಮವು ಚಿಕಿತ್ಸೆ ಮತ್ತು ಅದರ ವೆಚ್ಚದ ಬಗ್ಗೆ ಸಂಪೂರ್ಣ ಸ್ಪಷ್ಟತೆ
            ನೀಡುತ್ತದೆ. ಚಿಕಿತ್ಸೆಯ ವಿವರ ಮತ್ತು ವೆಚ್ಚವನ್ನು ಮೊದಲೇ ತಿಳಿದುಕೊಂಡು
            ದಂಪತಿಗಳು ಯಾವುದೇ ಗೊಂದಲವಿಲ್ಲದೆ ತಮ್ಮ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳಬಹುದು.
          </p>
          <p className="mt-[14px]">
            ಪೋಷಕರಾಗುವ ಸುಂದರ ಕನಸನ್ನು ನನಸಾಗಿಸಿಕೊಳ್ಳಲು ಬಯಸುವ, ಆದರೆ ಆರ್ಥಿಕ
            ಸಮಸ್ಯೆಯಿಂದಾಗಿ ಚಿಕಿತ್ಸೆ ಪಡೆಯಲಾಗದೆ ಚಿಂತಿಸುತ್ತಿರುವ ದಂಪತಿಗಳಿಗೆ
            ನೆರವಾಗುವುದು ನಮ್ಮ ಉದ್ದೇಶ. ಹಾಗಾಗಿಯೇ ಗರ್ಭಗುಡಿ IVF ಸೆಂಟರ್‌, ಗರ್ಭಜ್ಞಾನ್‌
            ಫೌಂಡೇಶನ್‌ ಸಹಯೋಗದಲ್ಲಿ ಪರಿಪೂರ್ಣ 2026 ಕಾರ್ಯಕ್ರಮವನ್ನು ಆರಂಭಿಸಿದೆ.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2.5 max-[1040px]:gap-2">
          {pillars.map((p) => (
            <span
              key={p}
              className="rounded-full border-[1.5px] border-white/[0.55] px-4 py-2.5 font-pp-ui text-[0.74rem] font-semibold uppercase leading-[normal] tracking-[0.14em] text-white max-[640px]:px-3 max-[640px]:py-2 max-[640px]:text-[0.62rem]"
            >
              {p}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal className="relative mx-auto flex aspect-square w-[min(100%,470px)] flex-col items-center justify-center justify-self-center rounded-full bg-white p-14 text-center shadow-[0_30px_60px_-40px_rgba(53,54,53,0.45)] max-[1040px]:aspect-auto max-[1040px]:w-[min(100%,420px)] max-[1040px]:rounded-[28px] max-[1040px]:px-6 max-[1040px]:pb-[34px] max-[1040px]:pt-10">
        <svg
          viewBox="0 0 500 500"
          aria-hidden="true"
          className="pointer-events-none absolute inset-[-12px] h-[calc(100%_+_24px)] w-[calc(100%_+_24px)] -rotate-90 max-[1040px]:hidden"
        >
          <circle
            cx="250"
            cy="250"
            r="238"
            fill="none"
            className="stroke-white stroke-[3] transition-[stroke-dashoffset] duration-[2600ms] ease-[cubic-bezier(0.3,0.7,0.2,1)] [stroke-dasharray:1500] [stroke-dashoffset:1500] [stroke-linecap:round] group-data-[in=true]/reveal:[stroke-dashoffset:0]"
          />
        </svg>
        <span className="font-pp-ui text-[0.8rem] font-semibold uppercase leading-[normal] tracking-[0.24em] text-pp-mauve-d">
          ಪರಿಪೂರ್ಣ 2026
        </span>
        <div className="mb-2 mt-4 font-pp-head text-[clamp(3rem,5vw,4.3rem)] font-bold leading-none tracking-[-0.04em] text-pp-pink max-[640px]:text-[2.7rem]">
          ₹1,75,000
        </div>
        <div className="font-pp-ui text-[1.2rem] text-pp-char">
          ಸಂಪೂರ್ಣ IVF ಚಿಕಿತ್ಸೆ
        </div>
        <a
          href="#included"
          className={button("ink", "relative z-[5] mt-5", true)}
        >
          ಚಿಕಿತ್ಸೆ ಏನೆಲ್ಲಾ ಒಳಗೊಂಡಿದೆ ನೋಡಿ
          <Arrow />
        </a>
      </Reveal>
    </div>
  </section>
);

export default Offer;
