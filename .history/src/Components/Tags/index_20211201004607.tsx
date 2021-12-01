import { Cancel, Done, Pending, Unpaid } from "../Icons";

interface dataProps {
  color?:
    | undefined
    | false
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
  type?: "done" | "pending" | "canceled" | "unpaid" | undefined | false;
}

const Tags: React.FC<dataProps> = ({
  color = "green",
  name = "Tag",
  type = undefined,
}) => {
  if (!color && !type) throw new Error("You must provide a color or type");
  if (color && type) throw new Error("You must provide a color or type");

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
    icon: "text-base font-900 rounded-full text-white",
  };

  return (
    <div className={styles.body}>
      {type && type.toLowerCase() === "done" && (
        <Done className={`${styles.icon} bg-green-500`} />
      )}
      {type && type.toLowerCase() === "pending" && (
        <Pending className={`${styles.icon} bg-green-500`} />
      )}
      {type && type.toLowerCase() === "canceled" && (
        <Cancel className={`${styles.icon} bg-red-500`} />
      )}
      {type && type.toLowerCase() === "unpaid" && (
        <Unpaid className={`${styles.icon} bg-red-500`} />
      )}

      <p className={styles.text}> {name}</p>
    </div>
  );
};
export default Tags;
