import { Card, Tabs } from "../../Components";

const Staff: React.FC = () => {
  const options = ["Staff Working Hours", "Closed Dates", "Staff Members"];
  return (
    <div>
      <Tabs options={options}>
        <p>Hello</p>
        <p>How </p>
        <p>Are </p>
      </Tabs>
      <div className="w-1/6">
        <Card type="secondary">
          <h1>Hello</h1>
        </Card>
        ;
      </div>
    </div>
  );
};
export default Staff;
