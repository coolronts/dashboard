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
  const leftElement = (
    <>
      <Avatar img={data.avatar} />
      <p className="ml-2">{faker.name.findName()}</p>
    </>
  )

const rightElement = (<p className="">Nok {faker.commerce.price()}</p>)
  createRandomData(8)
  .then(response => {
    setData(response)
  })
  
  useEffect(() => { }, [data])
  
  const styles = {
    leftDrawer: 'bg-white px-8 rounded-tr-3xl py-8',
  }
  return (
    <div>
      <Card size="sm" Element={
        <div className="px-6">
          <div className="px-1 mb-4 font-semibold font-sans capitalize">
            <p className="tracking-tighter text-xl text-gray-700">Top Staff</p>
            <p className="text-md text-gray-400 pt-1">Current month</p> 
          </div>
          <Table
            noOfRows={10}
            leftElement={leftElement}
            rightElement={rightElement }
          />
        </div>
      } />
    </div>
  )
}

export default TopServices