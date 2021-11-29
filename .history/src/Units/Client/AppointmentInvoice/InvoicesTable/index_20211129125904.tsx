import { Download, Show } from "../../../../Components/Icons";
import { useEffect, useState } from "react";

import DropDown from "../../../../Components/DropDown";
import Table from "../../../../Components/Table";
import Tags from "../../../../Components/Tags";
import createRandomData from "../../../../api/Invoice";

type data = {
  date: string;
  id: number;
  amount: number;
  status: string;
};

const InvoicesTable: React.FC = () => {
  const [data, setData] = useState<data[]>([]);
  const status = ["paid", "unpaid", "processing", "paid", "processing"];
  const headings = ["Date", "Invoice Id", "Amount", "Status"];

  const styles = {
    header: "flex justify-between bg-gray-100 py-4 rounded-t-2xl mt-6",
    row: `flex text-sm items-center justify-between font-semibold font-sans tracking-tight py-3`,
  };

  if (data.length === 0) {
    createRandomData(5).then((response) => {
      console.log(response);
      setData(response);
    });
  }

  return (
    <div>
      <hr className="mb-6" />
      <DropDown items={["All Time", "Last 7 days", "Last 30 days"]} />

      <div className={styles.header}>
        {headings.map((item, i) => (
          <div className="w-1/5 text-center" key={i}>
            <p className="text-lg text-gray-500">{item}</p>
          </div>
        ))}
      </div>
      <div className="divide-y divide-gray-300 divide-opacity-60 border-2 border-gray-200">
        {data.map((item, i) => (
          <div className={styles.row} key={i}>
            <div className="w-1/5 text-center">
              <p className="text-base text-gray-500">{item.date}</p>
            </div>
            <div className="w-1/5 text-center">
              <p className="text-base text-gray-500">{item.id}</p>
            </div>
            <div className="w-1/5 text-center">
              <p className="text-base text-gray-500">Nok {item.amount}</p>
            </div>
            <div className="w-1/5 text-center">
              <div className="px-3">
                <Tags
                  name={item.status}
                  color={
                    status[i] === "paid"
                      ? "green"
                      : status[i] === "unpaid"
                      ? "red"
                      : "blue"
                  }
                />
              </div>
            </div>
            <div className="w-1/5 flex justify-center px-3 items-center text-gray-500 text-4xl">
              <Show className=" rounded-full bg-gray-200 p-2 mr-2 shadow cursor-pointer" />
              <Download className="rounded-full bg-gray-200 p-2 shadow cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvoicesTable;
