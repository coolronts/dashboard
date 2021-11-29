import { ArrowDown } from "../Icons";

interface DropDownProps {
  items: string[];
}

const DropDown: React.FC<DropDownProps> = ({ items }) => {
  const styles = {
    body: "bg-white px-3 py-2 w-48 flex justify-between items-center shadow rounded-2xl text-gray-400",
    icon: "text-2xl p-1 bg-gray-200 rounded-full font-bold",
  };
  return (
    <div className={styles.body}>
      <p>{items[0]}</p>
      <div className={styles.icon}>
        <ArrowDown />
      </div>
    </div>
  );
};

export default DropDown;
