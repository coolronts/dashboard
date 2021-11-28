import Avatar from "../../../Components/Avatar"
import Card from "../../../Components/Card"

const Profile: React.FC = () => {
  return (
    <div className="pr-16">
      <Card Element={
        <div className="flex flex-col items-center">
          <Avatar radius={64} />
          <h1 className="text-xl font-bold mt-4">
            John Doe
          </h1>
        </div>
      } />
          
      }>
      Hello
    </div>
  )
}

export default Profile