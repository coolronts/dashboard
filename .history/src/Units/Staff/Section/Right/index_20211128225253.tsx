import BarDashboard from '../../../../Components/BarDashBoard';

const Right: React.FC = () => {
  return (
    <div className="w-full flex justify-between" >
      <div className="mr-1">
        <BarDashboard color="#5DB1F8"/>
      </div>
      <div className="mr-1" color="#9568FF">
        <BarDashboard />
      </div>
      <div className="mr-1">
        <BarDashboard />
      </div>
    </div>
  )
}

export default Right