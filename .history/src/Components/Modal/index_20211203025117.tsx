import { useEffect, useState } from "react";

import { Cancel } from "../Icons";

type ModalProps = {
  children: React.ReactNode;
  isOpen?: boolean;
};
const Modal: React.FC<ModalProps> = ({ children, isOpen }) => {
  const styles = {
    background:
      "fixed w-full h-full overflow-auto bg-gray-900 opacity-50  top-0 left-0 z-10",
    body: "bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-24 rounded-2xl shadow-2xl ",
    close:
      "absolute top-0 right-0 m-4 cursor-pointer text-2xl text-gray-500 hover:text-gray-700",
  };
  const handleIsOpen = (isOpen: boolean): boolean => {
    return !isOpen;
  };
  useEffect(() => {}, [isOpen]);
  return (
    <>
      <div className={styles.background}>
        <div className={styles.body}>
          <div className={styles.close} onClick={() => setShowModal(false)}>
            <Cancel />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
