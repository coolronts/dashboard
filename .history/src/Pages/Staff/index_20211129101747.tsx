import Card from "../../Components/Card";
import Table from "../../Components/Table";

const Staff: React.FC = () => {
  return (
    <div>
      <Card
        Element={
          <Table
            isHeader={true}
            headings={["booked", "done", "cancelled", "booked", "done"]}
          />
        }
      />
    </div>
  );
};
export default Staff;
