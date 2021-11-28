import Card from '../../../Components/Card'
import CardHeader from '../../../Components/CardHeader'
import createRandomData from '../../../api/TopStaff'
import {useState} from 'react'

const UpcomingAppointments: React.FC = () => {
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