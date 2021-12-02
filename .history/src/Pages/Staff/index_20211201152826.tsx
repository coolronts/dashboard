import "./index.less";

import {
  Avatar,
  CalendarButton,
  Card,
  DropDown,
  Table,
  Tabs,
} from "../../Components";
import { useEffect, useState } from "react";

import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { getUserApi } from "../../Utils/api";

const Staff: React.FC = () => {
  const [value, onChange] = useState([new Date(), new Date()]);

  const options = ["Staff Working Hours", "Closed Dates", "Staff Members"];

  const [usersData, setUsersData] = useState<React.ReactNode[]>();
  if (!usersData) {
    getUserApi(5)
      .then((users) => {
        console.log(users);
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

  return (
    <div>
      {usersData && (
        <>
          <Tabs options={options}>
            <p>Hello</p>
            <p>How </p>
            <p>Are </p>
          </Tabs>
          <div className="flex justify-between items-center text-gray-600 font-sans">
            <div className="w-1/3 flex items-center">
              <DropDown items={usersData} />;
            </div>

            <div className="w-full flex justify-end items-center">
              <div className="w-1/5 pr-8">
                <Card type="secondary">
                  <div className="flex justify-center items-center h-full">
                    <p className="text-2xl  font-semibold">Today</p>
                  </div>
                </Card>
              </div>
              <div className="w-1/5">
                <CalendarButton />
                <div className="bg-white rounded-2xl shadow max-content">
                  <DateRangePicker onChange={onChange} value={value} />
                </div>
              </div>
            </div>
          </div>
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
              ></Table>
            </Card>
            ;
          </div>
        </>
      )}
    </div>
  );
};

export default Staff;
