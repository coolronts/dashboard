import { ArrowDown } from "../Icons";

interface DropDownProps {
  items: string[];
}

const DropDown: React.FC<DropDownProps> = ({ items }) => {
  const styles = {
    body: "bg-white px-3 py-2 w-48 flex justify-between items-center shadow rounded-2xl text-gray-400",
    icon: "text-2xl p-1 bg-gray-200 rounded-full font-bold hover:bg-gray-300 hover:text-gray-600 cursor-pointer",
    optionsBody: "bg-gray-300",
  };
  return (
    <div className={styles.body}>
      <p>{items[0]}</p>
      <div className={styles.icon}>
        <ArrowDown />
      </div>
      <div className={styles.optionsBody}>
        {items.map((item) => (
          <p key={item} className="px-4 py-2 text-gray-600 hover:bg-gray-200 hover:text-gray-600 cursor-pointer">
        )}
      </div>
    </div>
  );
};

export default DropDown;
