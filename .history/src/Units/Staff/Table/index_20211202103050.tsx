import { getScheduleApi, getUserApi } from "../../../Utils/api";
import { Avatar, Tags } from "../../../Components";
import { useState, useEffect } from "react";

const StaffTable: React.FC = () => {
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
            <div className="flex justify-around w-full font-sans px-4">
              <div
                className="flex items-center justify-left px-2 "
                style={{
                  width: "28%",
                }}
              >
                <Avatar img={item.avatar} radius={60} />
                <div className="ml-3 font-sans text-left ">
                  <p className="tracking-tighter text-xl">{item.name}</p>
                  <p className="text-gray-400 text-base font-semibold">
                    Availability: 36h
                  </p>
                </div>
              </div>

              <div className="flex justify-even items-center  w-full ">
                {item.schedule.map((schedule: any, index: number) => (
                  <div className="w-full text-lg flex flex-col justify-between items-center ">
                    {daySchedule(schedule)}
                  </div>
                ))}
              </div>
            </div>
          )
        );
      })
      .then(() => {
        console.log(data, "data");

        setSchedule(data);
      })
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
