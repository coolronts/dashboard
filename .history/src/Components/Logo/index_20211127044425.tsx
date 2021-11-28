import React from 'react';

interface IconProps {
  Icon: React.ReactNode;
  name:string
}


const Logo: React.FC<IconProps> = ({ Icon,name }) => {
  const styles = {
    body:"bg-white text-4xl px-4 py-4 bg-white ring-2 ring-gray-300 w-20 rounded-xl flex flex-col items-center justify-around",
    name: "capitalize text-sm text-gray-800 font-semibold mt-4",
    icon:"rounded-full p-3 bg-blue-100 text-blue-900"
  }
  return (
    <div className={styles.body}>
      <div className={styles.icon}> {Icon} </div> 
      <p  className={styles.name}> {name} </p>
    </div>
  )
}

export default Logo