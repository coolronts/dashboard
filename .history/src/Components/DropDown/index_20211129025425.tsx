import { EventHandler, useState } from "react";

import { ArrowDown } from "../Icons";

interface DropDownProps {
  items: string[];
}

const DropDown: React.FC<DropDownProps> = ({ items }) => {
  const styles = {
    body: "relative bg-white px-3 py-2 w-60 shadow rounded-2xl text-gray-400",
    icon: "text-2xl p-1 bg-gray-200 rounded-full font-bold hover:bg-gray-300 hover:text-gray-600 cursor-pointer",
    optionsBody:
      "bg-gray-300 w-48 absolute top-12 rounded-xl shadow divide-y-2 divide-gray-400 ",
    option:
      "px-4 py-2 text-gray-600 hover:bg-gray-200 hover:text-gray-600 cursor-pointer",
  };
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(items[0]);
  const handleClick = (e: React.MouseEvent) => {
    console.log(e.target);
  };
  const clickHandler = (e: React.MouseEvent) => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.body}>
      <div className="filter drop-shadow-sm w-full h-full flex justify-between items-center ">
        <p>{selected}</p>
        <div className={styles.icon} onClick={(e) => clickHandler(e)}>
          <ArrowDown />
        </div>
      </div>
      {isOpen && (
        <div className={styles.optionsBody}>
          {items.map((item) => (
            <p
              key={item}
              className={styles.option}
              onClick={(e) => clickHandler(e)}
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
