import Avatar from "../../../Components/Avatar"
import Card from "../../../Components/Card"
import {DisabledInputWithLabel} from "../../../Components/InputBox"
import {Primary} from "../../../Components/Buttons"
import Tags from "../../../Components/Tags"
import createRandomData from "../../../api/Profile"
import { useState } from "react"

interface response{
  name: string,
  gender: string,
  email: string,
  avatar: string
}
const Profile: React.FC = () => {
  const [data, setData] = useState<response>()
  if (!data) {
    setData(createRandomData())
  }
  return (
    <div className="pr-16">
      {data != null && (
        <Card Element={
          <div className="flex flex-col items-center justify-center font-sans">
            <Avatar radius={130} img={data.avatar}/>
            <h1 className="text-3xl font-bold my-4">{data.name}</h1>
            <Tags name="New Staff" color="green" />
            <div className="mt-4">
              <Primary name="Add New Appointment" />
            </div>
            <div className="mt-4">
              <DisabledInputWithLabel text={data.email} label="email"/>
            </div>
            <div className="mt-4">
              <DisabledInputWithLabel text={data.gender} label="gender"/>
            </div>
            <div className="mt-4">
              <DisabledInputWithLabel text="Allows Marketing Notification" label="Alerts"/>
            </div>


          </div>
        }/>)
      }
    </div>
  )
}

export default Profile