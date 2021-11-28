interface dataProps {
  color: string,
  name: string,
}

const Tags: React.FC<dataProps> = ({ color, name }) => {
  const styles = {
    body: `bg-${color}-100 text-${color}-300 ring-2 ring-${color}-300 `
  }
  return(
    <div className={styles.body}>
      {name}
    </div>
  )
}
export default Tags