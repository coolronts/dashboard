import { Modal, PrimaryButton } from "../Components";
import {useState} from 'react'

import Center from './Center';

export default {
  title: "Modal",
  component: Modal
}
const Template = (args) => (
  let [isOpen, setIsOpen] = useState(false);
  const handleOpen = (isOpen) => setIsOpen(isOpen);
  return (
    <Center>
    <div className="container w-1/4">
      <div onClick={handleOpen(true)}>
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
)

export const ModalBox = Template.bind({});

ModalBox.args = {
};
