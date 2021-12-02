import { ArrowDown } from "../Icons";
import { useState } from "react";

interface DropDownProps {
  items: string[] | React.ReactNode[];
}

const DropDown: React.FC<DropDownProps> = ({ items }) => {
  const styles = {
    body: "bg-white relative px-3 py-2 shadow-xl rounded-2xl text-gray-400 ring-4 ring-white",
    icon: "text-2xl p-1 bg-gray-200 rounded-full font-bold hover:bg-gray-300 hover:text-gray-600 cursor-pointer",
    optionsBody: "absolute bg-red-100  rounded-b-xl divide-y-2 divide-gray-400",
    option:
      "px-4 py-2 text-gray-600 hover:bg-gray-200 hover:text-gray-600 cursor-pointer",
  };
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(items[0]);
  const handleClick = (i: number) => {
    setSelected(items[i]);
    setIsOpen(false);
  };
  const clickHandler = (e: React.MouseEvent) => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative w-80">
      <div className={styles.body}>
        <div className="filter drop-shadow-sm w-full h-full flex justify-between items-center ">
          <p>{selected}</p>
          <div className={styles.icon} onClick={(e) => clickHandler(e)}>
            <ArrowDown />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className={styles.optionsBody}
          style={{
            transform: "translate(-50%,2%)",
            width: "90%",
            left: "50%",
          }}
        >
          {items.map((item, index) => (
            <p
              key={index}
              className={styles.option}
              onClick={() => handleClick(index)}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
