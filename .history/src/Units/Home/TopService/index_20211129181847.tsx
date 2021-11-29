import { useEffect, useState } from "react";

import Card from "../../../Components/Card";
import createRandomData from "../../../api/TopService";

interface dataProps {
  position: string;
  price: number;
}
const TopService: React.FC = () => {
  const [data, setData] = useState<dataProps[]>([]);
  const styles = {
    table: `bg-white w-full divide-solid divide-y-2 divide-opacity-60 divide-gray-300 text-gray-700`,
    row: `flex py-3 text-sm items-center font-semibold font-sans tracking-tight justify-between`,
  };

  if (data.length === 0) {
    createRandomData(5).then((response) => setData(response));
  }
  useEffect(() => {}, [data]);

  return (
    <Card
      isHeader={true}
      title="Top Service"
      subtitle="Current month"
      size="sm"
    >
      <div className="">
        <div className={styles.table}>
          {data.map((item, i) => (
            <div className={styles.row} key={i}>
              <p>{item.position}</p>
              <p>Nok {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default TopService;
