import Center from './Center';
import { Modal }  from "../Components";

export default {
  title: "Modal",
  component: Modal
}
const Template = (args) => (
  <Center>
    <div className="container w-1/4">
      <SearchInput {...args}/>
    </div>
  </Center>
)

export const Search = Template.bind({});

Search.args = {
  placeholder: "Search Here!",
};
