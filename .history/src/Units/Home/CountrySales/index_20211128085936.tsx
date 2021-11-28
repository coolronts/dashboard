import Card from '../../../Components/Card'
import CardHeader from '../../../Components/CardHeader'
import Map from '../../../Components/Map'

const CountrySales: React.FC = () => {
  return(
    <div className="my-4">
      <Card Element={
        <div className="mb-4 font-semibold font-sans capitalize">
          <div className="px-6 mb-3">
            <div className="flex justify-between text-md text-gray-400 pt-1 items-center">
              <CardHeader title="Sales by Country" subtitle="Current month" />
            </div>
            <Map />
          </div>
        </div>
      }/>
    </div>
  )
}

export default CountrySales