interface TableProps {
  isHeader?: boolean;
  headings?: string[];
  data: { [key: string]: number | string }[];
}
const Table: React.FC<TableProps> = ({ isHeader = false, headings, data }) => {
  const styles = {
    header: "flex justify-around bg-gray-100 py-4 rounded-t-3xl font-sans",
    column: `text-center`,
    columnTitle: "text-lg text-gray-500 capitalize font-semibold",
    row: `text-base text-gray-500`,
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
      <div className="divide-y divide-gray-300 divide-opacity-60 border-2 border-gray-200">
        {data &&
          data.map((item, i) => (
            <div className={styles.row}>
              {Object.keys(item).map((key, i) => (
                <p className={styles.column}>{item[key]}</p>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Table;
