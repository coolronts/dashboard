import { ReactNode, useEffect, useState } from "react";

import Avatar from "../../../Components/Avatar";
import Card from "../../../Components/Card";
import Table from "../../../Components/Table";
import createRandomData from "../../../api/TopStaff";

const TopStaff: React.FC = () => {
  const styles = {
    row: `flex justify-between w-full text-sm items-center font-semibold font-sans tracking-tight py-2`,
    col1: "w-2/3 flex items-center",
    name: "ml-2",
    col2: "w-1/3 text-right",
  };

  const [data, setData] = useState<ReactNode[]>([]);
  let newData: ReactNode[] = [];
  if (data.length === 0) {
    createRandomData(5)
      .then((response) => {
        response.map((item) => {
          return newData.push(
            <div className={styles.row} key={item.name}>
              <div className={styles.col1}>
                <Avatar img={item.avatar} />
                <p className={styles.name}>{item.name}</p>
              </div>
              <div className={styles.col2}>
                <p className="">Nok {item.price}</p>
              </div>
            </div>
          );
        });
      })
      .then(() => setData(newData));
  }
  useEffect(() => {}, [data]);

  return (
    <Card isHeader={true} title="Top Staff" subtitle="Current month" size="sm">
      <Table border={false}>{data}</Table>
    </Card>
  );
};

export default TopStaff;
