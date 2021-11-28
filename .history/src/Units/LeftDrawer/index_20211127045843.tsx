import { Calendar, Clients, Overview, Services, Settings, Staff } from '../../Components/Icons'

import Logo from '../../Components/Logo'

const LeftDrawer: React.FC = () => {
  const icons = [Overview, Calendar, Clients, Services, Settings, Staff]
  return (
    <div>
      {icons.map((icon, index) => {
        return <Logo Icon={icon} name={icon.name} color={icon.color} key={index} />
      })}
      
    </div>
  )
  
}

export default LeftDrawer