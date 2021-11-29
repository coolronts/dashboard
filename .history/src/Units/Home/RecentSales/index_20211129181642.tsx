import Card from "../../../Components/Card";
import MultiColumn from "../../../Components/Charts/MultiColumn";
import Tabs from "../../../Components/Tabs";

const RecentSales: React.FC = () => {
  return (
    <div className="mb-6">
      <Card isHeader={true} title="Recent Sales" subtitle="Last 30 days">
        <Tabs
          horizontalPosition="end"
          isBox={true}
          options={["All-Time", "Last 7 Days", "Last 30 Days"]}
        >
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
