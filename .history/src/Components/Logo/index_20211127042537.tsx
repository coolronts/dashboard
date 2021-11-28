import React from 'react';

interface IconProps {
  Icon?: React.ReactNode;
}


const Logo: React.FC<IconProps> = ({Icon}) => {
  return (
    <>
      <Icon/>
    </>
  )
}

export default Logo