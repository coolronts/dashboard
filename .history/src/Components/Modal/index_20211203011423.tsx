import { useEffect, useState } from "react";

type ModalProps = {
  children: React.ReactNode;
};
const Modal: React.FC<ModalProps> = ({ children }) => {
  const styles = {
    background: "relative w-full bg-transparent",
    body: "bg-white absolute inset-0 z-50 p-24 rounded-2xl shadow-2xl w-1/2",
  };
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.background}>
      <div className={styles.body}>Hello</div>
    </div>
  );
};

export default Modal;
