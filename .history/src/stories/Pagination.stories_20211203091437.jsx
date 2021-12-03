import Center from './Center';
import { Pagination } from "../Components";

export default {
  title: "Pagination",
  component: Pagination
}
const Template = (args) => {
  return (
    <Center>
      <Pagination/>
    </Center>
  );
}

export const PaginationInput = Template.bind({});

PaginationInput.args = {
  items: 10,
  showItems: 10
}
