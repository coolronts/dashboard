interface DropDownProps {
  items: string[];
}

const DropDown: React.FC<DropDownProps> = ({ items }) => {
  const styles = {
    body: "bg-white px-3 shadow",
  };
  return (
    <div className={styles.body}>
      <div></div>
      {items[0]}
    </div>
  );
};

export default DropDown;
