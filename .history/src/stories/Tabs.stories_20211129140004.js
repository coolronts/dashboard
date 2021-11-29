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

        export const NormalTabs = () => ( <
            Tabs options = {
                ["Yes", "No", "Maybe"] } >
            <
            p className = "bg-white shadow px-5 py-2" > Yes is Clicked! < /p> <
            p className = "bg-white shadow px-5 py-2" > No is Clicked! < /p> <
            p className = "bg-white shadow px-5 py-2" > Maybe is Clicked! < /p> <
            /Tabs>
        );
        export const BoxTabs = () => ( <
            Tabs options = {
                ["Yes", "No", "Maybe"] }
            isBox = { true } >
            <
            p className = "bg-white shadow px-5 py-2" > Yes is Clicked! < /p> <
            p className = "bg-white shadow px-5 py-2" > No is Clicked! < /p> <
            p className = "bg-white shadow px-5 py-2" > Maybe is Clicked! < /p> <
            /Tabs>
        );