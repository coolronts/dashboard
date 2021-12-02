import {
  Avatar,
  CalendarButton,
  Card,
  DropDown,
  Tabs,
  Pagination,
} from "../../Components";
import { getScheduleApi, getUserApi } from "../../Utils/api";
import { useEffect, useState } from "react";
import StaffTable from "../../Units/Staff/StaffTable";

const Staff: React.FC = () => {
  const options = ["Staff Working Hours", "Closed Dates", "Staff Members"];
  const [schedule, setSchedule] = useState();

  const [usersData, setUsersData] = useState<React.ReactNode[]>();
  if (!schedule) {
    getScheduleApi(10)
      .then((res) => setSchedule(res))
      .catch((err) => console.log(err));
  }
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

  useEffect(() => {}, [schedule, usersData]);
  return (
    <div>
      {usersData && (
        <>
          <div className="pb-8 ">
            <Tabs options={options}>
              <p></p>
              <p> </p>
              <p> </p>
            </Tabs>
          </div>
          <div className="flex justify-between items-center text-gray-600 font-sans mt-6  ">
            <div className="w-1/3 flex items-center">
              <DropDown items={usersData} />
            </div>

            <div className="w-full flex justify-end items-center">
              <div className="w-1/6 pr-8">
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
          <StaffTable />
        </>
      )}
      <div className="flex justify-between items-center">
        <div className="w-32 flex items-center">
          <DropDown items={[10, 20, 30]} />
        </div>
        <div className="w-1/4">
          <Pagination items={50} showItems={10} />
        </div>
      </div>
    </div>
  );
};

export default Staff;
