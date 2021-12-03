import { Modal, PrimaryButton } from "../Components";

import Center from './Center';
import {useState} from 'react'

export default {
  title: "Modal",
  component: Modal
}
const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = (isOpen) => setIsOpen(isOpen);
  return (
    <Center>
      <>
      {isOpen && (
            <Modal handleModal={handleOpen} >
              <p>I am Modal</p>
          </Modal>
        )}
      <div onClick={()=>handleOpen(true)}>
        <PrimaryButton name="Toggle"/>
        </div>
        </>
    </Center>
  );
}

export const ModalBox = Template.bind({});

