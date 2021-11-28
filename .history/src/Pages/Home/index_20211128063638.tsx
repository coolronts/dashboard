import {AppointmentActivity, RecentSales, SectionHeader, TopService, TopStaff} from '../../Units/Home'

import LeftDrawer from '../../Units/LeftDrawer'
import SplitScreen from '../../Components/SplitScreen'

const Home: React.FC = () => {
  const styles = {
    leftDrawer: 'bg-white px-8 rounded-tr-3xl py-8',
  }
  return (
    <div className="flex">
      <div className={styles.leftDrawer}>
        <LeftDrawer/>
      </div>
      <div className="flex-1 mx-6 mt-12">
        <SectionHeader />
        <hr className="bg-gray-300 h-1 my-6" />
        <SplitScreen leftWeight="w-2/3" rightWeight="w-1/3" >
          <div className="pr-24">
            <RecentSales />
            <AppointmentActivity />
            <div className="w-full flex justify-between my-8">
              <TopStaff />
              <div className="w-4"/>
              <TopService />
            </div>
          </div>
          <div>
            World
          </div>
        </SplitScreen>
      </div>
    </div>
  )
}

export default Home
