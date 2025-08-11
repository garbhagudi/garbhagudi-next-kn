import React from "react";
import { HiPhone } from "react-icons/hi";

const FloatPhone = () => {
  return (
    <div className="flex bg-brandPink3 h-10 justify-center rounded-full w-10 bottom-36 duration-500 ease-linear fixed items-center md:bottom-20 md:h-14 md:right-3.5 md:w-14 right-6 transition-opacity">
      <a href="tel:+919108910832">
        <HiPhone className="h-6 text-white w-6 md:h-8 md:w-8" />
      </a>
    </div>
  );
};

export default FloatPhone;
