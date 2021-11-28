import TextBox from '../../Components/TextBox'

const SectionHeader: React.FC = () => {
  const styles = {
    heading: "text-3xl text-gray-800 font-bold flex justify-between",
    body:"flex"
  }
  return (
    <div className={styles.body}>
      <h1 className={styles.heading}>Overview</h1>
      <TextBox/>
    </div>
  )
}

export default SectionHeader