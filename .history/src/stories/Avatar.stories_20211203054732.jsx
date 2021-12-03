import Avatar from "../Components/Avatar";
import Center from "../Center"

export default {
    title: "Avatar",
    component: Avatar,
};
const Template = (args) =>
    <Center>
        <Avatar {...args} />
    </Center>;

export const AvatarImage = Template.bind({});
AvatarImage.args = {
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    radius: "50px",
};