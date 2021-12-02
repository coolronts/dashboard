import { Avatar, Card, DropDown, Tabs } from "../../Components";
import { useEffect, useState } from "react";

import { getUserApi } from "../../Utils/api";

const Staff: React.FC = () => {
  const options = ["Staff Working Hours", "Closed Dates", "Staff Members"];

  const [usersData, setUsersData] = useState<React.ReactNode[]>();
  if (!usersData) {
    getUserApi(5)
      .then((users) => {
        console.log(users);
        setUsersData(
          users.map((user) => (
            <div className="flex items-center text-gray-600">
              <Avatar img={user.avatar} radius={90} />
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
          <div className="flex justify-between">
            <div className="w-1/3">
              <DropDown items={usersData} />;
            </div>

            <div className="w-1/2 flex justify-between">
              <Card type="secondary">
                <p>Today</p>
              </Card>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Staff;
