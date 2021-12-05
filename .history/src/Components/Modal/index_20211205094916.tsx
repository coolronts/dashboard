import { Cancel } from "../Icons";

type ModalProps = {
  children: React.ReactNode;
  handleModal: Function;
};
const Modal: React.FC<ModalProps> = ({ children, handleModal }) => {
  const styles = {
    background:
      "fixed w-full h-full overflow-auto bg-gray-900 opacity-90 top-0 left-0 z-10",
    container: "relative h-full h-full bg-transparent opacity-100",
    body: "bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-24 rounded-2xl shadow-2xl opacity-100 ",
    close:
      "absolute top-0 right-0 m-4 cursor-pointer text-2xl text-gray-500 hover:text-gray-700",
  };

  return (
    <>
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.body}>
            <div className={styles.close} onClick={() => handleModal(false)}>
              <Cancel />
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
