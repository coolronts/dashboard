import { sort, sum } from "../../../Utils/math";

import Card from "../../../Components/Card";
import Map from "../../../Components/Map";
import { ReactNode } from "react";
import Table from "../../../Components/Table";

type saleData = {
  country: string;
  sale: number;
  country_code: string;
};

const sale: saleData[] = [
  {
    country: "Norway",
    country_code: "NO",
    sale: 1245,
  },
  {
    country: "USA",
    country_code: "US",
    sale: 1431,
  },
  {
    country: "Bangladesh",
    country_code: "BD",
    sale: 9992,
  },
  {
    country: "UK",
    country_code: "UK",
    sale: 5145,
  },
  {
    country: "France",
    country_code: "FR",
    sale: 8132,
  },
];

const CountrySales: React.FC = () => {
  const styles = {
    row: `flex py-3 w-full text-base items-center font-semibold font-sans tracking-tight py-2 justify-between`,
    col1: "w-1/3 text-left",
    col2: "w-full px-2 text-center relative",
    progressBar: "bg-gray-200 h-2.5 rounded-full",
    blueBar: "bg-blue-600 h-2.5 rounded-full absolute top-0",
    col3: "w-1/3 text-right text-gray-400",
  };
  const data = sort(sale, "sale", "desc");
  const totalSale = sum(data, "sale");
  const Element: ReactNode[] = [];

  data.map((item, index) => {
    const percent =
      typeof item.sale === "number" && (item.sale / totalSale) * 100;
    Element.push(
      <div className={styles.row} key={index}>
        <div className={styles.col1}>{item.country}</div>
        <div className={styles.col2}>
          <div className={styles.progressBar} />
          <div className={styles.blueBar} style={{ width: `${percent}%` }} />
        </div>
        <div className={styles.col3}>{item.sale}</div>
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
