import {Search} from '../Icons'

const TextBox: React.FC = () => {
  const styles = {
    body: "relative",
    textBox: "bg-gray-200 w-64 rounded-3xl py-2",
  }
  
  return (
    <div className={styles.body}>
      <input className={styles.textBox} type="search" />
      <Search className="absolute right-0 top-2"/>
      
    </div>
  )
}

export default TextBox