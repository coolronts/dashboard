const Table: React.FC = () => {
  const styles = {
    body: `bg-white w-full`,
    row: `flex border-2 border-b-gray-600`
  }
  return (
    <div className={styles.body}>
      <div className={styles.row}>
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