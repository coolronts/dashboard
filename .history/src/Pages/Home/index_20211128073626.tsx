import {Left, Right} from '../../Units/Home/Section'

import  {SectionHeader} from '../../Units/Shared'
import SplitScreen from '../../Components/SplitScreen'

const Home: React.FC = () => {
  return (
    <div className="mt-12">
      <SectionHeader />
      <hr className="bg-gray-300 h-1 my-6" />
      <SplitScreen leftWeight="w-2/3" rightWeight="w-full" >
        <Left/>
        <Right/>
      </SplitScreen>
    </div>
  )
}

export default Home
