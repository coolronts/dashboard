import { Card, Table } from "../../../Components";
import { ReactNode, useEffect, useState } from "react";

import { getUpcomingApi } from "../../../Utils/api";

const UpcomingAppointments: React.FC = () => {
  const styles = {
    row: `flex justify-between w-full text-sm items-center font-semibold font-sans tracking-tight py-2`,
    col1: "flex-grow flex items-center",
    date: "text-center",
    day: "text-3xl text-gray-700",
    month: "text-gray-400",
    appointment: "text-left ml-6",
    meet: "text-base",
    time: "text-gray-400 italic",
    col2: "flex-shrink text-right",
    wage: "text-gray-400",
  };
  const [data, setData] = useState<ReactNode[]>([]);
  let responseDataStack: ReactNode[] = [];

  if (data.length === 0) {
    getUpcomingApi(5)
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
