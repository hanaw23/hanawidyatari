"use client";

import { createContext, useState } from "react";

export const ModalImageContext = createContext({});

export const ModalImageProvider = ({ children }) => {
  const [openModalImage, setOpenModalImage] = useState(false);
  const [imageModal, setImageModal] = useState("");

  const isOpen = openModalImage && imageModal !== "";

  const handleCloseModal = () => {
    setOpenModalImage(false);
    setImageModal("");
  };

  return (
    <ModalImageContext.Provider value={{ imageModal, setImageModal, setOpenModalImage, openModalImage }}>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-md" onClick={handleCloseModal}>
          <div className=" w-[90vw] h-[90vh] sm:w-[85vw] sm:h-[85vh] lg:w-[80vw] lg:h-[80vh] flex items-center justify-center">
            <div className=" w-full h-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={imageModal}
                width={1920}
                height={1080}
                alt="Picture of project"
                loading="lazy"
                placeholder="blur"
                blurDataURL="/_next/image?url=/placeholder.jpg&w=16&q=1"
                className="w-full h-full object-contain rounded-xl p-4 sm:p-8 lg:p-10"
              />
            </div>
          </div>
        </div>
      )}

      <div className={`${openModalImage ? "pointer-events-none blur-sm opacity-50" : ""}`}>{children}</div>
    </ModalImageContext.Provider>
  );
};
