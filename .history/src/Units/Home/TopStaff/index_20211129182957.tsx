import Avatar from "../../../Components/Avatar";
import Card from "../../../Components/Card";
import createRandomData from "../../../api/TopStaff";
import { useState } from "react";

interface dataProps {
  avatar: string;
  name: string;
  price: number;
}
const TopStaff: React.FC = () => {
  const [data, setData] = useState<dataProps[]>([]);
  if (data.length === 0) {
    createRandomData(5).then((response) => setData(response));
  }
  let newData = []
  data.map((item) => {
    newData.push({
      "col1": <>
                <Avatar img={item.avatar} />
                <p className="ml-2">{item.name}</p>
              </>,
        "col2":<p className="">Nok {item.price}</p>
    })

  }

  const styles = {
    table: `bg-white w-full divide-solid divide-y-2 divide-opacity-60 divide-gray-300 text-gray-700`,
    row: `flex text-sm items-center font-semibold font-sans tracking-tight py-2`,
  };
  return (
    <Card isHeader={true} title="Top Staff" subtitle="Current month" size="sm">
      <div className={styles.table}>
        {data.map((item, i) => (
          <div className={styles.row} key={i}>
            <div className="w-2/3 flex items-center">
              <Avatar img={item.avatar} />
              <p className="ml-2">{item.name}</p>
            </div>
            <div className="w-1/3 text-right">
              <p className="">Nok {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TopStaff;
