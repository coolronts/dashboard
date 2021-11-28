import Card from '../../../Components/Card'
import CardHeader from '../../../Components/CardHeader'
import createRandomData from '../../../api/Upcoming'
import {useState} from 'react'

interface dataProps {
  date: string,
  time: string,
  wage: number,
  price: number,
  meet : string,
}

const UpcomingAppointments: React.FC = () => {
  const [data, setData] = useState<dataProps[]>([])
  const styles = {
    table: `bg-white w-full divide-solid divide-y-2 divide-opacity-60 divide-gray-300 text-gray-700`,
    row: `flex text-sm items-center font-semibold font-sans tracking-tight py-2`
  }
  
  if (data.length === 0) {
    createRandomData(5)
    .then(response => setData(response))
  }
  return (
    <div>
      <Card  Element={
        <div className="px-2">
          <CardHeader title="Top Service" subtitle="Current month" />
        </div>
      }/>
    </div>
  )
}

export default UpcomingAppointments