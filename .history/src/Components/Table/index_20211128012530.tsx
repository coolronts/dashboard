interface TableProps {
  children: React.ReactNode
}

const Table: React.FC<TableProps> = ({children}) => {
  const styles = {
    body: `bg-white w-full divide-solid divide-y divide-opacity-100 divide-gray-300 text-gray-700`,
  }
  
  return (
    <div className={styles.body}>
      {children}
    </div>
  )
}

export default Table