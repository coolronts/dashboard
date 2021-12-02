import {
  Avatar,
  CalendarButton,
  Card,
  DropDown,
  Table,
  Tabs,
} from "../../Components";
import { useEffect, useState } from "react";

import { getUserApi } from "../../Utils/api";

const Staff: React.FC = () => {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

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
                  <div className="flex justify-center items-center">
                    <p className="text-2xl  font-semibold">Today</p>
                  </div>
                </Card>
              </div>
              <CalendarButton />
            </div>
          </div>
          <div className="my-12">
            <Card>
              <Table
                isHeader={true}
                headings={["Name", "Email", "Phone", "Role"]}
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
