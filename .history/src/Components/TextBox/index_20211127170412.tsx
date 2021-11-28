const TextBox: React.FC = () => {
  const styles = {
    textBox: "bg-white w-12 rounded-3xl py-2",
  }
  
  return (
    <div>
      <input className={styles.textBox} type="search"/>
    </div>
  )
}

export default TextBox