import { useEffect, useState } from "react";

import { Cancel } from "../Icons";

type ModalProps = {
  children: React.ReactNode;
};
const Modal: React.FC<ModalProps> = ({ children }) => {
  const styles = {
    background:
      "fixed w-full h-full overflow-auto bg-gray-900 opacity-50  top-0 left-0 z-10",
    body: "bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-24 rounded-2xl shadow-2xl ",
  };
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.background}>
      <div className={styles.body}>Hello</div>
    </div>
  );
};

export default Modal;
