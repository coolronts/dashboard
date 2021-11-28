import LeftDrawer from '../../Units/LeftDrawer'

export default function Home() {
  const styles = {
    leftDrawer: 'bg-white px-8 rounded-tr-3xl py-8',
  }
  return (
    <div className="flex ">
      <div className={styles.leftDrawer}>
        <LeftDrawer/>
      </div>
    </div>
  )
}
