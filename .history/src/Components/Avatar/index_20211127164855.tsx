interface AvatarProps {
  img?: string;
  radius?: number;
}



const Avatar: React.FC<AvatarProps> = ({ img, radius = 10 }) => {
  const styles = {
    avatar:`inline-block h-${radius} w-${radius} rounded-full ring-2 ring-white`
  }
  return (
    <div>
      <img
        className=""
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    </div>
  )
}

export default Avatar
