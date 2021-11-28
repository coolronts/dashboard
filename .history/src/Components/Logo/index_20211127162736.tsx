import React from 'react';

interface IconProps {
  Icon: React.ReactNode;
  name: string,
  color:string
}


const Logo: React.FC<IconProps> = ({ Icon, name, color }) => {
  const styles = {
    body:`group my-4 bg-white text-2xl px-12 py-4 bg-white ring-2 ring-gray-300 w-20 rounded-2xl flex flex-col items-center justify-around hover:bg-blue-primary cursor-pointer`,
    name: "group-hover:text-white capitalize text-sm text-gray-800 font-semibold mt-4",
    icon: `rounded-full p-3 bg-${color}-100 text-${color}-900 group-hover:bg-blue-primary group-hover:text-white`,
  }
  return (
    <div className={styles.body}>
      <div className={styles.icon}> {Icon} </div> 
      <p  className={styles.name}> {name} </p>
    </div>
  )
}

export default Logo