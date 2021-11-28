import Card from "../../../Components/Card"
import Avatar from "../../../Components/Avatar"

const Profile: React.FC = () => {
  return (
    <div className="pr-16">
      <Card Element={
        <div className="flex flex-col items-center">
          <Avatar size="lg" />
          <h1 className="text-xl font-bold mt-4">
            John Doe
          </h1>
      } />
          
      }>
      Hello
    </div>
  )
}

export default Profile