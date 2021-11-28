import BarDashboard from '../../../Components/BarDashBoard';

const ThreeSmallDashBoards: React.FC = () => {
  return (
    <div className="w-full flex justify-between">
      <BarDashboard />
      <BarDashboard />
      <BarDashboard />
    </div>
  )
}

export default ThreeSmallDashBoards