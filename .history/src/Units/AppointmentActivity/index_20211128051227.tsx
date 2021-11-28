import Card from '../../Components/Card'
import MultiLine from '../../Components/Charts/MultiLine'

const AppointmentActivity: React.FC = () => {
  return (
    <div>
      <Card Element={
        <div className="">
          <p>AppointmentActivity</p>
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