import {useEffect, useState} from 'react'

import Avatar from '../../Components/Avatar'
import Card from '../../Components/Card'
import Table from '../../Components/Table'
import createRandomData from '../../api/TopService'

interface dataProps {
  avatar: string,
  name: string,
  price: number
}
const TopServices: React.FC = () => {
  const [data, setData] = useState<dataProps[]>([])
  
  createRandomData(8)
  .then(response => {
    setData(response)
  })
  
  const styles = {
    row: `flex text-md items-center font-semibold font-sans tracking-tight py-2`
  }
  return (
    <div>
      <Card size="sm" Element={
        <div className="px-6">
          <div className="px-1 mb-4 font-semibold font-sans capitalize">
            <p className="tracking-tighter text-xl text-gray-700">Top Staff</p>
            <p className="text-md text-gray-400 pt-1">Current month</p> 
          </div>

          <Table>
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
          </Table>
        </div>
      } />
    </div>
  )
}

export default TopServices