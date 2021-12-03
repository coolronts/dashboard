import Center from './Center';
import { SearchBox }  from "../Components";

export default {
  title: "InputBox",
  component: SearchBox
}
const Template = (args) => (
  <Center>
    <div className="container w-1/4">
      <SearchBox {...args}/>
    </div>
  </Center>
)

export const Search = Template.bind({});


