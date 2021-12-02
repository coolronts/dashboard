import { getScheduleApi, getUserApi } from "../../../Utils/api";
import { Avatar, Tags } from "../../../Components";
import { useState, useEffect } from "react";

const StaffTable: React.FC = () => {
  const styles = {
    body: "flex justify-around w-full font-sans px-4",
    avatar: "flex items-center justify-left px-2 ",
    staffInfo: "ml-3 font-sans text-left ",
    name: "tracking-tighter text-xl",
    availability: "text-gray-400 text-base font-semibold",
    scheduleCols: "flex justify-even items-center  w-full ",
    rows: "w-full text-lg flex flex-col justify-between items-center",
  };
  const [schedule, setSchedule] = useState<any[]>([]);

  const daySchedule = (schedule: any) => {
    return schedule.map((time: any, index: number) => (
      <div className="my-2">
        <Tags
          name={time.period}
          color={
            time.period.toLowerCase() === "closed"
              ? "red"
              : time.status.toLowerCase() === "pending"
              ? "purple"
              : "gray"
          }
        />
      </div>
    ));
  };
  if (!schedule) {
    let data: any = [];
    getScheduleApi(10)
      .then((items) => {
        items.map((item: any, index: number) =>
          data.push(
            <div className={styles.body}>
              <div className={styles.avatar} style={{ width: "28%" }}>
                <Avatar img={item.avatar} radius={60} />
                <div className={styles.staffInfo}>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.availability}>Availability: 36h</p>
                </div>
              </div>

              <div className={styles.scheduleCols}>
                {item.schedule.map((schedule: any, index: number) => (
                  <div className={styles.rows}>{daySchedule(schedule)}</div>
                ))}
              </div>
            </div>
          )
        );
      })
      .then(() => setSchedule(data))
      .then(() => console.log(schedule))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>Staff Table</h1>
    </div>
  );
};

export default StaffTable;
