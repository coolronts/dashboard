interface dataProps {
  color: string,
  name: string,
}

const Tags: React.FC<dataProps> = ({ color, name }) => {
  const styles = {
    body: `bg-${color}-100 text-${color}-300 ring-2 ring-${color}-300 rounded-xl px-8 py-1 text-sm font-semibold font-sans`
  }
  return(
    <div className={styles.body}>
      {name}
    </div>
  )
}
export default Tags