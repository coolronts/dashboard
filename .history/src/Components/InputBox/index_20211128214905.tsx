import {Search} from '../Icons'

const SearchBox: React.FC = () => {
  const styles = {
    body: "relative",
    textBox: "bg-gray-200 w-64 rounded-lg py-3 px-4 font-semibold text-sm focus:ring-2 ring-gray-600 outline-none",
    searchIcon: "absolute right-2 top-3 text-xl"
  }
  
  return (
    <div className={styles.body}>
      <input className={styles.textBox} type="text" placeholder="Search" />
      <Search className={styles.searchIcon}/>    
    </div>
  )
}

interface dataProps{
  name: string,
  active?: boolean
}

const DisabledInputWithLabel: React.FC<dataProps> = ({ name }) => {
  const styles = {
    body: "bg-gray-200 w-64 rounded-lg py-3 px-4 font-semibold text-sm focus:ring-2 ring-gray-600 outline-none",
    label: "text-gray-500",
    searchIcon: "absolute right-2 top-3 text-xl"
  }
  
  return (
    <div className={styles.body}>
      <p className={styles.label}>Email</p>
      <p > {name}</p>
    </div>
  )
}

export {DisabledInputWithLabel, SearchBox}