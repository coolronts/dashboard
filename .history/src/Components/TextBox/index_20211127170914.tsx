import {Search} from '../Icons'

const TextBox: React.FC = () => {
  const styles = {
    body: "relative",
    textBox: "bg-gray-200 w-64 rounded-3xl py-2",
    searchIcon: "absolute right-2 top-3"
  }
  
  return (
    <div className={styles.body}>
      <input className={styles.textBox} type="search" />
      <Search className={styles.searchIcon}/>
      
    </div>
  )
}

export default TextBox