import Avatar from '../../Components/Avatar'
import generator from '../../Utils/avatar'

var faker = require('faker')
const n = 8; // number of rows

interface TableProps {
  data: object[],
  rowElement: React.ReactNode,
}

const Table: React.FC<TableProps> = ({data, RowElement}) => {
  const styles = {
    body: `bg-white w-full divide-solid divide-y divide-opacity-40 divide-gray-300 text-gray-700`,
    row: `flex text-md items-center font-semibold font-sans tracking-tight py-2`
  }
  
  return (
    <div className={styles.body}>
      {[...Array(n)].map((_, i) => (
        <div className={styles.row}>
          <div className="w-2/3 flex items-center">
            <Avatar img={generator.generateRandomAvatar()}/>
          <p className="ml-2">{faker.name.findName()}</p>  
          </div>
          <div className="w-1/3 text-right">
            <p className="">Nok {faker.commerce.price()}</p> 
          </div>
        </div>
      ))}
    </div>
  )
}

export default Table