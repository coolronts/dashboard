import Card from '../../../Components/Card'
import CardHeader from '../../../Components/CardHeader'
import createRandomData from '../../../api/TopStaff'
import {useState} from 'react'

interface dataProps {
  date: string,
  time: string,
  wage: number,
  price: number,
  meet : string,
}

const UpcomingAppointments: React.FC = ({date,time,wage,price,meet}) => {
  return (
    <div>sa</div>
  )
}

export default UpcomingAppointments