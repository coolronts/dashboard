interface DropDownProps {
  items: string[];
}

const DropDown: React.FC<DropDownProps> = ({ items }) => {
  const styles = {
    body: "bg-white px-3 py-2 w-24 text-center shadow rounded-2xl",
  };
  return (
    <div className={styles.body}>
      <div></div>
      {items[0]}
    </div>
  );
};

export default DropDown;
