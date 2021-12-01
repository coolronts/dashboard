import { Download, Show } from "../../../../Components/Icons";

import DropDown from "../../../../Components/DropDown";
import Table from "../../../../Components/Table";
import Tags from "../../../../Components/Tags";
import { invoiceDataApi } from "../../../../api/api";
import { useState } from "react";

type dataProps = {
  date: string;
  id: number;
  amount: number;
  status: string;
};

const InvoicesTable: React.FC = () => {
  const [data, setData] = useState<dataProps[]>([]);
  const headings = ["Date", "Invoice Id", "Amount", "Status", ""];

  const styles = {
    header:
      "flex justify-between bg-gray-100 py-4 rounded-t-2xl mt-6 font-sans font-semibold",
    row: `flex text-sm bg-red-300 w-full items-center justify-between font-semibold font-sans tracking-tight py-3`,
    col: "text-center",
    cell: "text-sm text-gray-500",
    lastCol:
      "w-1/5 flex justify-center px-3 items-center text-gray-500 text-4xl",
    button: "rounded-full bg-gray-200 p-2 mr-2 shadow cursor-pointer",
  };

  if (data.length === 0) {
    invoiceDataApi(5).then((response) => setData(response));
  }
  const tableRows = data.map((item: dataProps, i: number) => (
    <div className={styles.row} key={i}>
      {[item.date, item.id, item.amount].map((item, i) => (
        <div className={styles.col} key={i}>
          <div className={styles.cell}>{item}</div>
        </div>
      ))}
      <div className={styles.col}>
        <div className="px-3">
          <Tags
            name={item.status}
            color={
              item.status === "paid"
                ? "green"
                : item.status === "unpaid"
                ? "red"
                : "blue"
            }
          />
        </div>
      </div>
      <div className={styles.lastCol}>
        <Show className={styles.button} />
        <Download className={styles.button} />
      </div>
    </div>
  ));

  return (
    <div>
      <hr className="mb-6" />
      <DropDown items={["All Time", "Last 7 days", "Last 30 days"]} />
      <Table isHeader={true} headings={headings}>
        {tableRows}
      </Table>
    </div>
  );
};

export default InvoicesTable;
