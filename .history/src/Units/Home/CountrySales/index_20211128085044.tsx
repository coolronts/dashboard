import Card from '../../../Components/Card'
import CardHeader from '../../../Components/CardHeader'

const CountrySales: React.FC = () => {
  return(
    <div>
      <Card Element={
        <div className="my-4 font-semibold font-sans capitalize">
          <div className="px-6 mb-3">
            <div className="flex justify-between text-md text-gray-400 pt-1 items-center">
              <CardHeader title="Appointment Activity" subtitle="Last 30 days" />
            </div>
          </div>
        </div>
      }/>
    </div>
  )
}

export default CountrySales