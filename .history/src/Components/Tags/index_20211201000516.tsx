import { Cancel, Done, Pending } from "../Icons";

interface dataProps {
  color?:
    | "red"
    | "green"
    | "blue"
    | "yellow"
    | "purple"
    | "indigo"
    | "gray"
    | "Red"
    | "Green"
    | "Blue"
    | "Yellow"
    | "Purple"
    | "Indigo"
    | "Gray";
  name: string;
  type?: "done" | "pending" | "canceled" | undefined | false;
}

const Tags: React.FC<dataProps> = ({
  color = "green",
  name = "Tag",
  type = "",
}) => {
  if (!color && !type) throw new Error("You must provide a color or type");

  const styles = {
    body: `ring-2 rounded-md w-36 text-center py-1 text-xs font-bold font-sans capitalize
    ${
      color && color.toLowerCase() === "blue"
        ? "bg-blue-100 text-blue-500  ring-blue-300"
        : color.toLowerCase() === "green"
        ? "bg-green-100 text-green-500 ring-green-300"
        : color.toLowerCase() === "red"
        ? "bg-red-100 text-red-500 ring-red-300"
        : color.toLowerCase() === "yellow"
        ? "bg-yellow-100 text-yellow-500 ring-yellow-300"
        : color.toLowerCase() === "purple"
        ? "bg-purple-100 text-purple-500 ring-purple-300"
        : color.toLowerCase() === "gray"
        ? "bg-gray-100 text-gray-500 ring-gray-300"
        : color.toLowerCase() === "indigo" &&
          "bg-indigo-100 text-indigo-500 ring-indigo-300"
    } 
    ${
      type && type.toLowerCase() === "done"
        ? "text-green-500"
        : type.toLowerCase() === "pending"
        ? "text-yellow-500"
        : type.toLowerCase() === "canceled" && "text-red-500"
    }`,
    text: `text-${color}-500 bg-${color}-100 `,
  };

  return (
    <div className={styles.body}>
      <p className={styles.text}> {name}</p>
      {type && type.toLowerCase() === "done" && <Done className="w-6 h-6" />}
      {type && type.toLowerCase() === "pending" && (
        <Pending className="w-6 h-6" />
      )}
      {type && type.toLowerCase() === "canceled" && (
        <Cancel className="w-6 h-6" />
      )}
    </div>
  );
};
export default Tags;
