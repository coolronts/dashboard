import LeftDrawer from '../../Units/LeftDrawer'
import SectionHeader from '../../Units/SectionHeader'
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
        <SplitScreen >
          <div>Hello</div>
          <div>World</div>
        </SplitScreen>

      </div>
    </div>
  )
}

export default Home
