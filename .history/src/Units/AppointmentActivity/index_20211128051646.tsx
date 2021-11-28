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
            <div className="flex text-md text-gray-400 pt-1">
              <p>Last 30 days</p>
              <div></div>
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