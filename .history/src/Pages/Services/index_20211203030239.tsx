import { Modal } from "../../Components";
import { useState } from "react";

const Services: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = (isOpen: boolean) => {
    setShowModal(isOpen);
  };
  return (
    <div>
      <div onClick={() => setShowModal(true)}>Modal On</div>
      {showModal && (
        <Modal isOpen={showModal} handleModal={handleModal}>
          <h1>Services</h1>
        </Modal>
      )}
    </div>
  );
};

export default Services;
