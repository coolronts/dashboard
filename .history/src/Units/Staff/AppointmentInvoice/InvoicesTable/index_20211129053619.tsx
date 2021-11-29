import Tags from "../../../../Components/Tags";
import createRandomData from "../../../../api/Invoice";
import { useState } from "react";

interface dataProps {
  date: string;
  id: number;
  amount: number;
}

const InvoicesTable: React.FC = () => {
  const [data, setData] = useState<dataProps[]>([]);
  const status = ["paid", "unpaid", "processing", "paid", "processing"];
  const headings = ["Date", "Invoice Id", "Amount", "Status", ""];

  const styles = {
    header: "flex justify-between px-6 bg-gray-100 py-4 rounded-t-2xl",
    row: `flex text-sm items-center justify-between  font-semibold font-sans tracking-tight py-2`,
  };

  if (data.length === 0) {
    createRandomData(5).then((response) => setData(response));
  }

  return (
    <div>
      <div className={styles.header}>
        {headings.map((item, i) => (
          <div className="w-1/5 text-center" key={i}>
            <p className="text-lg text-gray-500">{item}</p>
          </div>
        ))}
      </div>
      <div className={styles.header}>
        {data.map((item, i) => (
          <div className={styles.row} key={i}>
            <div className="w-1/5 text-center" key={i}>
              <p className="text-lg text-gray-500">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvoicesTable;
