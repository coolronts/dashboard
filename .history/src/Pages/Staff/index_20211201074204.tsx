import { Avatar, Card, DropDown, Tabs } from "../../Components";

import { getUserApi } from "../../Utils/api";
import { useState } from "react";

const Staff: React.FC = () => {
  const options = ["Staff Working Hours", "Closed Dates", "Staff Members"];

  const [usersData, setUsersData] = useState<React.ReactNode[]>();
  if (!usersData) {
    getUserApi()
      .then((user) =>
        setUsersData([
          <div className="flex">
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>,
        ])
      )
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Tabs options={options}>
        <p>Hello</p>
        <p>How </p>
        <p>Are </p>
      </Tabs>
      {usersData && usersData.length > 0 && <DropDown items={usersData} />}
    </div>
  );
};

export default Staff;
