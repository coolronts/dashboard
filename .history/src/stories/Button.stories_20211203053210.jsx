import { Primary, RoundIcon } from "../Components/Buttons";

import { Notifications } from "../Components/Icons";

export default {
  title: "Buttons",
  component: Primary,
  RoundIcon,
};

const Template = (args) => (
  <div className="grid w-full h-full place-items-center place-content-center bg-red-300"> 
    <Primary {...args} />
  </div>
);

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

