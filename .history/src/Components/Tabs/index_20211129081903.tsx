import { useState, useEffect } from "react";
interface dataProps {
  options: string[];
}

const styles = {
  body: "flex text-md text-gray-400 pt-1 items-center",
  selected: "border-blue-500 font-bold text-gray-600",
  tab: "mr-12 px-4 border-b-4 hover:border-blue-500 border-transparent cursor-pointer",
};
const Tabs: React.FC<dataProps> = ({ options }) => {
  const [selected, setSelected] = useState<string>(options[0]);
  const handleChoice = (option: string) => {
    setSelected(option);
  }
  return (
    <div className={styles.body}>
      {options.map((option) => (
        <p key = { option } className={`${selected === "Appointments" && styles.selected} ${styles.tab}`}
          onClick={() => handleChoice(option)}>
          Appointments
        </p>
      )}
      
      
      <p
        onClick={() => handleChoice("Invoices")}
        className={`${selected === "Invoices" && styles.selected} ${styles.tab}`}
      >
        Invoices
      </p>
    </div>
  );
};

export default Tabs;
