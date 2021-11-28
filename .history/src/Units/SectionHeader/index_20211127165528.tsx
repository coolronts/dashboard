const SectionHeader: React.FC = () => {
  const styles = {
    heading:"text-3xl text-gray-800 font-bold"
  }
  return (
    <div>
      <h1 className={styles.heading}>Overview</h1>
    </div>
  )
}

export default SectionHeader