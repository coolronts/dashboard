import Tags from "../../../../Components/Tags";
import createRandomData from "../../../../api/Upcoming";
import { useState } from "react";

interface dataProps {
  month: string;
  time: string;
  wage: number;
  price: number;
  meet: string;
}

const AppointmentsTable: React.FC = () => {
  const [data, setData] = useState<dataProps[]>([]);
  const status = ["booked", "done", "cancelled", "booked", "done"];

  const styles = {
    table: `bg-white mt-6 w-full divide-solid divide-y-2 divide-opacity-60 divide-gray-300 text-gray-700`,
    row: `flex text-sm items-center justify-between  font-semibold font-sans tracking-tight py-2`,
  };

  if (data.length === 0) {
    createRandomData(5).then((response) => setData(response));
  }

  return (
    <>
      {data.map((item, i) => (
        <div className={styles.row} key={i}>
          <div className="w-1/2 flex items-center">
            <div className="flex-shrink text-center px-6 mr-6">
              <p className="text-3xl text-gray-700">
                {Math.floor(Math.random() * 30 + 1)}
              </p>
              <p className="text-gray-400">{item.month.substring(0, 3)}</p>
            </div>
            <div className="text-left ml-6">
              <p className=" text-base">{item.meet}</p>
              <p className="text-gray-400 italic">12:00 - 13:00</p>
            </div>
          </div>
          <div className="w-1/3 text-right">
            <div className="flex justify-between items-center">
              <Tags
                name={status[i]}
                color={
                  status[i] === "booked"
                    ? "blue"
                    : status[i] === "done"
                    ? "green"
                    : "red"
                }
              />

              <div className="">
                <p className="">Nok {item.price}</p>
                <p className="text-gray-400">{item.wage} Nok/hr</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AppointmentsTable;
