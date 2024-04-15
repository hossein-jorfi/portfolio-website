"use client";
import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type ImageModalProps = {
  children: ReactNode;
};

const ImageModal = ({ children }: ImageModalProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div onClick={() => setShowModal(true)} className="cursor-pointer">
        {children}
      </div>
      {showModal && (
        <motion.div
          onClick={() => setShowModal(false)}
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className={`min-w-[100vw] min-h-[100vh] flex flex-col justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/80 dark:bg-light/80 dark:text-dark backdrop-blur-md text-light z-40`}
        >
          <div className="w-[92%] flex justify-start">
            <div className="cursor-pointer flex flex-col justify-center items-center p-3 z-50">
              <span
                className={`transition-all duration-300 ease-out bg-dark dark:bg-light block ${
                  showModal && "bg-light dark:!bg-dark"
                } h-0.5 w-6 rounded-sm ${
                  showModal ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`transition-all duration-300 ease-out bg-dark dark:bg-light ${
                  showModal && "bg-light dark:!bg-dark"
                } block h-0.5 w-6 rounded-sm my-0.5 ${
                  showModal ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`transition-all duration-300 ease-out bg-dark dark:bg-light ${
                  showModal && "bg-light dark:!bg-dark"
                } block h-0.5 w-6 rounded-sm ${
                  showModal ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
              ></span>
            </div>
          </div>

          <div onClick={() => setShowModal(false)} className="w-[90%]">
            {children}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ImageModal;
