const Table: React.FC = () => {
  const styles = {
    body: `bg-white w-full divide-solid divide-y-2 divide-opacity-40 divide-gray-300`,
    row: `flex text-lg font-semibold font-sans tracking-tight px-3 `
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
      <div className={styles.row}>
        <div className="w-2/3">
          Hello
        </div>
        <div className="w-1/3 text-right">
          World
        </div>
      </div>
      <div className={styles.row}>
        <div className="w-2/3">
          Hello
        </div>
        <div className="w-1/3 text-right">
          World
        </div>
      </div>
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