import Card from '../../Components/Card'
import createRandomData from '../../api/TopService'
import { useState } from 'react'

interface dataProps {
  avatar: string,
  name: string,
  price: number
}
const TopService: React.FC = () => {
  return (
    <Card size="sm" Element={
      <div className="px-6">
        <div className="px-1 mb-4 font-semibold font-sans capitalize">
          <p className="tracking-tighter text-xl text-gray-700">Top Staff</p>
          <p className="text-md text-gray-400 pt-1">Current month</p> 
        </div>
      </div>
    }/>
  )
  
}

export default TopService