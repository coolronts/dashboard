import Card from "../../Components/Card";
import Table from "../../Components/Table";

const Staff: React.FC = () => {
  return (
    <div>
      <Card
        Element={
          <Table
            isHeader={true}
            headings={["booked", "done", "cancelled", "hello", "boolo"]}
            data={[{ booked: "1", done: "2", cancelled: "3", hello;
: "4", boolo: "5" }]}
          />
        }
      />
    </div>
  );
};
export default Staff;
