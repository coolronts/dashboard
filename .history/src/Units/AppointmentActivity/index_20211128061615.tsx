import Card from '../../Components/Card'
import MultiLine from '../../Components/Charts/MultiLine'
import {useState} from 'react'

const AppointmentActivity: React.FC = () => {
  const days = ["All-Time", "Last 7 Days", "Last 30 Days"]
  const [optionsDays, setOptionsDays] = useState(2)
  const handleDays = (i: number) => {setOptionsDays(i)} 
  return (
    <div>
      <Card Element={
        <div className=" mb-4 font-semibold font-sans capitalize">
          <div className="px-6 mb-3">
            <div className="flex justify-between text-md text-gray-400 pt-1 items-center">
              <div>
                <p className="tracking-tighter text-xl text-gray-700">Appointments Activity</p>
                <p>Last 30 days</p>
              </div>
              <div className="flex opacity-50">
                {days.map((item, i) => <p key={i} onClick={() =>handleDays(i)} className= {`${optionsDays===i ? 'bg-gray-100':'bg-transparent shadow-none' } px-2 py-1 ring-1 ring-gray-300 cursor-pointer hover:shadow-lg shadow  text-gray-700 ml-4 rounded text-md font-semibold font-sans tracking-tight`}>{item}</p>)}
              </div>
            </div>
          </div>
          <div className=" h-1/3">
            <MultiLine />
          </div>
        </div>
        }
      />
    </div>
  )
}

export default AppointmentActivity