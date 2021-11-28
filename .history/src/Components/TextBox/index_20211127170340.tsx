const TextBox: React.FC = () => {
  const styles = {
    textBox: "bg-white px-8 rounded-tr-3xl py-8",
  }
  
  return (
    <div>
      <input className={styles.input} type="search"/>
    </div>
  )
}

export default TextBox