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
      <div className={styles.header}>
        {headings.map((item, i) => (
          <div className="w-1/5 text-center" key={i}>
            <p className="text-lg text-gray-500">{item}</p>
          </div>
        ))}
      </div>
      ;
    </div>
  );
};

export default Table;
