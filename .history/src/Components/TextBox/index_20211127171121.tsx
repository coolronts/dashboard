import {Search} from '../Icons'

const TextBox: React.FC = () => {
  const styles = {
    body: "relative",
    textBox: "bg-gray-200 w-64 rounded-3xl py-2 px-3",
    searchIcon: "absolute right-2 top-3 text-xl"
  }
  
  return (
    <div className={styles.body}>
      <input className={styles.textBox} type="text" />
      <Search className={styles.searchIcon}/>
      
    </div>
  )
}

export default TextBox