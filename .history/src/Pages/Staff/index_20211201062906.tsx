import { Card, DropDown, Tabs, Avatar } from "../../Components";
import { getUserApi } from "../../Utils/api";
import {useState} from "react";
import avatar from "../../Utils/avatar";
const Staff: React.FC = () => {
  const options = ["Staff Working Hours", "Closed Dates", "Staff Members"];

  type dataProps = {
    name: string;
    email: string;
    avatar: string
  }
  const [usersData, setUsersData] =useState<React.ReactNode[]> ();

  const getUsers = async () => {
    

    await getUserApi(5).then((res) => {
      
      res.map((user: any) => {
        let data = [];
        return data.push(
          <div className="flex items-center justify-center">
            <Avatar img={user.avatar} />
            <div className="ml-4">
              <p className="text-lg font-bold">{user.name}</p>
              <p className="text-sm">{user.email}</p>
            </div>
          </div>  
        )
        setUsersData(data);
      }
      );
  return (
    <div>
      <Tabs options={options}>
        <p>Hello</p>
        <p>How </p>
        <p>Are </p>
      </Tabs>

      <DropDown items={[
        {usersData}
        
        
        
        , <h1>Bllo</h1>]} />
    </div>
  );
};
export default Staff;
