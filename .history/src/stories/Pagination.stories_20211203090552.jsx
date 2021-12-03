import Center from './Center';
import { Pagination } from "../Components";

export default {
  title: "Pagination",
  component: Pagination
}
const Template = (args) => {
  return (
    <Center>
      <Pagination name="Toggle" />
    </Center>
  );
}

export const PaginationInput = Template.bind({});

PaginationInput.args = {
  items: 120,
  showItems: 20
}
