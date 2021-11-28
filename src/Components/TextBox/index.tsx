import {Search} from '../Icons'

const TextBox: React.FC = () => {
  const styles = {
    body: "relative",
    textBox: "bg-gray-200 w-64 rounded-lg py-3 px-4 font-semibold text-sm focus:ring-2 ring-gray-600 outline-none",
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