import Card from '../../Components/Card'
import MultiLine from '../../Components/Charts/MultiLine'

const RecentSales: React.FC = () => {
  return (
    <div className="mb-6">
      <Card Element={
        <div className=" mb-4 font-semibold font-sans capitalize">
          <div className="px-6 mb-3">
            <div className="flex justify-between text-md text-gray-400 pt-1 items-center">
              <div>
                <p className="tracking-tighter text-xl text-gray-700">Appointments Activity</p>
                <p>Last 30 days</p>
              </div>
              <div className="flex opacity-50">
                {days.map((item, i) => <p key={i} className="px-2 py-1 ring-1 ring-gray-300 cursor-pointer hover:shadow-lg shadow  text-gray-700 bg-gray-100 ml-4 rounded text-md font-semibold font-sans tracking-tight">{item}</p>)}
              </div>
            </div>
          </div>
          <div >
            hd
          </div>
        </div>
        }
      } />
    
    </div>
  )
}

export default RecentSales