import {ArrowRight} from '../Icons'
import React from 'react';

interface IconProps {
  Icon: React.ReactNode;
  name: string,
  color: string,
  active?: boolean
}


const Logo: React.FC<IconProps> = ({ Icon, name, color, active=false }) => {

  const styles = {
    body:`relative group my-4 text-2xl px-12 py-4 bg-white ring-2 ring-gray-300 w-20 rounded-2xl flex flex-col items-center justify-around hover:bg-blue-primary hover:shadow-2xl cursor-pointer ${active ? 'bg-blue-primary shadow-2xl' :'bg-white'}`,
    name: `${active ? 'text-white': 'text-gray-800' }group-hover:text-white capitalize text-sm font-semibold mt-4`,
    icon: `${active ? 'bg-blue-primary text-white': `bg-${color}-100 text-${color}-900`} rounded-full p-3 group-hover:bg-blue-primary group-hover:text-white ring-4 ring-white`,
    arrowRight: `${active?'text-blue-primary': 'text-transparent'} absolute -right-3 text-transparent`
  }
  return (
    <div className={styles.body}>
      <div className={styles.icon}> {Icon} </div> 
      <p className={styles.name}> {name} </p>
      <ArrowRight className={styles.arrowRight}/>
    </div>
  )
}

export default Logo