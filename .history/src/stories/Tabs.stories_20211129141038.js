import Tabs from "../Components/Tabs";

export default {
  title: "Tabs",
  component: Tabs,
};
const Template = (args) => <Tabs {...args} />;

export const tabs = Template.bind({});
tabs.args = {
  horizontalPosition: "start",
  options: ["Red", "Green", "Blue"],
  isBox: true,
  children: [
    <div className="text-red-600 w-36 text-center text-xl font-semibold font-sans shadow rounded py-6"> Red </div>,
    <div className="text-green-600 text-center w-36  text-xl font-semibold font-sans shadow rounded py-6">Green</div>,
    <div className="text-blue-600 text-center w-36  text-xl font-semibold font-sans shadow rounded py-6"> Blue </div>
  ]
};
