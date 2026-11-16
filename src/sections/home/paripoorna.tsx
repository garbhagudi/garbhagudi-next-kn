import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { HiArrowRight } from "react-icons/hi";

const SHORT_ID = "ziqEWTp7jQw";

const Paripoorna = ({ className = "" }: { className?: string }) => {
  const playerRef = useRef<HTMLDivElement>(null);

  // the embed only mounts its iframe on click, so click it once the player scrolls into view
  useEffect(() => {
    const wrapper = playerRef.current;
    if (!wrapper) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        wrapper.querySelector<HTMLElement>(".yt-lite")?.click();
        observer.disconnect();
      },
      { threshold: 0.5 },
    );
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`text-center ${className}`}>
      <h2 className="font-heading text-xl font-extrabold tracking-tight text-brandDark max-sm:text-3xl sm:leading-none lg:text-3xl">
        ಪರಿಪೂರ್ಣ 2026 :{" "}
        <span className="text-brandPink">ಐವಿಎಫ್ @ ₹1,75,000</span>
      </h2>
      <div
        ref={playerRef}
        className="mx-auto mt-6 w-full max-w-[260px] overflow-hidden rounded-xl shadow-lg"
      >
        <LiteYouTubeEmbed
          id={SHORT_ID}
          title="ಪರಿಪೂರ್ಣ 2026 | ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಸೆಂಟರ್"
          aspectWidth={9}
          aspectHeight={16}
          poster="hqdefault"
          webp
          noCookie
          // browsers only allow autoplay when muted
          muted
          // emits rel="prefetch" instead of "preload" so the thumbnail doesn't compete with the LCP banner
          rel="prefetch"
        />
      </div>
      <div className="pt-6 lg:mt-auto">
        <Link
          href="/features/paripoorna"
          className="inline-flex items-center gap-2 rounded-md bg-brandPink px-3 py-2 text-sm font-bold text-white hover:bg-brandPink2"
        >
          ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ <HiArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default Paripoorna;
