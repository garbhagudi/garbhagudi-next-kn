import React from "react";
import Link from "next/link";

const Band2 = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 my-4 sm:px-6 lg:px-4 border-b border-t border-gray-300 ">
      <span className="text-2xl md:text-2xl block text-center mx-auto py-2">
        <span className="block md:inline-block">
          <Link href="/about/awards-and-accolades" passHref>
            <span className="text-brandPink cursor-pointer font-benne font-semibold">
              ಭಾರತದಲ್ಲಿ ಅತ್ಯುತ್ತಮ ಐವಿಎಫ್ ಮತ್ತು ಫರ್ಟಿಲಿಟಿ ಹಾಸ್ಪಿಟಲ್ ಎಂದು ಪ್ರಶಸ್ತಿ
              ನೀಡಲಾಗಿದೆ
            </span>
          </Link>
        </span>
      </span>
    </div>
  );
};

export default Band2;
