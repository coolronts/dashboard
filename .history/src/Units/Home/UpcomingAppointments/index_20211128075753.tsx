import Card from '../../../Components/Card'
import CardHeader from '../../../Components/CardHeader'
import createRandomData from '../../../api/Upcoming'
import {useState} from 'react'

interface dataProps {
  month: string,
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
      <Card  Element={
        <div className="px-2">
          <CardHeader title="Upcoming Appointments" subtitle="Current month" />
          <div className={styles.table}>
            {data.map((item, i) => (
              <div className={styles.row} key={i}>
                <div className="w-2/3 flex items-center">
                  <div className="text-center">
                    <p className="text-3xl text-gray-700">21</p>
                    <p className="text-gray-400">{item.month.substring(0,3)}</p>
                  </div>
                  <div className="text-center">
                    <p className="ml-6 text-base">{item.meet}</p>
                    <p className="text-gray-400 italic"> 12:00 - 13:00 </p>
                  </div>
                   
                </div>
                <div className="w-1/3 text-right">
                  <p className="">Nok {item.price}</p> 
                </div>
              </div>
            ))}
          </div>
        </div>
      }/>
  )
}

export default UpcomingAppointments