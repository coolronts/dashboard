import { Modal, PrimaryButton }  from "../Components";

import Center from './Center';

export default {
  title: "Modal",
  component: Modal
}
const Template = (args) => (
  <Center>
    <div className="container w-1/4">
      <PrimaryButton name="Toggle"/>
      <Modal {...args}>
         <p>I am Modal</p>
      </Modal>
    </div>
  </Center>
)

export const ModalBox = Template.bind({});

ModalBox.args = {
};
