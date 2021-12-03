import { useEffect, useState } from "react";

type ModalProps = {
  children: React.ReactNode;
};
const Modal: React.FC<ModalProps> = ({ children }) => {
  const styles = {
    background: "bg-white absolute inset-0 z-50 p-24 rounded-2xl shadow-2xl",
    body: "",
  };
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.background}>
      <div className={styles.body}>Hello</div>
    </div>
  );
};

export default Modal;
