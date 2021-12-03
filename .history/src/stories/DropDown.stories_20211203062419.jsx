import Center from './Center';
import {DropDown}  from "../Components";

export default {
  title: "Drowdown",
  component: DropDown,
}
const Template = (args) => (
  <Center>
    <div className="container w-1/4">
      <DropDown {...args}>
        <p>I am the Card and I am Responsive</p>
      </DropDown>
    </div>
  </Center>
)

export const Dropdown = Template.bind({});
Dropdown.args = {
  items:["Option 1", "Option 2", "Option 3"]
};

