import { Avatar, Card, DropDown, Tabs } from "../../Components";

import { getUserApi } from "../../Utils/api";
import { useState } from "react";

const Staff: React.FC = () => {
  const options = ["Staff Working Hours", "Closed Dates", "Staff Members"];

  const [usersData, setUsersData] = useState<React.ReactNode[]>();
  let data: React.ReactNode[] = [];
  getUserApi(5)
    .then((res) => {
      res.map((user: any) => {
        return data.push(
          <div className="flex items-center justify-center">
            <Avatar img={user.avatar} />
            <div className="ml-4">
              <p className="text-lg font-bold">{user.name}</p>
              <p className="text-sm">{user.email}</p>
            </div>
          </div>
        );
      });
    })
    .then(() => setUsersData(data));
  return (
    <div>
      <Tabs options={options}>
        <p>Hello</p>
        <p>How </p>
        <p>Are </p>
      </Tabs>
      {/* {usersData && <DropDown items={usersData} />} */}
    </div>
  );
};

export default Staff;
