import { Calendar, Clients, Overview, Services, Settings, Staff } from '../../../Components/Icons'

import {CompanyLogo} from '../../../Components/Icons'
import Logo from '../../../Components/Logo'

const LeftDrawer: React.FC = () => {
  const styles = {
    CompanyLogo: "text-5xl text-blue-900 w-full mb-12",
    menu: "flex flex-col justify-between bg-blue.primary"
  }
  const icons = [
    { Icon: <Overview />, name: 'overview', color: 'blue', active: true },
    { Icon: <Calendar />, name: 'calendar', color: 'green', active: false },
    { Icon: <Clients />, name: 'clients', color: 'indigo', active: false  },
    { Icon: <Staff />, name: 'staff', color: 'red', active: false  },
    { Icon: <Services />, name: 'services', color: 'purple', active: false  },
    { Icon: <Settings />, name: 'settings', color: 'gray', active: false  },
  ]
    
  return (
    <div className="m-auto">
      <CompanyLogo className={styles.CompanyLogo}/>
      <div className={styles.menu}>
        {icons.map((icon, index) =>  <Logo Icon={icon.Icon} name={icon.name} color={icon.color} key={index} active={icon.active} />)}
      </div>
    </div>
  )
  
}

export default LeftDrawer