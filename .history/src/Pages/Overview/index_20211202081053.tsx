import { Left, Right } from "../../Units/Home/Section";

import { SplitScreen } from "../../Components";

const Overview: React.FC = () => {
  return (
    <div className="mt-6">
      <SplitScreen leftWeight="flex-grow" rightWeight="w-1/4">
        <Left />
        <Right />
      </SplitScreen>
    </div>
  );
};

export default Overview;
