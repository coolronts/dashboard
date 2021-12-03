import {DisabledInputWithLabel, SearchBox}  from "../Components";

import Center from './Center';

export default {
  title: "InputBox",
  component: SearchBox,DisabledInputWithLabel
}
const Template = (args) => (
  <Center>
    <div className="container w-1/4">
      <SearchBox {...args}/>
    </div>
  </Center>
)

export const Search = Template.bind({});
Search.args = {
  placeholder:"SearchMe!"
};

