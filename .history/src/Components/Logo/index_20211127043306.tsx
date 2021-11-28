import React from 'react';

interface IconProps {
  Icon?: React.ReactNode;
}


const Logo: React.FC<IconProps> = ({ Icon }) => {
  const styles = {
    body:"bg-white opacity-60 text-4xl px-3 py-6 bg-white ring-2 w-20"
  }
  return (
    <div className={styles.body}>
      {Icon}
    </div>
  )
}

export default Logo