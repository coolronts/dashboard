import { CancelledAppointments, CountrySales, UpcomingAppointments } from "../../index"

const Right: React.FC = () => {
  return (
    <div >
      <UpcomingAppointments />
      <CountrySales />
      <CancelledAppointments />
    </div>
  )
}

export default Right