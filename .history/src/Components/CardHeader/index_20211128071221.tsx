interface props{
  title: string;
  subtitle: string;
}

const CardHeader: React.FC = ({ title, subtitle }) => {
  return (
    <div>
      <p className="tracking-tighter text-xl text-gray-700">Appointments Activity</p>
      <p>Last 30 days</p>
    </div>
  )
}

export default CardHeader