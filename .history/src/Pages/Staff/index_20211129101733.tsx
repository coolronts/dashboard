import Table from "../../Components/Table";
import Card from "../../Components/Card";

const Staff: React.FC = () => {
  return (
    <div>
      <Card Element={
        <Table
  isHeader={true}
  headings={["booked", "done", "cancelled", "booked", "done"]}
/>

      }>
      
    </div>
  );
};
export default Staff;
