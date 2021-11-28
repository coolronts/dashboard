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
        Helllo World
      </div>
    } />
  )
  
}

export default TopService