import { DropDown, Table, Tags } from "../../../../Components";

import { getUpcomingApi } from "../../../../Utils/api";
import { randomNumber } from "../../../../Utils/math";
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
    row: `flex text-sm w-full items-center justify-between font-semibold font-sans tracking-tight py-3`,
    col1: "w-1/2 flex items-center",
    date: "w-1/6 text-center px-6 mr-6",
    day: "text-3xl text-gray-700",
    month: "text-gray-400",
    appointment: "text-left w-full",
    meet: "text-base",
    time: "text-gray-400 italic",
    col2: "w-1/3 text-right",
    tag: "flex justify-between items-center",
    col3: "",
  };

  if (data.length === 0) {
    getUpcomingApi(5).then((response) => setData(response));
  }

  const tableRows = data.map((item, i) => (
    <div className={styles.row} key={i}>
      <div className={styles.col1}>
        <div className={styles.date}>
          <p className={styles.day}>{randomNumber(1, 31)}</p>
          <p className={styles.month}>{item.month.substring(0, 3)}</p>
        </div>
        <div className={styles.appointment}>
          <p className={styles.meet}>{item.meet}</p>
          <p className={styles.time}>12:00 - 13:00</p>
        </div>
      </div>
      <div className={styles.col2}>
        <div className={styles.tag}>
          <Tags
            name={status[i]}
            icon={status[i] === "done" ? "done" : null}
            color={
              status[i] === "booked"
                ? "blue"
                : status[i] === "done"
                ? "green"
                : "red"
            }
          />

          <div className={styles.col3}>
            <p className="">Nok {item.price}</p>
            <p className="text-gray-400">{item.wage} Nok/hr</p>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <hr className="mb-6" />
      <div>
        <DropDown items={["All Time", "Last 7 days", "Last 30 days"]} />;
      </div>

      <div className="mt-6" />
      <Table>{tableRows}</Table>
    </>
  );
};

export default AppointmentsTable;
