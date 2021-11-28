import LeftDrawer from '../../Units/LeftDrawer'
import SectionHeader from '../../Units/SectionHeader'

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
        <hr className="bg-gray-100 h-1 my-6"/>
      </div>
      
    </div>
  )
}

export default Home
