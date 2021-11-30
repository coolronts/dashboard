import Card from "../../../Components/Card";
import Table from "../../../Components/Table";
import createRandomData from "../../../api/Upcoming";
import { useState } from "react";

interface dataProps {
  month: string;
  time: string;
  wage: number;
  price: number;
  meet: string;
}

const UpcomingAppointments: React.FC = () => {
  const [data, setData] = useState<dataProps[]>([]);
  const styles = {
    table: `bg-white mt-6 w-full divide-solid divide-y-2 divide-opacity-60 divide-gray-300 text-gray-700`,
    row: `flex text-sm items-center font-semibold font-sans tracking-tight py-2`,
    col1: "w-2/3 flex items-center",
    date: "text-center",
    day: "text-3xl text-gray-700",
    month: "text-gray-400",
    appointment: "text-left ml-6",
    meet: "text-base",
    time: "text-gray-400 italic",
    amount: "w-1/3 text-right",
    wage:"text-gray-400"  

    

  };

  if (data.length === 0) {
    createRandomData(5).then((response) => setData(response));
  }
  return (
    <Card
      isHeader={true}
      title="Upcoming Appointments"
      subtitle="Current month"
    >
      <div className={styles.table}>
        {data.map((item, i) => (
          <div className={styles.row} key={i}>
            <div className={styles.col1}>
              <div className={styles.date}>
                <p className={styles.day}>
                  {Math.floor(Math.random() * 30 + 1)}
                </p>
                <p className={styles.month}>{item.month.substring(0, 3)}</p>
              </div>
              <div className={styles.appointment }>
                <p className={styles.meet}>{item.meet}</p>
                <p className={styles.time}> 12:00 - 13:00 </p>
              </div>
            </div>
            <div className={styles.amount}>
              <p>Nok {item.price}</p>
              <p className={styles.wage}> {item.wage} Nok/hr </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default UpcomingAppointments;
