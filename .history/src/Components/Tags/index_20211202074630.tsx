import { Cancel, Done, Pending, Unpaid } from "../Icons";

interface dataProps {
  color:
    | "red"
    | "green"
    | "blue"
    | "yellow"
    | "purple"
    | "indigo"
    | "grey"
    | "black"
    | "white";
  name: string;
  icon?: "done" | "pending" | "canceled" | "unpaid" | null;
}

const Tags: React.FC<dataProps> = ({ color = "", name = "Tag", icon = "" }) => {
  if (!color) throw new Error("You must provide a color");
  if (!name) throw new Error("You must provide a name");

  const styles = {
    body: `flex justify-center items-center rounded-xl w-28 h-10 text-center text-xs font-bold font-sans capitalize
    ${
      color && color === "blue"
        ? "bg-blue-100 text-blue-500"
        : color === "green"
        ? "bg-green-100 text-green-500"
        : color === "red"
        ? "bg-red-100 text-red-500"
        : color === "yellow"
        ? "bg-yellow-100 text-yellow-500"
        : color === "purple"
        ? "bg-purple-100 text-purple-500"
        : color === "gray"
        ? "bg-gray-100 text-gray-500"
        : color === "indigo" && "bg-indigo-100 text-indigo-500"
    }`,
    text: `text-${color}-500 bg-${color}-100 px-1 text-sm`,
    icon: `text-2xl p-0.5 rounded-full text-white bg-${color}-400`,
  };

  return (
    <div className={styles.body}>
      {icon && icon === "done" && <Done className={styles.icon} />}
      {icon && icon === "pending" && <Pending className={styles.icon} />}
      {icon && icon === "canceled" && <Cancel className={styles.icon} />}
      {icon && icon === "unpaid" && <Unpaid className={styles.icon} />}

      <p className={styles.text}> {name}</p>
    </div>
  );
};
export default Tags;
