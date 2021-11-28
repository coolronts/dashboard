import { ReactNode } from "react"

interface CardProps {
  size?: string;
  Element: ReactNode
}

const Card: React.FC<CardProps> = ({ size, Element}) => {
  const styles = {
    body: `bg-white px-2 py-6 rounded-2xl shadow ${size==='sm' ? 'w-3/6': 'w-full'}` ,
  }
  return (
    <div className={styles.body}>
      {Element}
    </div>
  )
}

export default Card