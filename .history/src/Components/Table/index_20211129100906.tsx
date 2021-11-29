interface TableProps {
  isHeader?: boolean;
  headings?: string[];
  data?: any[];
}
const Table: React.FC<TableProps> = ({ isHeader = false, headings, data }) => {
  return (
    <div>
      <h1>Table</h1>
    </div>
  );
};

export default Table;
