import {AppointmentActivity, RecentSales, TopService, TopStaff} from '../../index'

const Left: React.FC = () => {
  return (
    <div className="pr-24">
      <RecentSales />
      <AppointmentActivity />
      <div className="w-full flex justify-between my-8">
        <TopStaff />
        <div className="w-4"/>
        <TopService />
      </div>
    </div>
  )
}

export default Left