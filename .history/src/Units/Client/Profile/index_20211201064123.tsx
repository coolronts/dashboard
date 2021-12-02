import Avatar from "../../../Components/Avatar";
import Card from "../../../Components/Card";
import { DisabledInputWithLabel } from "../../../Components/InputBox";
import { Primary } from "../../../Components/Buttons";
import Tags from "../../../Components/Tags";
import { getUserApi } from "../../../Utils/api";
import { useState } from "react";

interface response {
  name: string;
  gender: string;
  email: string;
  avatar: string;
}
const Profile: React.FC = () => {
  const [data, setData] = useState<response[]>([]);
  if (!data) {
    getUserApi()
      .then((user) => setData(user))
      .catch((err) => console.log(err));
  }
  return (
    <div>
      {data != null && (
        <Card>
          <div className="flex flex-col items-center justify-center font-sans px-8">
            <Avatar radius={130} img={data.avatar} />
            <h1 className="text-3xl font-bold my-4">{data.name}</h1>
            <Tags name="New Staff" color="green" />
            <div className="mt-4">
              <Primary name="Add New Appointment" />
            </div>
            <div className="mt-12 w-full">
              <DisabledInputWithLabel text={data.email} label="email" />
            </div>
            <div className="mt-4 w-full">
              <DisabledInputWithLabel text={data.gender} label="gender" />
            </div>
            <div className="mt-4 w-full">
              <DisabledInputWithLabel
                text="Allows Marketing Notification"
                label="Alerts"
              />
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Profile;
