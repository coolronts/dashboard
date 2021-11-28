import Avatar from '../../../Components/Avatar'
import {Notification} from '../../../Components/Buttons'
import {Notifications} from '../../../Components/Icons'
import TextBox from '../../../Components/TextBox'
import { useParams } from 'react-router'

const SectionHeader: React.FC = () => {
  const styles = {
    body: "flex justify-between mt-12",
    heading: "text-3xl text-gray-800 font-bold",
    leftComponent: "flex items-center justify-around"
  }
  let params = useParams()
  console.log(params)
  return (
    <>
      <div className={styles.body}>
        <h1 className={styles.heading}>Overview</h1>
        <div className={styles.leftComponent}>
          <TextBox />
          <Notification Icon={<Notifications />} />
          <Avatar />
        </div>
      </div>
      <hr className="bg-gray-300 h-1 my-3" />
    </>
  )
}

export default SectionHeader