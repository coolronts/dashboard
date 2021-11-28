import Avatar from "../../../Components/Avatar"
import Card from "../../../Components/Card"
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
          <div className="flex flex-col items-center font-sans">
            <Avatar radius={130} img={data.avatar}/>
            <h1 className="text-3xl font-bold mt-4">
              {data.name}
            </h1>
          </div>
        }/>)
      }
    </div>
  )
}

export default Profile