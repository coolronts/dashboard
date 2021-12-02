import {
  Avatar,
  CalendarButton,
  Card,
  DropDown,
  Table,
  Tabs,
} from "../../Components";
import { getScheduleApi, getUserApi } from "../../Utils/api";
import { useEffect, useState } from "react";

const Staff: React.FC = () => {
  const options = ["Staff Working Hours", "Closed Dates", "Staff Members"];
  const [schedule, setSchedule] = useState<React.ReactNode[]>();

  const [usersData, setUsersData] = useState<React.ReactNode[]>();
  if (!usersData) {
    getUserApi(5)
      .then((users) => {
        setUsersData(
          users.map((user) => (
            <div className="flex items-center text-gray-600">
              <Avatar img={user.avatar} radius={60} />
              <div className="ml-3">
                <p className="font-bold">{user.name}</p>
                <p className="text-gray-500">{user.email}</p>
              </div>
            </div>
          ))
        );
      })
      .catch((err) => console.log(err));
  }

  if (!schedule) {
    let data: any = [];
    getScheduleApi()
      .then((items) => {
        items.map((item: any, index: number) =>
          data.push(
            <div className="flex justify-around w-full">
              <div>
                <Avatar img={item.avatar} radius={60} />
                <p className=" bg-red-300">{item.name}</p>
              </div>

              <div className="w-1/6" />
              <div className="flex justify-around w-full">
                {item.schedule.map((schedule: any, index: number) => (
                  <div>WorkDay</div>
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
      {usersData && (
        <>
          <Tabs options={options}>
            <p>Hello</p>
            <p>How </p>
            <p>Are </p>
          </Tabs>
          <div className="flex justify-between items-center text-gray-600 font-sans ">
            <div className="w-1/3 flex items-center">
              <DropDown items={usersData} />
            </div>

            <div className="w-full flex justify-end items-center">
              <div className="w-1/5 pr-8">
                <Card type="secondary">
                  <div className="flex justify-center items-center h-full">
                    <p className="text-xl font-semibold">Today</p>
                  </div>
                </Card>
              </div>
              <div>
                <CalendarButton />
              </div>
            </div>
          </div>
          {schedule && (
            <div className="my-12">
              <Card>
                <Table
                  isHeader={true}
                  headings={[
                    "Staff",
                    " ",
                    "05 Sun",
                    "06 Mon",
                    "07 Tue",
                    "08 Wed",
                    "09 Thu",
                    "10 Fri",
                    "11 Sat",
                  ]}
                >
                  {schedule}
                </Table>
              </Card>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Staff;
