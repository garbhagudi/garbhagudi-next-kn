import React from "react";
import Link from "next/link";
import { HiPhone } from "react-icons/hi";

/* Desktop only — sits directly below the SalesIQ chat bubble, same right edge
 * (see `html.gg-phone-round-floats .zsiq_floatmain` in globals.css, bottom: 90px). Hidden on
 * mobile, where SalesIQ is left at its default position (FloatPhoneFooter covers the phone CTA there). */
const FloatPhone = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 hidden h-14 w-14 rounded-full bg-[#25D366] md:block">
      <Link
        href="tel:+919108910832"
        aria-label="Call GarbhaGudi"
        className="flex h-full w-full items-center justify-center"
      >
        <HiPhone className="h-7 w-7 text-white" />
      </Link>
    </div>
  );
};

export default FloatPhone;
