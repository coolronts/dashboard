import { Card, Table } from "../../../Components";
import { useEffect, useState } from "react";

import { topServicesApi } from "../../../api/api";

type dataProps = {
  position: string;
  price: string;
};
const TopService: React.FC = () => {
  const [data, setData] = useState<dataProps[]>([]);

  if (data.length === 0) {
    topServicesApi(5).then((response) => setData(response));
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
