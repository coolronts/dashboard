import Card from '../../Components/Card'
import MultiLine from '../../Components/Charts/MultiLine'

const AppointmentActivity: React.FC = () => {
  const days = ["All-Time","Last 7 Days","Last 30 Days"]
  return (
    <div>
      <Card Element={
        <div className=" mb-4 font-semibold font-sans capitalize">
          <div className="px-6">
            <p className="tracking-tighter text-xl text-gray-700">AppointmentActivity</p>
            <div className="flex justify-between text-md text-gray-400 pt-1">
              <p>Last 30 days</p>
              <div className="flex">
                {days.map((item, i) => <p key={i} className="px-2 py-1 ring-1 ring-gray-300 cursor-pointer hover:shadow-lg shadow  text-gray-700 bg-gray-100 ml-4 rounded text-sm font-semibold font-sans tracking-tight">{item}</p>)}
              </div>
            </div>
          </div>
          <MultiLine />
        </div>
        }
      />
      
    </div>
  )
}

export default AppointmentActivity