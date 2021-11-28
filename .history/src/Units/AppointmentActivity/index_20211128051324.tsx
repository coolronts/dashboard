import Card from '../../Components/Card'
import MultiLine from '../../Components/Charts/MultiLine'

const AppointmentActivity: React.FC = () => {
  return (
    <div>
      <Card Element={
        <div className="px-1 mb-4 font-semibold font-sans capitalize">
          <p className="tracking-tighter text-xl text-gray-700">AppointmentActivity</p>
          <div className="flex">
            <p>Last 30 days</p>
            <div></div>
          </div>
          <MultiLine />
        </div>
        }
      />
      
    </div>
  )
}

export default AppointmentActivity