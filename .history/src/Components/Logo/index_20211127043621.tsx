import React from 'react';

interface IconProps {
  Icon: React.ReactNode;
  name:string
}


const Logo: React.FC<IconProps> = ({ Icon,name }) => {
  const styles = {
    body:"bg-white opacity-60 text-4xl px-3 py-6 bg-white ring-2 ring-gray-300 w-20 rounded-xl flex justify-center"
  }
  return (
    <div className={styles.body}>
      {Icon}
      <p> {name} </p>
    </div>
  )
}

export default Logo