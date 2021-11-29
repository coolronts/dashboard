import { ReactNode, useState } from "react";

import Avatar from "../../../Components/Avatar";
import Card from "../../../Components/Card";
import Table from "../../../Components/Table";
import createRandomData from "../../../api/TopStaff";

interface dataProps {
  avatar: string;
  name: string;
  price: number;
}
const TopStaff: React.FC = () => {
  let newData: ReactNode[] = [];
  const [data, setData] = useState<dataProps[]>([]);
  if (data.length === 0) {
    createRandomData(5).then((response) => {
      response.map((item, i) => {
        newData.push(
          <div className={styles.row} key={i}>
            <div className="w-2/3 flex items-center">
              <Avatar img={item.avatar} />
              <p className="ml-2">{item.name}</p>
            </div>
            <div className="w-1/3 text-right">
              <p className="">Nok {item.price}</p>
            </div>
          </div>
        );
      });
    });
  }

  const styles = {
    table: `bg-white w-full divide-solid divide-y-2 divide-opacity-60 divide-gray-300 text-gray-700`,
    row: `flex text-sm items-center font-semibold font-sans tracking-tight py-2`,
  };
  return (
    <Card isHeader={true} title="Top Staff" subtitle="Current month" size="sm">
      <div className={styles.table}>
        <Table border={true}>{newData}</Table>
      </div>
    </Card>
  );
};

export default TopStaff;
