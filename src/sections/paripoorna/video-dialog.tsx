import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const SHORT_ID = "7LJ9LlGClMY";

// Auto-opens once per page load when the whole Paripoorna section is on screen
// (or, where the section is taller than the screen, e.g. on phones, when it fills the screen)
const VideoDialog = () => {
  const [open, setOpen] = useState(false);
  // Browsers only autoplay with sound once the visitor has clicked/tapped the page (scrolling
  // doesn't count), so start with sound when that has happened and muted otherwise.
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const section = document.querySelector("#paripoorna");
    if (!section) return;
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[entries.length - 1];
        const viewportH = e.rootBounds?.height ?? window.innerHeight;
        const fullyVisible =
          e.intersectionRatio >= 0.98 ||
          e.intersectionRect.height >= viewportH * 0.9;
        // skip while the enquiry form (or any other dialog) is open
        if (!fullyVisible || document.querySelector('[role="dialog"]')) return;
        setMuted(!navigator.userActivation?.hasBeenActive);
        setOpen(true);
        io.disconnect();
      },
      // top margin keeps the part hidden under the fixed header from counting as visible
      {
        threshold: Array.from({ length: 21 }, (_, i) => i / 20),
        rootMargin: "-80px 0px 0px 0px",
      },
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[100]"
        onClose={() => setOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 flex items-center justify-center p-3 md:p-6">
          <Transition.Child
            as={Fragment}
            enter="duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            enterFrom="translate-y-8 scale-[0.85] opacity-0"
            enterTo="translate-y-0 scale-100 opacity-100"
            leave="duration-200 ease-in"
            leaveFrom="translate-y-0 scale-100 opacity-100"
            leaveTo="translate-y-8 scale-[0.85] opacity-0"
          >
            {/* Width follows the screen height so the whole 9:16 Short fits (title bar + padding ≈ 7rem) */}
            <Dialog.Panel className="w-[min(400px,calc((100vh_-_7rem)_*_9_/_16))] overflow-hidden rounded-xl bg-white shadow-2xl transition">
              <div className="flex items-center justify-between gap-3 border-b px-4 py-3">
                <Dialog.Title className="line-clamp-1 font-pp-head text-lg font-bold text-gray-900">
                  ಪರಿಪೂರ್ಣ 2026
                </Dialog.Title>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                  className="text-gray-600 hover:text-brandPink"
                >
                  <IoIosCloseCircleOutline fontSize={28} />
                </button>
              </div>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${SHORT_ID}?autoplay=1&mute=${muted ? 1 : 0}&playsinline=1&loop=1&playlist=${SHORT_ID}&rel=0`}
                title="ಪರಿಪೂರ್ಣ 2026"
                className="aspect-[9/16] w-full border-0 bg-black"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default VideoDialog;
