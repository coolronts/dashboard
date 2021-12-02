import { ArrowRight, ArrowLeft } from "../Icons";
import { useState } from "react";
type props = {
  items: number;
  showItems: number;
};
const Pagination: React.FC<props> = ({ items, showItems }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const styles = {
    body: "bg-white relative px-3 h-20 shadow rounded-2xl text-gray-400",
    icon: "rounded-full bg-gray-200 p-1 text-4xl shadow cursor-pointer",
    item: `rounded-full bg-gray-200 flex items-center justify-center h-8 w-8 text-lg cursor-pointer shadow`,
  };

  return (
    <div className={styles.body}>
      <div className="flex justify-between items-center h-full text-xl font-sans font-semibold">
        <ArrowLeft className={`${styles.icon} "text-4xl"`} />
        {[...Array(items / showItems)].map((item, i) => (
          <span
            className={`${styles.item} ${
              currentPage - 1 === i ? "bg-blue-500 text-white" : ""
            } `}
            key={i}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </span>
        ))}

        <ArrowRight className={styles.icon} />
      </div>
    </div>
  );
};

export default Pagination;
