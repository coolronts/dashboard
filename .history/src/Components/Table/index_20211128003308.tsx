import Avatar from '../../Components/Avatar'
import generator from '../../Utils/avatar'

var faker = require('faker')
const n = 8; // number of rows

interface TableProps {
  noOfRows: number,
  leftElement: React.ReactNode,
  rightElement: React.ReactNode,
}

const Table: React.FC<TableProps> = ({noOfRows, leftElement, rightElement}) => {
  const styles = {
    body: `bg-white w-full divide-solid divide-y divide-opacity-40 divide-gray-300 text-gray-700`,
    row: `flex text-md items-center font-semibold font-sans tracking-tight py-2`
  }
  
  return (
    <div className={styles.body}>
      {[...Array(n)].map((_, i) => (
        <div className={styles.row} key={i}>
          <div className="w-2/3 flex items-center">
            {leftElement}
          </div>
          <div className="w-1/3 text-right">
            {rightElement}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Table