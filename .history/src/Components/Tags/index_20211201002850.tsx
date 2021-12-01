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
  type = undefined,
}) => {
  if (!color && !type) throw new Error("You must provide a color or type");

  const styles = {
    body: `flex justify-center items-center rounded-xl w-28 py-2 text-center py-1 text-xs font-bold font-sans capitalize
    ${
      color && color.toLowerCase() === "blue"
        ? "bg-blue-100 text-blue-500"
        : color.toLowerCase() === "green"
        ? "bg-green-100 text-green-500"
        : color.toLowerCase() === "red"
        ? "bg-red-100 text-red-500"
        : color.toLowerCase() === "yellow"
        ? "bg-yellow-100 text-yellow-500"
        : color.toLowerCase() === "purple"
        ? "bg-purple-100 text-purple-500"
        : color.toLowerCase() === "gray"
        ? "bg-gray-100 text-gray-500"
        : color.toLowerCase() === "indigo" && "bg-indigo-100 text-indigo-500"
    }`,
    text: `text-${color}-500 bg-${color}-100 px-1`,
  };

  return (
    <div className={styles.body}>
      {type && type.toLowerCase() === "done" && (
        <Done className="text-base font-900 rounded-full bg-green-500 text-white" />
      )}
      {type && type.toLowerCase() === "pending" && (
        <Pending className="w-6 h-6" />
      )}
      {type && type.toLowerCase() === "canceled" && (
        <Cancel className="w-6 h-6" />
      )}

      <p className={styles.text}> {name}</p>
    </div>
  );
};
export default Tags;
