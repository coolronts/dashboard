import { Primary, RoundIcon } from "../Components/Buttons";

import { Notifications } from "../Components/Icons";

export const PrimaryButton = () => <Primary name="Primary" />;
export const RoundIconButton = () => <RoundIcon Icon={<Notifications />} />;



export default {
  title: "Buttons",
  component: Primary,
  RoundIcon,
};

const Template = (args) => <Primary {...args} />;
export const PrimaryButton = Template.bind({});

Primary.args = {
  name: "Primary",

};
