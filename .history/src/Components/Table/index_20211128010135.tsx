import Avatar from '../../Components/Avatar'
import generator from '../../Utils/avatar'

var faker = require('faker')
const n = 8; // number of rows

interface TableProps {
  element: JSX.Element,
}

const Table: React.FC<TableProps> = ({children}) => {
  const styles = {
    body: `bg-white w-full divide-solid divide-y divide-opacity-40 divide-gray-300 text-gray-700`,
    row: `flex text-md items-center font-semibold font-sans tracking-tight py-2`
  }
  
  return (
    <div className={styles.body}>
      
    </div>
  )
}

export default Table