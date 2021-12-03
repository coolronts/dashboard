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


const Template2= (args) => (
  <Center>
    <div className="container w-1/4">
      <DisabledInputWithLabel {...args}
        label="I am Label"
        text="I am Text"
      />
    </div>
  </Center>
)

export const DisabledWithLabelInput = Template2.bind({});
DisabledWithLabelInput.args = {
  placeholder:"SearchMe!"
};

