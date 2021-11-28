import AppointmentActivity from '../../Units/AppointmentActivity'
import LeftDrawer from '../../Units/LeftDrawer'
import SectionHeader from '../../Units/SectionHeader'
import SplitScreen from '../../Components/SplitScreen'
import TopService from '../../Units/TopService'
import TopStaff from '../../Units/TopStaff'

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
          <div className="px-12">
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
