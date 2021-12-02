import { Left, Right } from "../../Units/Home/Section";

import { SplitScreen } from "../../Components";

const Overview: React.FC = () => {
  return (
    <div className="mt-6">
      <SplitScreen leftWeight="w-4/5" rightWeight="flex-grow">
        <Left />
        <Right />
      </SplitScreen>
    </div>
  );
};

export default Overview;
