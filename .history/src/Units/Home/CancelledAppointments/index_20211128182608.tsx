import { ArrowUpRight } from '../../../Components/Icons'
import BarChart from '../../../Components/Charts/BarChart'
import Card from '../../../Components/Card'

const CancelledAppointments: React.FC = () => {
  return (
    <div>
      <Card Element={
        <div className=" mb-4 font-semibold font-sans capitalize">
          <div className="px-6 mb-3">
            <div className="flex justify-between text-md text-gray-400 pt-1 items-center">
              <div className="text-left">
                <p className="text-5xl text-yellow-600 mb-2">5</p>
                <p className="text-gray-600 mb-2">Total Cancelled</p>
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

export default CancelledAppointments