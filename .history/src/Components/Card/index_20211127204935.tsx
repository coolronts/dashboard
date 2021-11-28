import { ReactNode } from "react"

interface CardProps {
  size?: string;
  Element: ReactNode
}

const Card: React.FC<CardProps> = ({ size, Element}) => {
  const styles = {
    body: `bg-white p-2 rounded-2xl shadow border-2 border-gray-600` ,
  }
  return (
    <div className={styles.body}>
      {Element}
    </div>
  )
}

export default Card