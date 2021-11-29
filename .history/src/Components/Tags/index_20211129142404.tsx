interface dataProps {
  color: "red" | "green" | "blue" | "yellow" | "purple" | "indigo" | "gray";
  name: string;
}

const Tags: React.FC<dataProps> = ({ color, name }) => {
  const styles = {
    body: `ring-2 rounded-md w-36 text-center py-1 text-xs font-bold font-sans
    ${
      color === "blue"
        ? "bg-blue-100 text-blue-500  ring-blue-300"
        : color === "green"
        ? "bg-green-100 text-green-500 ring-green-300"
        : color === "red"
        ? "bg-red-100 text-red-500 ring-red-300"
        : color === "yellow"
        ? "bg-yellow-100 text-yellow-500 ring-yellow-300"
        : color === "purple"
        ? "bg-purple-100 text-purple-500 ring-purple-300"
        : color === "gray"
        ? "bg-gray-100 text-gray-500 ring-gray-300"
        : color === "indigo" && "bg-indigo-100 text-indigo-500 ring-indigo-300"
    }
     `,
    text: `text-${color}-500 bg-${color}-100 `,
  };
  return (
    <div className={styles.body}>
      <p className={styles.text}> {name}</p>
    </div>
  );
};
export default Tags;
