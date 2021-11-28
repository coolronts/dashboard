interface CardProps {
  size?: string;
}

const Card: React.FC<CardProps> = ({ size }) => {
  const styles = {
    body: 'bg-white px-8 rounded-tr-3xl py-8',
  }
  return (
    <div className={styles.body}>
      jd
    </div>
  )
}

export default Card