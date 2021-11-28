import { Calendar, Clients, Overview, Services, Settings, Staff } from '../../Components/Icons'

import Logo from '../../Components/Logo'

const LeftDrawer: React.FC = () => {
  const icons = [
    { Icon: <Overview />, name: 'overview', color: 'blue' },
    { Icon: <Calendar />, name: 'calendar', color: 'green' },
    { Icon: <Clients />, name: 'clients', color: 'orange' },
    { Icon: <Staff />, name: 'staff', color: 'red' },
    { Icon: <Services />, name: 'services', color: 'purple' },
    { Icon: <Settings />, name: 'settings', color: 'yellow' },
  ]
    
  return (
    <div className="flex flex-col">
      {icons.map((icon, index) => {
      <Logo Icon={icon} name={icon.name} color={icon.color}  />
      })}
      
    </div>
  )
  
}

export default LeftDrawer