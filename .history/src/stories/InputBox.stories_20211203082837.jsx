import Center from './Center';
import { SearchInput }  from "../Components";

export default {
  title: "InputBox",
  component: SearchInput
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

