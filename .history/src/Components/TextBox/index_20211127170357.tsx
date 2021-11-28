const TextBox: React.FC = () => {
  const styles = {
    textBox: "bg-white px-8 rounded-3xl py-8",
  }
  
  return (
    <div>
      <input className={styles.textBox} type="search"/>
    </div>
  )
}

export default TextBox