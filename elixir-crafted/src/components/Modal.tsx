import { Fragment } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import clsx from "clsx";
import { useAppStore } from "../stores/useAppStore";

export default function Modal() {
  const modal = useAppStore((state) => state.modal);
  const closeModal = useAppStore((state) => state.closeModal);

  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild as={Fragment}>
            <DialogBackdrop
              className={clsx([
                // Base styles
                "fixed inset-0 bg-black bg-opacity-75 transition",
                // Shared closed styles
                "data-[closed]:opacity-0",
                // Entering styles
                "data-[enter]:duration-300 data-[enter]:ease-out",
                // Leaving styles
                "data-[leave]:duration-200 data-[leave]:ease-in",
              ])}
            />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild as={Fragment}>
                <DialogPanel
                  className={clsx([
                    // Base styles
                    "relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6",
                    // Shared closed styles
                    "data-[closed]:opacity-0 data-[closed]:scale-95",
                    // Entering styles
                    "data-[enter]:duration-300 data-[enter]:ease-out",
                    // Leaving styles
                    "data-[leave]:duration-200 data-[leave]:ease-in",
                  ])}
                >
                  <DialogTitle
                    as="h3"
                    className="text-gray-900 text-4xl font-extrabold my-5 text-center"
                  >
                    Título Aquí
                  </DialogTitle>

                  <DialogTitle
                    as="h3"
                    className="text-gray-900 text-2xl font-extrabold my-5"
                  >
                    Ingredientes y Cantidades
                  </DialogTitle>

                  <DialogTitle
                    as="h3"
                    className="text-gray-900 text-2xl font-extrabold my-5"
                  >
                    Instrucciones
                  </DialogTitle>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
