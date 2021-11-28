import { useEffect, useState } from 'react'

import Card from '../../Components/Card'
import createRandomData from '../../api/TopService'

interface dataProps {
  position: string,
  price: number
}
const TopService: React.FC = () => {
  const [data, setData] = useState<dataProps[]>([])
  const styles = {
    table: `bg-white w-full divide-solid divide-y-2 divide-opacity-60 divide-gray-300 text-gray-700`,
    row: `flex text-sm items-center font-semibold font-sans tracking-tight py-2 justify-between`
  }

  if (data.length === 0) {
    createRandomData(5)
      .then(response => setData(response))
  }
  useEffect(() => { }, [data])
  
  return (
    <Card size="sm" Element={
      <div className="px-6">
        <div className="px-1 mb-4 font-semibold font-sans capitalize">
          <p className="tracking-tighter text-xl text-gray-700">Top Service</p>
          <p className="text-md text-gray-400 pt-1">Current month</p> 
        </div>
        <div className={styles.table}>
          {data.map((item, i) => (
            <div className={styles.row} key={i}>
                <p>{item.position}</p>  
                <p>Nok {item.price}</p> 
            </div>
          ))}
        </div>
      </div>
    }/>
  ) 
}

export default TopService