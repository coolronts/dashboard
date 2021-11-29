import Avatar from "../../../Components/Avatar";
import Card from "../../../Components/Card";
import { ReactNode } from "react";
import Table from "../../../Components/Table";
import createRandomData from "../../../api/TopStaff";

interface newDataProps {
  col1: ReactNode;
  col2: ReactNode;
}
const TopStaff: React.FC = () => {
  let newData: newDataProps[] = [];

  if (newData.length === 0) {
    createRandomData(5).then((response) => {
      response.forEach((item) => {
        newData.push({
          col1: (
            <>
              <Avatar img={item.avatar} />
              <p className="ml-2">{item.name}</p>
            </>
          ),
          col2: <p className="">Nok {item.price}</p>,
        });
      });
    });
  }

  return (
    <Card isHeader={true} title="Top Staff" subtitle="Current month" size="sm">
      {/* <Table ReactNodeData={newData}/> */}
    </Card>
  );
};

export default TopStaff;
