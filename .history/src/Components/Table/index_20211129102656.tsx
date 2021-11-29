interface TableProps {
  isHeader?: boolean;
  headings?: string[];
  data?: any[];
}
const Table: React.FC<TableProps> = ({ isHeader = false, headings, data }) => {
  const styles = {
    header: "flex justify-around bg-gray-100 py-4 rounded-t-3xl font-sans",
    column: `text-center`,
    columnTitle: "text-lg text-gray-500 capitalize font-semibold",
    row: `flex text-sm items-center justify-between font-semibold font-sans tracking-tight py-3`,
  };

  return (
    <div>
      {isHeader && headings && (
        <div className={styles.header}>
          {headings.map((item, i) => (
            <p className={styles.columnTitle}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Table;
