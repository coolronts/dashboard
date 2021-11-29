import Avatar from "../../../Components/Avatar";
import Card from "../../../Components/Card";
import { ReactNode } from "react";
import Table from "../../../Components/Table";
import createRandomData from "../../../api/TopStaff";
import { useEffect } from "react";

const TopStaff: React.FC = () => {
  let newData: ReactNode[] = [];
  if (newData.length === 0) {
    createRandomData(5).then((response) => {
      response.map((item, i) => {
        return newData.push(
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
    row: `flex justify-between w-full text-sm items-center font-semibold font-sans tracking-tight py-2`,
  };
  useEffect(() => {
    console.log(newData, "newData");
  }, [newData]);
  return (
    <Card isHeader={true} title="Top Staff" subtitle="Current month" size="sm">
      <Table border={false}>{newData}</Table>
    </Card>
  );
};

export default TopStaff;
