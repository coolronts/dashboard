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