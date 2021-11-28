import { Calendar, Clients, Overview, Services, Settings, Staff } from '../../Components/Icons'

import Logo from '../../Components/Logo'

const LeftDrawer: React.FC = () => {
  const icons = [
    { Icon: <Overview />, name: 'overview', color: 'blue' }
  
  ]
    
  return (
    <div className="flex flex-col">
      {icons.map((icon, index) =>  <Logo Icon={icon} name={icon.name} color={icon.color} />)}
      
    </div>
  )
  
}

export default LeftDrawer