import React from 'react';

interface IconProps {
  Icon: React.ReactNode;
  name:string
}


const Logo: React.FC<IconProps> = ({ Icon,name }) => {
  const styles = {
    body:"bg-white opacity-60 text-4xl px-0 py-4 bg-white ring-2 ring-gray-300 w-20 rounded-xl text-center",
    name:"capitalize text-sm text-gray-800"
  }
  return (
    <div className={styles.body}>
      <div className="mx-auto"> {Icon} </div> 
      <p  className={styles.name}> {name} </p>
    </div>
  )
}

export default Logo