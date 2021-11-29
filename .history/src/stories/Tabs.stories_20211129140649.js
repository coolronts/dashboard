import Tabs from "../Components/Tabs";

export default {
  title: "Tabs",
  component: Tabs,
};
const Template = (args) => <Tabs {...args} />;

export const BoxTabs = Template.bind({});
BoxTabs.args = {
  options: ["Red", "Green", "Blue"],
  isBox: true,
  children: [
    <div className="text-red-600 w-36 text-center shadow rounded py-1"> Red </div>,
    <div className="text-green-600 text-center w-36 shadow rounded py-1">Green</div>,
    <div className="text-blue-600 text-center w-36 shadow rounded py-1"> Blue </div>
  ]
};
