import { ReactNode, useEffect, useState } from "react";
import { sort, sum } from "../../../Utils/math";

import Card from "../../../Components/Card";
import Map from "../../../Components/Map";
import Table from "../../../Components/Table";
import { salesApi } from "../../../api/api";

type saleData = {
  country: string;
  sales: number;
  country_code: string;
};

const CountrySales: React.FC = () => {
  const styles = {
    row: `flex py-3 w-full text-base items-center font-semibold font-sans tracking-tight py-2 justify-between`,
    col1: "w-1/3 text-left",
    col2: "w-full px-2 text-center relative",
    progressBar: "bg-gray-200 h-2.5 rounded-full",
    blueBar: "bg-blue-600 h-2.5 rounded-full absolute top-0",
    col3: "w-1/3 text-right text-gray-400",
  };
  const [data, setData] = useState<saleData[]>([]);
  const [totalSales, setTotalSales] = useState(0);
  useEffect(() => {
    if (data.length === 0) {
      setData(() => salesApi());
      sort(data, "sale", "desc");
      setTotalSales(sum(data, "sale"));
    }
  }, [data, setData, setTotalSales, totalSales]);

  const Element: ReactNode[] = [];

  data.map((item, index) => {
    const percent =
      typeof item.sales === "number" && (item.sales / totalSales) * 100;
    Element.push(
      <div className={styles.row} key={index}>
        <div className={styles.col1}>{item.country}</div>
        <div className={styles.col2}>
          <div className={styles.progressBar} />
          <div className={styles.blueBar} style={{ width: `${percent}%` }} />
        </div>
        <div className={styles.col3}>{item.sales}</div>
      </div>
    );
  });

  return (
    <div className="my-6">
      <Card isHeader={true} title="Sales by Country" subtitle="Current month">
        <div>
          <Map />
          <Table border={false}>{Element}</Table>
        </div>
      </Card>
    </div>
  );
};

export default CountrySales;
