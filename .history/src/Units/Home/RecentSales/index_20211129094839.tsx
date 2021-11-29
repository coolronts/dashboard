import Card from "../../../Components/Card";
import MultiColumn from "../../../Components/Charts/MultiColumn";
import Tabs from "../../../Components/Tabs";
import { useState } from "react";

const RecentSales: React.FC = () => {
  const days = ["All-Time", "Last 7 Days", "Last 30 Days"];
  const [optionsDays, setOptionsDays] = useState(2);
  const handleDays = (i: number) => {
    setOptionsDays(i);
  };
  return (
    <div className="mb-6">
      <Card
        isHeader={true}
        title="Recent Sales"
        subtitle="Last 30 days"
        Element={
          <Tabs
            horizontalPosition="end"
            isBox={true}
            options={["All-Time", "Last 7 Days", "Last 30 Days"]}
          >
            <MultiColumn />
            <MultiColumn />;
            <MultiColumn />;
          </Tabs>
        }
      />
    </div>
  );
};

export default RecentSales;
