import { Card, DropDown, Tabs } from "../../Components";
import { getUserApi } from "../../Utils/api";
import {useState} from "react";
import avatar from "../../Utils/avatar";
const Staff: React.FC = () => {
  const options = ["Staff Working Hours", "Closed Dates", "Staff Members"];

  type dataProps = {
    name: string;
    email: string;
    avatar: any
  }
  const [usersData, setUsersData] =useState<dataProps[]> ();

  const getUsers = async () => {
    const users = await getUserApi();
    setUsersData({
      avatar: users.avatar,
      name: users.name,
      email: users.email
    });
  return (
    <div>
      <Tabs options={options}>
        <p>Hello</p>
        <p>How </p>
        <p>Are </p>
      </Tabs>

      <DropDown items={[
        <h1>Hello</h1>
        
        
        
        , <h1>Bllo</h1>]} />
    </div>
  );
};
export default Staff;
