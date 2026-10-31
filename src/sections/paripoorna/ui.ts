export const WRAP =
  "mx-auto w-[min(1120px,100%_-_48px)] max-[640px]:w-[calc(100%_-_36px)]";

export const SEC_HEAD =
  "mb-9 grid grid-cols-2 items-center gap-20 max-[1040px]:grid-cols-1 max-[1040px]:gap-6";

export const H2 =
  "m-0 font-pp-head text-[clamp(2.2rem,4.4vw,3.5rem)] font-bold leading-[1.4] text-pp-char";

export const EM = "not-italic text-pp-pink";

const BTN =
  "group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full border-2 border-transparent py-[17px] font-pp-ui text-[0.95rem] font-semibold transition-[background,color,border-color,transform,box-shadow] duration-[250ms] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-pp-mauve";

const VARIANTS = {
  ink: "bg-pp-pink text-white hover:bg-pp-pink-d",
  line: "border-pp-char text-pp-char hover:bg-pp-char hover:text-white",
  light: "border-white text-white hover:bg-white hover:text-pp-char",
};

const SINGLE_LINE = "whitespace-nowrap px-[30px] leading-none";
const MULTI_LINE =
  "max-w-full whitespace-normal px-6 text-center leading-[1.45]";

export const button = (
  variant: keyof typeof VARIANTS,
  extra = "",
  wrap = false,
) => `${BTN} ${wrap ? MULTI_LINE : SINGLE_LINE} ${VARIANTS[variant]} ${extra}`;
