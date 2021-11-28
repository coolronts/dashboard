import { ReactNode } from "react"

interface CardProps {
  size?: string;
  Element: ReactNode
}

const Card: React.FC<CardProps> = ({ size, Element}) => {
  const styles = {
    body: `bg-white p-2 rounded-2xl shadow ${size==='sm' ? 'w-1/2': 'w-full'}` ,
  }
  return (
    <div className={styles.body}>
      {Element}
    </div>
  )
}

export default Card