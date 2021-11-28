import {Left, Right} from '../../Units/Home/Section'

import SplitScreen from '../../Components/SplitScreen'

const Overview: React.FC = () => {
  return (
    <div className="mt-6">
      <SplitScreen leftWeight="w-2/3" rightWeight="flex-grow" >
        <Left/>
        <Right/>
      </SplitScreen>
    </div>
  )
}

export default Overview
