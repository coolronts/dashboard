import { useEffect, useState } from 'react'

import Card from '../../../Components/Card'
import CardHeader from '../../../Components/CardHeader'
import createRandomData from '../../../api/TopService'

interface dataProps {
  position: string,
  price: number
}
const TopService: React.FC = () => {
  const [data, setData] = useState<dataProps[]>([])
  const styles = {
    table: `bg-white w-full divide-solid divide-y-2 divide-opacity-60 divide-gray-300 text-gray-700`,
    row: `flex py-3 text-sm items-center font-semibold font-sans tracking-tight py-2 justify-between`
  }

  if (data.length === 0) {
    createRandomData(5)
      .then(response => setData(response))
  }
  useEffect(() => { }, [data])
  
  return (
    <Card size="sm" Element={
      <div className="px-2">
        <CardHeader title="Appointment Activity" subtitle="Last 30 days" />
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