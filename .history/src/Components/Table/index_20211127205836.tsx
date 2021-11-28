const Table: React.FC = () => {
  const styles = {
    body: `bg-white w-full`,
    table: `flex`
  }
  return (
    <div className={styles.body}>
      <div className={styles.table}>
        <div className="w-2/3">
          Hello
        </div>
        <div className="w-1/3 text-right">
          World
        </div>
      </div>
    </div>
  )
}

export default Table