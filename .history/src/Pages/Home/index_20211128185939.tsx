import {Left, Right} from '../../Units/Home/Section'

import  {SectionHeader} from '../../Units/Shared'
import SplitScreen from '../../Components/SplitScreen'

const Home: React.FC = () => {
  return (
    <div className="mt-12">
      <SplitScreen leftWeight="w-2/3" rightWeight="flex-grow" >
        <Left/>
        <Right/>
      </SplitScreen>
    </div>
  )
}

export default Home
