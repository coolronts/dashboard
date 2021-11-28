import {Left, Right} from '../../Units/Staff/Section'

import SplitScreen from '../../Components/SplitScreen'

const Staff: React.FC = () => {
  return (
    <div className="mt-12">
      <SplitScreen leftWeight="w-2/5" rightWeight="flex-grow" >
        <Left/>
        <Right/>
      </SplitScreen>
    </div>
  )
}

export default Staff
