import Tags from "../../../../Components/Tags";
import createRandomData from "../../../../api/Upcoming";
import { useState } from "react";

interface dataProps {
  date: string;
  id: number;
  amount: number;
}

const InvoicesTable: React.FC = () => {
  const [data, setData] = useState<dataProps[]>([]);
  const status = ["paid", "unpaid", "processing", "paid", "processing"];
  return <>Hello</>;
};

export default InvoicesTable;
