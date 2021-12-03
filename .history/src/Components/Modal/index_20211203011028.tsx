import { useEffect, useState } from "react";

type ModalProps = {
  children: React.ReactNode;
};
const Modal: React.FC<ModalProps> = ({ children }) => {
  const styles = {
    background: "bg-white",
  };
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.background}>
      <div>Hello</div>
    </div>
  );
};

export default Modal;
