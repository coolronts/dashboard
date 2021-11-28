import { ArrowUpRight } from '../Icons'
import BarChart from '../Charts/BarChart'
import Card from '../Card'

const BarDashBoard: React.FC = () => {
  return (
    <div className="w-full">
      <Card Element={
        <div className="font-semibold font-sans capitalize">
          <div className="px-1 ">
            <div className="flex justify-between text-md text-gray-400 items-center">
              <div className="text-left font-sans w-1/3">
                <p className="text-6xl font-semibold text-yellow-500">5</p>
                <p className="text-gray-600 my-1">Total Cancelled</p>
                <p className="flex items-center">
                  <div className="bg-gray-400 rounded-full p-1 mr-1"><ArrowUpRight className="text-white text-lg font-bold" /></div>
                35.65%</p>
              </div>
              <BarChart />
            </div>
          </div>
        </div>
       } />
    </div>
  )
}

export default BarDashBoard