import Avatar from '../../Components/Avatar'
import Card from '../../Components/Card'
import createRandomData from '../../api/TopStaff'
import {useState} from 'react'

interface dataProps {
  avatar: string,
  name: string,
  price: number
}
const TopStaff: React.FC = () => {
  const [data, setData] = useState<dataProps[]>([])
  if (data.length === 0) {
    createRandomData(5)
    .then(response => setData(response))
  }
  
  const styles = {
    table: `bg-white w-full divide-solid divide-y-2 divide-opacity-60 divide-gray-300 text-gray-700`,
    row: `flex text-sm items-center font-semibold font-sans tracking-tight py-2`
  }
  return (
    <Card size="sm" Element={
      <div className="px-6">
        <div className="px-1 mb-4 font-semibold font-sans capitalize">
          <p className="tracking-tighter text-xl text-gray-700">Top Staff</p>
          <p className="text-md text-gray-400 pt-1">Current month</p> 
        </div>
        <div className={styles.table}>
          {data.map((item, i) => (
            <div className={styles.row} key={i}>
              <div className="w-2/3 flex items-center">
                <Avatar img={item.avatar}/>
                <p className="ml-2">{item.name}</p>  
              </div>
              <div className="w-1/3 text-right">
                <p className="">Nok {item.price}</p> 
              </div>
            </div>
          ))}
        </div>
      </div>
    } />
  )
}

export default TopStaff