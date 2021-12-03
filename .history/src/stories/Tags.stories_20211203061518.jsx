import Center from './Center';
import Tags from "../Components/Tags";

export default {
    title: "Tags",
    component: Tags,
};
const Template = (args) =>
    <Center>
        < Tags {...args} />
    </Center>

export const TagsList = Template.bind({});
TagsList.args = {
    color: "red",
    name: "red",
};