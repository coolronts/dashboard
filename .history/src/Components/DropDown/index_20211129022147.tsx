import { ArrowDown } from "../Icons";

interface DropDownProps {
  items: string[];
}

const DropDown: React.FC<DropDownProps> = ({ items }) => {
  const styles = {
    body: "bg-white px-3 py-2 w-24 flex justify-center items-center shadow rounded-2xl text-gray-400",
  };
  return (
    <div className={styles.body}>
      <p>{items[0]}</p>;
      <ArrowDown />
    </div>
  );
};

export default DropDown;
