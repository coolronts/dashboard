import Avatar from '../../Components/Avatar'
import Card from '../../Components/Card'
import Table from '../../Components/Table'
import generator from '../../Utils/avatar'

var faker = require('faker')
const n = 8; // number of rows

const TopServices: React.FC = () => {
  const styles = {
    leftDrawer: 'bg-white px-8 rounded-tr-3xl py-8',
  }
  return (
    <div>
      <Card size="sm" Element={
        <div className="px-6">
          <div className="px-1 mb-4 font-semibold font-sans capitalize">
            <p className="tracking-tighter text-xl text-gray-700">Top Staff</p>
            <p className="text-md text-gray-400 pt-1">Current month</p> 
          </div>
          <Table
            noOfRows={10}
            leftElement={<><Avatar img={generator.generateRandomAvatar()}/>
            <p className="ml-2">{faker.name.findName()}</p></>}
          />
        </div>
      } />
    </div>
  )
}

export default TopServices