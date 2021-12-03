import Card from "../Components/Card";

export default {
  title: "Card",
  component: Card,
}
const Template = (args) => (
  <div className="container grid place-content-center">
    <Card {...args} />
  </div>
)

export const SampleCard = Template.bind({});
SampleCard.args = {
  size:"",
  Element: <div>Hello</div>,
  isHeader:true,
  title:"I am Title",
  subtitle: "I am Subtitle"
};
