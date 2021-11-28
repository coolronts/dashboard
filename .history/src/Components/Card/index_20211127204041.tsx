import { ReactNode } from "react"

interface CardProps {
  size?: string;
  Element: ReactNode
}

const Card: React.FC<CardProps> = ({ size, Element}) => {
  const styles = {
    body: 'bg-white px-8 rounded-tr-3xl py-8',
  }
  return (
    <div className={styles.body}>
      {Element}
    </div>
  )
}

export default Card