import { Avatar, Card, DropDown, Tabs } from "../../Components";
import { useEffect, useState } from "react";

import { getUserApi } from "../../Utils/api";

const Staff: React.FC = () => {
  const options = ["Staff Working Hours", "Closed Dates", "Staff Members"];

  const [usersData, setUsersData] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    while (usersData.length < 5) {
      getUserApi().then((user) =>
        setUsersData([
          ...usersData,
          <div className="flex items-center text-gray-600">
            <Avatar img={user.avatar} radius={90} />
            <div className="ml-3">
              <p className="font-bold">{user.name}</p>
              <p className="text-gray-500">{user.email}</p>
            </div>
          </div>,
        ])
      );
    }
  }, [usersData]);
  return (
    <div>
      <Tabs options={options}>
        <p>Hello</p>
        <p>How </p>
        <p>Are </p>
      </Tabs>
      {usersData && <DropDown items={usersData} />}
    </div>
  );
};

export default Staff;
