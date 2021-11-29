import Tabs from "../Components/Tabs";

export default {
    title: "Tabs",
    component: Tabs,
};
const Template = (args) => < Tabs {...args }
/>;

export const BoxTabs = Template.bind({});
BoxTabs.args = {
        tabs: ["Red", "Green", "Blue"],
        isBox: true,
        children: [ < div > Red < /div>, <div>Green</div > , < div > Blue < /div>],
        };