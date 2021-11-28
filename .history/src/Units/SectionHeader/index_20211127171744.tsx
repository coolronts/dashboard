import {Notification} from '../../Components/Buttons'
import TextBox from '../../Components/TextBox'

const SectionHeader: React.FC = () => {
  const styles = {
    heading: "text-3xl text-gray-800 font-bold",
    body:"flex justify-between",
  }
  return (
    <div className={styles.body}>
      <h1 className={styles.heading}>Overview</h1>
      <div>
        <TextBox />
      </div>
    </div>
  )
}

export default SectionHeader