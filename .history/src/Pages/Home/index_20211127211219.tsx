import Card from '../../Components/Card'
import LeftDrawer from '../../Units/LeftDrawer'
import SectionHeader from '../../Units/SectionHeader'
import SplitScreen from '../../Components/SplitScreen'
import Table from '../../Components/Table'

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
        <SplitScreen leftWeight="w-2/3" >
          <Card size="sm" Element={
            <div className="px-6">
              <div className="px-2 tracking-tighter font-sans">
                <p className="font-bold capitalize text-2xl">Top Staff</p> 
              </div>
              <Table />
            </div>
          } />
          <div>World</div>
        </SplitScreen>

      </div>
    </div>
  )
}

export default Home
