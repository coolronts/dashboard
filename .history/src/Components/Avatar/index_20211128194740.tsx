interface AvatarProps {
  img?: string;
  radius?: number;
}
const imgLink="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"

const Avatar: React.FC<AvatarProps> = ({ img = imgLink, radius = 50 }) => {
  const styles = {
    avatar:`inline-block rounded-full cursor-pointer`
  }
  return (
    <div>
      <img
        style={{width:radius, height:radius}}
        className={styles.avatar}
        src={img}
        alt=""
      />
    </div>
  )
}

export default Avatar
