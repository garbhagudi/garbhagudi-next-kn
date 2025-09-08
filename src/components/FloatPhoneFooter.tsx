import { Dialog } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiPhone } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdCalendarMonth } from "react-icons/md";
import Form from "./search/Form";

const FloatPhoneFooter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <>
      <div className="fixed bottom-0 z-10 grid w-full animate-shake cursor-pointer grid-cols-2 items-center justify-center bg-brandPink px-2 font-content font-bold text-white transition-opacity ease-in hover:opacity-100 md:hidden">
        {/* Book Appointment Button */}
        <button
          className="flex h-full flex-col items-center justify-center gap-y-1 border-r p-2.5"
          onClick={open}
        >
          <MdCalendarMonth className="h-6 w-6" />
          <div className="text-sm">ಭೇಟಿ ಕಾಯ್ದಿರಿಸಿ</div>
        </button>
        {/* Phone Call Button */}
        <Link
          href="tel:+919108910832"
          className="flex flex-col items-center gap-y-1 border-l p-2.5"
        >
          <HiPhone className="h-5 w-5" />
          <div className="text-sm" suppressHydrationWarning>
            {path === "/treatments/iui-treatment-in-bangalore"
              ? "+91 9480 9480 05"
              : "+91 9108 9108 32"}
          </div>
        </Link>
      </div>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        {/* Faded background */}
        <div
          className="fixed inset-0 bg-black/80 transition-opacity duration-300 ease-out"
          onClick={close}
        ></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center px-3 pt-8">
            <Dialog.Panel className="data-[closed]:transform-[scale(95%)] max-w-md rounded-xl bg-gray-800 pb-4 shadow-[0_0_15px_5px_rgba(0,0,0,0.3)] transition-shadow duration-300 ease-out hover:shadow-[0_0_25px_10px_rgba(0,0,0,0.5)] data-[closed]:opacity-0">
              <div className="relative h-32 w-full">
                <Image
                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1757330189/GG_Popup_Image-01_ykvac7.webp"
                  alt="formBanner"
                  className="h-full w-full rounded-t-md"
                  width={380}
                  height={220}
                />
                <button
                  onClick={close}
                  className="absolute right-2 top-1 h-fit w-fit rounded-2xl bg-white text-brandPink"
                >
                  <IoIosCloseCircleOutline fontSize={24} />
                </button>
              </div>
              <div className="px-0">
                <div className="flex justify-center">
                  <div className="mx-5 mt-5 w-fit self-center rounded-md bg-brandPink px-4 py-1 text-center text-[13px] font-semibold text-white shadow-sm">
                    ಭೇಟಿ ಕಾಯ್ದಿರಿಸಿ
                  </div>
                </div>
                <Form />
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default FloatPhoneFooter;
