import Card from '../../../Components/Card'

const CancelledAppointments: React.FC = () => {
  return (
    <div>
      <Card Element={
        <div className=" mb-4 font-semibold font-sans capitalize">
          <div className="px-6 mb-3">
            <div className="flex justify-between text-md text-gray-400 pt-1 items-center">
              <div className="text-center">
                <p className="text-2xl text-yellow-600">5</p>
              </div>
            </div>
          </div>
        </div>
       } />
    </div>
  )
}

export default CancelledAppointments