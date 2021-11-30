import { sort, sum } from "../../../Utils/math";

import Card from "../../../Components/Card";
import Map from "../../../Components/Map";

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
    table: `bg-white w-full divide-solid divide-y-2 divide-opacity-60 divide-gray-300 text-gray-700`,
    row: `flex py-3 text-sm items-center font-semibold font-sans tracking-tight py-2 justify-between`,
  };
  const data = sort(sale, "sale", "desc");
  const totalSale = sum(data, "sale");

  return (
    <div className="my-6">
      <Card isHeader={true} title="Sales by Country" subtitle="Current month">
        <div className="mb-4 font-semibold font-sans capitalize">
          <div className="px-6 mb-3">
            <Map />
            <div className={styles.table}>
              {data.map((item, i) => (
                <div className={styles.row} key={i}>
                  <p className="w-1/3">{item.country}</p>
                  <div className="w-full px-2">
                    <div className="text-center bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{
                          width: `${
                            typeof item.sale === "number" &&
                            (item.sale / totalSale) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-gray-400 w-1/3  text-right">
                    Nok {item.sale}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CountrySales;
