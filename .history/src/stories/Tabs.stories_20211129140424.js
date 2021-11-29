import Tabs from "../Components/Tabs";

export default {
  title: "Tabs",
  component: Tabs,
};
const Template = (args) => <Tabs {...args} />;

export const BoxTabs = Template.bind({});
BoxTabs.args = {
  tabs: ["Red", "Green", "Blue"],
  isBox: true,
  children: [
    <div className="bg-red-600 w-36 shadow rounded py-1"> Red </div>,
    <div className="bg-green-600 w-36 shadow rounded py-1">Green</div>,
    <div className="bg-blue-600 w-36 shadow rounded py-1"> Blue </div>
  ]
};
