import React from 'react';

interface IconProps {
  Icon?: React.ReactNode;
}


const Logo: React.FC<IconProps> = ({ Icon }) => {
  const styles = {
    body:"bg-white opacity-60"
  }
  return (
    <div className={styles.body}>
      {Icon}
    </div>
  )
}

export default Logo