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
      <div className="flex-1">
        <SectionHeader />
      </div>
    </div>
  )
}

export default Home
