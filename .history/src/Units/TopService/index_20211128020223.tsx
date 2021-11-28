import Card from '../../Components/Card'
import createRandomData from '../../api/TopStaff'
import { useState } from 'react'

interface dataProps {
  position: string,
  price: number
}
const TopService: React.FC = () => {
  const [data, setData] = useState<dataProps[]>([])
  return (
    <Card size="sm" Element={
      <div className="px-6">
        <div className="px-1 mb-4 font-semibold font-sans capitalize">
          <p className="tracking-tighter text-xl text-gray-700">Top Service</p>
          <p className="text-md text-gray-400 pt-1">Current month</p> 
        </div>
      </div>
    }/>
  ) 
}

export default TopService