const Table: React.FC = () => {
  const styles = {
    body: `bg-white w-full flex`,
  }
  return (
    <div className={styles.body}>
      <div className="w-2/3">
        Hello
      </div>
      <div className="w-1/3">
        World
      </div>
    </div>
  )
}

export default Table