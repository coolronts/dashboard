import {Notifiacations} from '../../Components/Icons'
import {Notification} from '../../Components/Buttons'
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
        <Notification Icon={Notifiacations}/>
      </div>
    </div>
  )
}

export default SectionHeader