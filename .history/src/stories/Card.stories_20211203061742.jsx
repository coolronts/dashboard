import Card from "../Components/Card";
import Center from './Center';

export default {
  title: "Card",
  component: Card,
}
const Template = (args) => (
  <Center>
    <Card {...args}>
      <p>I am the Card and I am Responsive</p>
    </Card>
  </Center>
)

export const PrimaryCard = Template.bind({});
PrimaryCard.args = {
  size:"",
  Element: <div>Hello</div>,
  isHeader:true,
  title:"I am Title",
  subtitle: "I am Subtitle"
};



export const SecondaryCard = Template.bind({});
SecondaryCard.args = {
  size:"",
  Element: <div>Hello</div>,
  isHeader:true,
  title:"I am Title",
  subtitle: "I am Subtitle",
  type: "secondary"
};





