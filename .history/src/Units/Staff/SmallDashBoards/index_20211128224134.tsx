import BarDashboard from '../../../Components/BarDashBoard';

const ThreeSmallDashBoards: React.FC = () => {
  return (
    <div className="w-full flex">
      <div className="mr-1 w-full">
        <BarDashboard />
      </div>
      <div className="mr-1">
        <BarDashboard />
      </div>
      <div className="mr-1">
        <BarDashboard />
      </div>
    </div>
  )
}

export default ThreeSmallDashBoards