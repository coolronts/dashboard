import { Left, Right } from "../../Units/Client/Section";

import SplitScreen from "../../Components/SplitScreen";

const Staff: React.FC = () => {
  return (
    <div className="mt-12">
      <SplitScreen leftWeight="w-1/3" rightWeight="flex-grow">
        <Left />
        <Right />
      </SplitScreen>
    </div>
  );
};

export default Staff;
