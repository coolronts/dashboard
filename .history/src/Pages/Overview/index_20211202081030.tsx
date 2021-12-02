import { Left, Right } from "../../Units/Home/Section";

import { SplitScreen } from "../../Components";

const Overview: React.FC = () => {
  return (
    <div className="mt-6">
      <SplitScreen leftWeight="w-3/5" rightWeight="w-1/4">
        <Left />
        <Right />
      </SplitScreen>
    </div>
  );
};

export default Overview;
