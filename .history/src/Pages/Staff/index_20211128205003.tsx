import {Left, Right} from '../../Units/Staff/Section'

import SplitScreen from '../../Components/SplitScreen'

const Staff: React.FC = () => {
  return (
    <div className="mt-12">
      <hr className="bg-gray-300 h-1 my-6" />
      <SplitScreen leftWeight="w-1/3" rightWeight="flex-grow" >
        <Left/>
        <Right/>
      </SplitScreen>
    </div>
  )
}

export default Staff
