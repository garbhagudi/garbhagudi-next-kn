import { GARBHAGNAN_LOGO, HERO_IMAGE, PARIPOORNA_LOGO } from "./data";
import { Arrow } from "./icons";
import { WRAP, button } from "./ui";

const Hero = () => (
  <section
    id="hero"
    className="relative flex min-h-[calc(100svh_-_76px)] items-center overflow-hidden bg-[linear-gradient(#efe7e0_0%,#e8dfd7_45%,#dfd3c9_100%)] py-12 max-[1040px]:block max-[1040px]:min-h-0 max-[1040px]:pt-0 max-[640px]:pb-9"
  >
    <div className="pointer-events-none absolute right-[max(24px,50vw_-_560px)] top-6 z-[4] flex items-center gap-[14px] max-[1040px]:left-4 max-[1040px]:right-4 max-[1040px]:top-3 max-[1040px]:justify-between max-[1040px]:gap-2 max-[640px]:left-3 max-[640px]:right-3 max-[640px]:top-1.5 max-[640px]:gap-[5px]">
      <img
        src={GARBHAGNAN_LOGO}
        alt="GarbhaGnan Foundation"
        width="636"
        height="636"
        className="order-2 h-auto w-[clamp(120px,9.5vw,150px)] max-[1040px]:w-[98px] max-[640px]:w-[76px]"
      />
      <div className="order-1 w-[clamp(140px,11vw,180px)] max-[1040px]:w-[98px] max-[640px]:w-[76px]">
        <img
          src={PARIPOORNA_LOGO}
          alt="ಪರಿಪೂರ್ಣ 2026"
          width="624"
          height="668"
          className="h-auto w-full"
        />
      </div>
    </div>

    <figure className="pointer-events-none absolute right-[-3vw] top-1/2 z-[1] m-0 aspect-[1672/941] w-[min(60vw,1000px)] -translate-y-1/2 [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent_0px,#000_18%),linear-gradient(transparent_0px,#000_18%,#000_82%,transparent_100%)] max-[1040px]:relative max-[1040px]:right-auto max-[1040px]:top-auto max-[1040px]:w-full max-[1040px]:translate-y-0 max-[1040px]:[mask-composite:add] max-[1040px]:[mask-image:linear-gradient(#000_78%,transparent_100%)]">
      <img
        {...{ fetchpriority: "high" }}
        decoding="async"
        alt="ಒಂದು ಗೆರೆ ತೋರಿಸುತ್ತಿರುವ ಪ್ರೆಗ್ನೆನ್ಸಿ ಟೆಸ್ಟ್‌"
        src={HERO_IMAGE}
        width="1672"
        height="941"
        className="h-full w-full object-cover"
      />
      <figcaption className="absolute bottom-[16%] right-[calc(3vw_+_(100vw_-_min(1120px,100vw_-_48px))_/_2)] m-0 font-pp-ui text-[1.05rem] font-medium italic leading-[normal] tracking-[0.02em] text-pp-mauve-d max-[1040px]:hidden">
        ಕಾಯುವಿಕೆ ಸಾಕು, ಇದು ಉತ್ತರ ತಿಳಿಯುವ ಸಮಯ
      </figcaption>
    </figure>

    <div
      className={`${WRAP} relative z-[2] py-[clamp(16px,3vh,40px)] max-[640px]:pb-10 max-[640px]:pt-4`}
    >
      <div className="max-w-[560px] max-[1180px]:max-w-[500px] max-[1040px]:max-w-none">
        <h1 className="m-0 mb-[clamp(6px,1.2vh,12px)] font-pp-head text-[clamp(2rem,min(3.8vw,5.6vh),3.1rem)] font-bold leading-[1.4] text-pp-char max-[640px]:mt-1 max-[640px]:text-[1.7rem]">
          ಈ 2 ಸಂತಸದ{" "}
          <em className="relative inline-block not-italic text-pp-pink">
            ಗೆರೆಗಳಿಗಾಗಿ
            <svg
              viewBox="0 0 200 20"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute bottom-[-0.12em] left-[-1%] h-[0.26em] w-[102%] overflow-visible"
            >
              <path
                d="M3 13 C 40 6, 90 4, 130 9 S 185 15, 197 7"
                fill="none"
                className="stroke-pp-pink stroke-[3.4] [stroke-linecap:round]"
              />
            </svg>
          </em>
        </h1>
        <p className="mt-1 font-pp-ui text-[clamp(1.6rem,min(3.5vw,4.75vh),3rem)] font-normal leading-[1.4] text-pp-mauve-d max-[640px]:text-[1.45rem]">
          ನೀವು ಎಷ್ಟು ಸಮಯದಿಂದ ಕಾಯುತ್ತಿದ್ದೀರಿ?
        </p>
        <div className="mt-[clamp(16px,2.6vh,26px)] font-pp-ui text-[clamp(1.02rem,2vh,1.18rem)] leading-[1.6]">
          <p className="text-pp-char">
            ಪ್ರತಿ ತಿಂಗಳು ಅದೇ ಭರವಸೆ. ಅದೇ ನಿರೀಕ್ಷೆ. ಆದರೆ ಅದೇ ಒಂದು ಗೆರೆ.
          </p>
          <p className="mt-2 text-pp-mauve-d">
            ಈ ಭಾವನೆ ನಿಮ್ಮಲ್ಲಿದ್ದರೆ, ಖಂಡಿತ ನೀವು ಏಕಾಂಗಿ ಅಲ್ಲ, ನೀವೊಬ್ಬರೇ ಉತ್ತರ
            ಹುಡುಕಬೇಕಾಗೂ ಇಲ್ಲ.
          </p>
        </div>
        <p className="mt-[clamp(14px,2.2vh,22px)] max-w-[470px] text-[clamp(0.94rem,1.9vh,1.04rem)] max-[1040px]:max-w-none">
          ಗರ್ಭಗುಡಿ, ಮೊದಲು ನಿಮ್ಮ ಮಾತುಗಳಿಗೆ ಕಿವಿಯಾಗುತ್ತದೆ. ನಿಮ್ಮ ಸಮಸ್ಯೆ ಅರಿತುಕೊಂಡು
          ಸೂಕ್ತವಾದ ಫಲವತ್ತತೆ ಚಿಕಿತ್ಸೆಯ ಆಯ್ಕೆಗಳನ್ನು ತಿಳಿಸುತ್ತದೆ.
        </p>
        <div className="mt-[clamp(16px,2.6vh,26px)] flex flex-wrap gap-3 max-[640px]:gap-2.5">
          <a
            href="#path"
            className={button("ink", "max-[640px]:flex-[1_1_100%]")}
          >
            ಫರ್ಟಿಲಿಟಿ 360 ಬಗ್ಗೆ ತಿಳಿಯಿರಿ
            <Arrow />
          </a>
          <a
            href="#paripoorna"
            className={button("line", "max-[640px]:flex-[1_1_100%]")}
          >
            ಪರಿಪೂರ್ಣ 2026 ಇಲ್ಲಿ ಹುಡುಕಿ
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
