import  {LeftDrawer, SectionHeader} from '../../Units/Shared'

import {Left} from '../../Units/Home/Section'
import SplitScreen from '../../Components/SplitScreen'

const Home: React.FC = () => {
  const styles = {
    leftDrawer: 'bg-white px-8 rounded-tr-3xl py-8',
  }
  return (
  
      <div className="mt-12">
        <SectionHeader />
        <hr className="bg-gray-300 h-1 my-6" />
        <SplitScreen leftWeight="w-2/3" rightWeight="w-1/3" >
          <Left/>
          <div>
            World
          </div>
        </SplitScreen>
      </div>
  )
}

export default Home
