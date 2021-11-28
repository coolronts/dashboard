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
    createRandomData().then(res=>setData(res))
  }
  return (
    <div className="pr-16">
      <Card Element={
        <div className="flex flex-col items-center">
          <Avatar radius={130} img={data.avatar}/>
          <h1 className="text-xl font-bold mt-4">
            John Doe
          </h1>
        </div>
      } />
          
    
      Hello
    </div>
  )
}

export default Profile