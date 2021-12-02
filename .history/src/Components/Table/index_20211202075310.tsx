import { ReactNode, useEffect } from "react";

type data = {
  [key: string | number]: number | string | boolean;
};
interface TableProps {
  children?: ReactNode[];
  isHeader?: boolean;
  headings?: string[];
  data?: data[];
  border?: boolean;
}
const Table: React.FC<TableProps> = ({
  isHeader = false,
  headings,
  data,
  children,
  border = true,
}) => {
  const styles = {
    header:
      "flex justify-even bg-gray-100 py-4 rounded-t-3xl font-sans text-center",
    columnTitle: `text-lg text-gray-500 capitalize font-semibold `,
    body: `w-full h-full divide-solid divide-y divide-gray-300 divide-opacity-60 border-gray-200  ${
      border && "border-2 px-2"
    }  `,
    row: `flex text-sm items-center text-center font-semibold font-sans tracking-tight flex justify-between`,
    text: `text-base text-gray-500 py-4 ${
      headings && `w-1/${headings.length}`
    }`,
  };
  if (!headings && !data && !children) {
    throw new Error("Table requires either headings or data or children");
  }

  useEffect(() => {}, [children, headings, data]);

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
          children == null &&
          data.map((item, i) => (
            <div className={styles.row}>
              {Object.keys(item).map((key, i) => (
                <p className={styles.text}>{item[key]}</p>
              ))}
            </div>
          ))}
        {children &&
          children.length > 0 &&
          (children as ReactNode[]).map((item, i) => (
            <div className={styles.row}>{item}</div>
          ))}
      </div>
    </div>
  );
};

export default Table;
