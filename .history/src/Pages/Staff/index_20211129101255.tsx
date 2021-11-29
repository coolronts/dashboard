import Table from "../../Components/Table";

const Staff: React.FC = () => {
  return (
    <div>
      <Table
        isHeader={true}
        headings={["booked", "done", "cancelled", "booked", "done"]}
      />
    </div>
  );
};
export default Staff;
