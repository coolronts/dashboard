import { Primary, RoundIcon } from "../Components/Buttons";

import { Notifications } from "../Components/Icons";

export default {
  title: "Buttons",
  component: Primary,
  RoundIcon,
};

const Template = (args) => <Primary {...args} />;

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  name: "Primary"
};


const Template2 = (args) => <RoundIcon {...args} />;

export const RoundIconButton = Template2.bind({});

RoundIconButton.args = {
  name: "RoundIcon",
  icon: <Notifications />
};

