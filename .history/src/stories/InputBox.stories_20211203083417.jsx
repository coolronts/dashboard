import { DisabledInputWithLabel, SearchInput }  from "../Components";

import Center from './Center';

export default {
  title: "InputBox",
  component: SearchInput,
  DisabledInputWithLabel
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


const Template2 = (args) => (
  <Center>
    <div className="container w-1/4">
      <DisabledInputWithLabel {...args}/>
    </div>
  </Center>
)

export const DisableWithLabelInput = Template2.bind({});

DisableWithLabelInput.args = {
  label: "I am Label",
  text: "I am Text"
};






