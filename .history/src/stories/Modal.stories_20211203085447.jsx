import { Modal, PrimaryButton } from "../Components";

import Center from './Center';
import {useState} from 'react'

export default {
  title: "Modal",
  component: Modal
}
const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  function handleOpen (isOpen){ setIsOpen(isOpen)}
  return (
    <Center>
    <div className="container w-1/4">
      <div onClick={()=>handleOpen(true)}>
        <PrimaryButton name="Toggle"/>
        </div>
        {isOpen && (
            <Modal {...args}>
              <p>I am Modal</p>
          </Modal>
        )}
    </div>
    </Center>
  );
}

export const ModalBox = Template.bind({});

ModalBox.args = {
};
