import Card from "../../../Components/Card";
import DropDown from "../../../Components/DropDown";
import createRandomData from "../../../api/Upcoming";
import { useState } from "react";

interface dataProps {
  month: string;
  time: string;
  wage: number;
  price: number;
  meet: string;
}

const AppointmentInvoice: React.FC = () => {
  const [data, setData] = useState<dataProps[]>([]);

  const styles = {
    table: `bg-white mt-6 w-full divide-solid divide-y-2 divide-opacity-60 divide-gray-300 text-gray-700`,
    row: `flex text-sm items-center font-semibold font-sans tracking-tight py-2`,
  };

  if (data.length === 0) {
    createRandomData(5).then((response) => setData(response));
  }

  return (
    <>
      <div className="mt-6">
        <Card
          Element={
            <div className=" mb-4 font-semibold font-sans capitalize">
              <div className="px-6 mb-3">
                <div className="flex text-md text-gray-400 pt-1 items-center">
                  <p className="mr-12 px-4 border-b-4 hover:border-blue-500 border-transparent cursor-pointer">
                    Appointments
                  </p>
                  <p className="mr-12 px-4 border-b-4 hover:border-blue-500 border-transparent cursor-pointer">
                    Invoices
                  </p>
                </div>
                <hr className="mb-6" />
                <DropDown items={["All Time", "Last 7 days", "Last 30 days"]} />
              </div>
              <div className="mt-12 px-12">
                <div className={styles.table}>
                  {data.map((item, i) => (
                    <div className={styles.row} key={i}>
                      <div className="w-2/3 flex items-center">
                        <div className="text-center">
                          <p className="text-3xl text-gray-700">
                            {Math.floor(Math.random() * 30 + 1)}
                          </p>
                          <p className="text-gray-400">
                            {item.month.substring(0, 3)}
                          </p>
                        </div>
                        <div className="text-left ml-6">
                          <p className=" text-base">{item.meet}</p>
                          <p className="text-gray-400 italic">
                            {" "}
                            12:00 - 13:00{" "}
                          </p>
                        </div>
                      </div>
                      <div className="w-1/3 text-right">
                        <p className="">Nok {item.price}</p>
                        <p className="text-gray-400"> {item.wage} Nok/hr </p>
                      </div>
                    </div>
                  ))}
                </div>
                ;
              </div>
            </div>
          }
        />
      </div>
    </>
  );
};

export default AppointmentInvoice;
