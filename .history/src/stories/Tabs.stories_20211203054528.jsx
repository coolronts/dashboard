import Center from './Center';
import Tabs from "../Components/Tabs";

export default {
  title: "Tabs",
  component: Tabs,
};
const Template = (args) =>
  <div className="grid place-items-center">
    <Tabs {...args} />
  </div>

export const TabsButton = Template.bind({});
TabsButton.args = {
  horizontalPosition: "start",
  options: ["Red", "Green", "Blue"],
  isBox: true,
  children: [
    <div className="w-full text-white bg-red-500 text-center text-xl font-semibold font-sans shadow rounded py-6"> Red </div>,
    <div className="text-white bg-green-500 text-center w-full  text-xl font-semibold font-sans shadow rounded py-6">Green</div>,
    <div className="text-white bg-blue-500 text-center w-full  text-xl font-semibold font-sans shadow rounded py-6"> Blue </div>
  ]
};
