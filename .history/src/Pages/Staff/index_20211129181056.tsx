import Card from "../../Components/Card";
import Table from "../../Components/Table";

const Staff: React.FC = () => {
  return (
    <Card>
      <Table
        isHeader={true}
        headings={["booked", "done", "cancelled", "hello", "boolo"]}
        data={[
          {
            booked: "1",
            done: "2",
            cancelled: "3",
            hello: "4",
            boolo: "5",
          },
          {
            booked: "1",
            done: "2",
            cancelled: "3",
            hello: "4",
            boolo: "5",
          },
          {
            booked: "1",
            done: "2",
            cancelled: "3",
            hello: "4",
            boolo:"5",
          },
          {
            booked: "1",
            done: "2",
            cancelled: "3",
            hello: "4",
            boolo: "5",
          },
          {
            booked: "1",
            done: "2",
            cancelled: "3",
            hello: "4",
            boolo: "5",
          },
          {
            booked: "1",
            done: "2",
            cancelled: "3",
            hello: "4",
            boolo: "5",
          },
        ]}
      />
    </Card>
  );
};
export default Staff;
