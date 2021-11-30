import { ReactNode, useEffect, useState } from "react";

import Card from "../../../Components/Card";
import Table from "../../../Components/Table";
import createRandomData from "../../../api/Upcoming";

const UpcomingAppointments: React.FC = () => {
  const styles = {
    row: `flex justify-between text-sm items-center font-semibold font-sans tracking-tight py-2`,
    col1: "w-2/3 flex items-center",
    date: "text-center",
    day: "text-3xl text-gray-700",
    month: "text-gray-400",
    appointment: "text-left ml-6",
    meet: "text-base",
    time: "text-gray-400 italic",
    col2: "w-full bg-red-300 text-right",
    wage: "text-gray-400",
  };
  const [data, setData] = useState<ReactNode[]>([]);
  let responseDataStack: ReactNode[] = [];

  if (data.length === 0) {
    createRandomData(5)
      .then((response) => {
        response.map((item, i) => {
          responseDataStack.push(
            <div className={styles.row} key={i}>
              <div className={styles.col1}>
                <div className={styles.date}>
                  <p className={styles.day}>
                    {Math.floor(Math.random() * 30 + 1)}
                  </p>
                  <p className={styles.month}>{item.month.substring(0, 3)}</p>
                </div>
                <div className={styles.appointment}>
                  <p className={styles.meet}>{item.meet}</p>
                  <p className={styles.time}> 12:00 - 13:00 </p>
                </div>
              </div>
              <div className={styles.col2}>
                <p>Nok {item.price}</p>
                <p className={styles.wage}> {item.wage} Nok/hr </p>
              </div>
            </div>
          );
        });
      })
      .then(() => setData(responseDataStack));
  }
  useEffect(() => {}, [data]);

  return (
    <Card
      isHeader={true}
      title="Upcoming Appointments"
      subtitle="Current month"
    >
      <Table border={false}>{data}</Table>
    </Card>
  );
};

export default UpcomingAppointments;
