import Avatar from '../../Components/Avatar'
import {Notification} from '../../Components/Buttons'
import {Notifications} from '../../Components/Icons'
import TextBox from '../../Components/TextBox'

const SectionHeader: React.FC = () => {
  const styles = {
    heading: "text-3xl text-gray-800 font-bold",
    body: "flex justify-between",
    leftComponent: "flex items-center justify-around"
  }
  return (
    <div className={styles.body}>
      <h1 className={styles.heading}>Overview</h1>
      <div className={styles.leftComponent}>
        <TextBox />
        <Notification Icon={<Notifications />} />
        <Avatar />
      </div>
    </div>
  )
}

export default SectionHeader