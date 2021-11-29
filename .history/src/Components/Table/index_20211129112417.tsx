type data = {
  [key: string | number]: number | string | boolean;
};

interface TableProps {
  isHeader?: boolean;
  headings?: string[];
  data: data[];
}
const Table: React.FC<TableProps> = ({ isHeader = false, headings, data }) => {
  const styles = {
    header: "flex bg-gray-100 py-4 rounded-t-3xl font-sans",
    column: `text-center`,
    columnTitle: `text-lg text-gray-500 capitalize font-semibold ${
      headings && `w-1/${headings.length}`
    }`,
    row: `flex text-sm items-center justify-around font-semibold font-sans tracking-tight py-3`,
    text: "text-base text-gray-500",
    body: "divide-y divide-gray-300 divide-opacity-60 border-2 border-gray-200",
  };

  if (isHeader && headings) {
    if (Object.keys(data[0]).length !== headings.length) {
      throw new Error("Headings and data length mismatch");
    }
  }
  return (
    <div>
      {isHeader && headings && (
        <div className={styles.header}>
          {headings.map((item, i) => (
            <p className={styles.columnTitle}>{item}</p>
          ))}
        </div>
      )}
      <div className={styles.body}>
        {data &&
          data.map((item, i) => (
            <div className={styles.row}>
              {Object.keys(item).map((key, i) => (
                <p className={styles.text}>{item[key]}</p>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Table;
