import { Primary, RoundIcon } from "../Components/Buttons";

import { Notifications } from "../Components/Icons";

export default {
  title: "Buttons",
  component: Primary,
  RoundIcon,
};

export const PrimaryButton = () => <Primary name="Primary" />;
export const RoundIconButton = () => <RoundIcon Icon={<Notifications />} />;
