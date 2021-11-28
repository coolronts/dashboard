import BarDashboard from '../../../../Components/BarDashBoard';
import ThreeSmallDashBoards from '../../SmallDashBoards';

const Right: React.FC = () => {
  return (
    <div className="w-full flex justify-between" >
      <div className="mr-1">
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

export default Right