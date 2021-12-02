import { Left, Right } from "../../Units/Home/Section";

import { SplitScreen } from "../../Components";

const Overview: React.FC = () => {
  return (
    <div className="mt-6">
      <SplitScreen leftWeight="w-2/3" rightWeight="w-1/3">
        <Left />
        <Right />
      </SplitScreen>
    </div>
  );
};

export default Overview;
