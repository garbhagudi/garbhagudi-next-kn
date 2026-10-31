import { Dialog } from "@headlessui/react";
import Form from "components/search/Form";

const BookingDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => (
  <Dialog
    open={open}
    as="div"
    className="relative z-[100] focus:outline-none"
    onClose={onClose}
  >
    <div className="fixed inset-0 bg-black/80" />
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full items-center justify-center px-3 pt-8">
        <Dialog.Panel className="max-w-md rounded-xl bg-gray-800 pb-4 shadow-[0_0_15px_5px_rgba(0,0,0,0.3)] transition-shadow duration-300 ease-out hover:shadow-[0_0_25px_10px_rgba(0,0,0,0.5)]">
          <Form />
        </Dialog.Panel>
      </div>
    </div>
  </Dialog>
);

export default BookingDialog;
