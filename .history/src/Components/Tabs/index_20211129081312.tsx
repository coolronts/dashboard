interface dataProps {
  options: string[];
}

const styles = {
  body: "flex text-md text-gray-400 pt-1 items-center",
  selected: "border-blue-500 font-bold text-gray-600",
  tab: "mr-12 px-4 border-b-4 hover:border-blue-500 border-transparent cursor-pointer"
  
}
const Tabs: React.FC<dataProps> = ({ options }) => {
  return (
    <div className={styles.body}>
      <p
        onClick={() => handleChoice("Appointments")}
        className={`${choice === "Appointments" && styles.selected} ${styles.tab}  `}
      >
        Appointments
      </p>
      <p
        onClick={() => handleChoice("Invoices")}
        className={`${
          choice === "Invoices" && "border-blue-500 font-bold text-gray-600"
        } mr-12 px-4 border-b-4 hover:border-blue-500 border-transparent cursor-pointer`}
      >
        Invoices
      </p>
    </div>;

  );
};

export default Tabs;
