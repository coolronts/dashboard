import Center from './Center';
import {DropDown}  from "../Components";

export default {
  title: "Drowdown",
  component: DropDown,
}
const Template = (args) => (
  <Center>
    <DropDown {...args}>
      <p>I am the Card and I am Responsive</p>
    </DropDown>
  </Center>
)

export const Dropdown = Template.bind({});
Dropdown.args = {
  
};

