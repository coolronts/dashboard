interface TableProps {
  isHeader?: boolean;
  headings?: string[];
  data?: any[];
}
const Table: React.FC<TableProps> = ({ isHeader = false, headings, data }) => {
  const styles = {
    header: "flex justify-between bg-gray-100 py-4 rounded-t-2xl mt-6",
    row: `flex text-sm items-center justify-between font-semibold font-sans tracking-tight py-3`,
  };

  return (
    <div>
      <h1>Table</h1>
    </div>
  );
};

export default Table;
