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
    <div classNamee= "bg-white">
      <div className="flex flex-col justify-between bg-blue.primary">
        {icons.map((icon, index) =>  <Logo Icon={icon.Icon} name={icon.name} color={icon.color} key={index} />)}
      </div>
    </div>
  )
  
}

export default LeftDrawer