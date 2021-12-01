import { Download, Show } from "../../../../Components/Icons";
import { DropDown, Table, Tags } from "../../../../Components";

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
  const headings = ["Date", "Invoice Id", "Amount", "Status", "Button "];

  const styles = {
    header:
      "flex justify-between bg-gray-100 py-4 rounded-t-2xl mt-6 font-sans font-semibold",
    row: `flex text-sm w-full items-center justify-between font-semibold font-sans tracking-tight py-3`,
    col: "text-center w-1/5",
    cell: "text-sm text-gray-500 flex justify-center items-center w-full",
    button: "rounded-full bg-gray-200 p-2 mr-2 text-4xl shadow cursor-pointer",
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
        <div className={styles.cell}>
          <Tags
            name={item.status}
            type={
              item.status === "paid"
                ? "done"
                : item.status === "unpaid" && "unpaid"
            }
            color={item.status !== "paid" && item.status !== "unpaid" && "blue"}
          />
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.cell}>
          <Show className={styles.button} />
          <Download className={styles.button} />
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <hr className="mb-6" />
      <DropDown items={["All Time", "Last 7 days", "Last 30 days"]} />
      <div className="mt-6" />
      <Table isHeader={true} headings={headings}>
        {tableRows}
      </Table>
    </div>
  );
};

export default InvoicesTable;
