import { useEffect, useState } from "react";

interface dataProps {
  options: string[];
  children: React.ReactNode[];
  isBox?: boolean;
  horizontalPosition?: "left" | "center" | "right";
}

const Tabs: React.FC<dataProps> = ({
  options,
  children,
  isBox = false,
  horizontalPosition = "left",
}) => {
  const styles = {
    tabs: `flex text-md text-gray-400 pt-1 items-center justify-${horizontalPosition}`,
    selected: "border-blue-500 font-bold text-gray-600",
    tab: "mr-12 px-4 border-b-4 hover:border-blue-500 border-transparent cursor-pointer",
    boxTab:
      "bg-transparent px-2 py-1 ring-1 ring-gray-300 cursor-pointer hover:shadow-lg shadow  text-gray-700 ml-4 rounded text-md font-semibold font-sans tracking-tight",
    boxSelected: "bg-gray-200",
  };

  const [selected, setSelected] = useState<string>(options[0]);
  const handleChoice = (option: string) => {
    setSelected(option);
  };
  if (options.length > 1 && children.length > 1) {
    if (children.length !== options.length) {
      throw new Error("Number of children must be equal to number of options");
    }
  }
  useEffect(() => {}, [selected]);
  return (
    <div>
      <div className={styles.tabs}>
        {!isBox &&
          options.map((option) => (
            <p
              key={option}
              className={`${selected === option && styles.selected} ${
                styles.tab
              }`}
              onClick={() => handleChoice(option)}
            >
              {option}
            </p>
          ))}

        {isBox &&
          options.map((option) => (
            <p
              key={option}
              className={`${selected === option && styles.boxSelected} ${
                styles.boxTab
              }`}
              onClick={() => handleChoice(option)}
            >
              {option}
            </p>
          ))}
      </div>
      {options.length > 1 &&
        children.length > 1 &&
        children[options.indexOf(selected)]}
    </div>
  );
};

export default Tabs;
