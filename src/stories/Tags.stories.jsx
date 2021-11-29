import Tags from "../Components/Tags";

export default {
    title: "Tags",
    component: Tags,
};
const Template = (args) => < Tags {...args }/>;

export const TagsList = Template.bind({});
TagsList.args = {
    color: "red",
    name: "red",
};