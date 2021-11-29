interface TableProps {
  isHeader?: boolean;
  headings?: string[];
  data?: any[];
}
const Table: React.FC<TableProps> = ({ isHeader = false, headings, data }) => {
  const styles = {
    header: "flex justify-between bg-gray-100 py-4 rounded-t-3xl font-sans",
    column: `w-1/${headings && headings.length} text-center`,
    columnTitle: "text-lg text-gray-500 capitalize font-semibold",
    row: `flex text-sm items-center justify-between font-semibold font-sans tracking-tight py-3`,
  };

  return (
    <div>
      {isHeader && headings && (
        <div className={styles.header}>
          {headings.map((item, i) => (
            <div className="" key={i}>
              <p className={styles.columnTitle}>{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Table;
