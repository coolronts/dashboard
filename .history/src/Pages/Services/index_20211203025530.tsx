import { Modal } from "../../Components";
import { useState } from "react";

const Services: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <div onClick={() => setShowModal(true)}>Modal On</div>
      <Modal isOpen={showModal}>
        <h1>Services</h1>
      </Modal>
    </div>
  );
};

export default Services;
