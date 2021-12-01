import { Card, Tabs } from "../../../Components";

import MultiColumn from "../../../Components/Charts/MultiColumn";

const RecentSales: React.FC = () => {
  const options = ["All-Time", "Last 7 Days", "Last 30 Days"];
  return (
    <div className="mb-6">
      <Card isHeader={true} title="Recent Sales" subtitle="Last 30 days">
        <Tabs horizontalPosition="end" isBox={true} options={options}>
          {[...Array(3)].map((_, i) => (
            <div key={i}>
              <MultiColumn />
            </div>
          ))}
        </Tabs>
      </Card>
    </div>
  );
};

export default RecentSales;
