"use client";
import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type ImageModalProps = {
  children: ReactNode;
};

const ImageModal = ({ children }: ImageModalProps) => {
  const [showModal, setShowModal] = useState(false);

  console.log(showModal);
  return (
    <div>
      <div onClick={() => setShowModal(true)} className="cursor-pointer">
        {children}
      </div>
      {showModal && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className={`min-w-[100vw] min-h-[100vh] flex flex-col justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/80 dark:bg-light/80 dark:text-dark backdrop-blur-md text-light z-40`}
        >
          <p>Test</p>
          <div onClick={() => setShowModal(false)} className="w-[90%]">{children}</div>
        </motion.div>
      )}
    </div>
  );
};

export default ImageModal;
