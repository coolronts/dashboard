import { Primary, RoundIcon } from "../Components/Buttons";

import Center from './Center';
import { Notifications } from "../Components/Icons";

export default {
  title: "Buttons",
  component: Primary,
  RoundIcon,
};

const Template = (args) => (
  <Center>
    <Primary {...args} />
  </Center>
);

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  name: "Primary"
};



export const RoundIconButton = <RoundIcon icon={Notifications} />


