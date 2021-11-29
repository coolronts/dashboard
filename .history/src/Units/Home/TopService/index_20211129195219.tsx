import { useEffect, useState } from "react";

import Card from "../../../Components/Card";
import Table from "../../../Components/Table";
import createRandomData from "../../../api/TopService";

type dataProps = {
  position: string;
  price: number;
};
const TopService: React.FC = () => {
  const [data, setData] = useState<dataProps[]>([]);

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
      <div className="mt-2">
        <Table border={false} data={data} />
      </div>
    </Card>
  );
};

export default TopService;
