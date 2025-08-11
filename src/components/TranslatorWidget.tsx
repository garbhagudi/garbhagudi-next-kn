import { useEffect, useRef, useState } from "react";
import { BsGlobe } from "react-icons/bs";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
    __googleTranslateInitDone?: boolean;
  }
}

const TranslateWidget = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [dropdownWidth, setDropdownWidth] = useState<number | null>(null);

  useEffect(() => {
    if (!showDropdown) return;
    if (typeof window === "undefined") return;

    // if (window.__googleTranslateInitDone) return;
    // window.__googleTranslateInitDone = true;

    const initTranslate = () => {
      if (document.getElementById("google_translate_element")) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,bn,ta,te",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };

    // if (window.google && window.google.translate) {
    //   initTranslate();
    //   return;
    // }

    window.googleTranslateElementInit = initTranslate;

    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      try {
        delete window.googleTranslateElementInit;
      } catch {}
    };
  }, [showDropdown]);

  // Keep dropdown width same as button
  useEffect(() => {
    if (buttonRef.current) {
      setDropdownWidth(buttonRef.current.offsetWidth);
    }
  }, [showDropdown]);

  return (
    <div className="relative inline-block">
      {/* Globe Button */}
      <button
        ref={buttonRef}
        onClick={() => setShowDropdown((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all shadow-sm w-full"
      >
        <BsGlobe className="w-5 h-5 text-gray-700 dark:text-gray-200" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
          Translate
        </span>
      </button>

      {/* Dropdown */}
      {showDropdown && (
        <div
          id="google_translate_element"
          className="absolute top-full left-0 mt-2 p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg w-fit"
        />
      )}

      <style jsx global>{`
        .goog-te-gadget {
          font-size: 0 !important;
        }
        .goog-te-combo {
          padding: 8px 12px;
          border-radius: 6px;
          border: 1px solid #d1d5db;
          background-color: white;
          font-size: 14px !important;
          color: #374151;
          outline: none;
          cursor: pointer;
          width: 100% !important;
          box-sizing: border-box;
        }
        .goog-te-combo:hover {
          border-color: #9ca3af;
        }
        @media (prefers-color-scheme: dark) {
          .goog-te-combo {
            background-color: #1f2937 !important;
            border-color: #374151 !important;
            color: #f3f4f6 !important;
          }
          .goog-te-combo:hover {
            border-color: #4b5563 !important;
          }
        }
        .goog-te-gadget-icon {
          display: none !important;
        }
        .VIpgJd-ZVi9od-xl07Ob-lTBxed {
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default TranslateWidget;
