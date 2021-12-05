import { ArrowLeft, ArrowRight } from "../Icons";
import { useEffect, useState } from "react";

//FIXME: Pagination Number needs to be Overflowed

type props = {
  items: number;
  showItems: number;
  siblings?: number;
};
const Pagination: React.FC<props> = ({ items, showItems, siblings = 1 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(10);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const styles = {
    body: "bg-white relative px-3 h-16 shadow rounded-2xl text-gray-400",
    icon: "rounded-full bg-gray-200 p-1 text-4xl shadow cursor-pointer",
    item: `rounded-full bg-gray-200 flex items-center justify-center h-8 w-8 text-lg cursor-pointer shadow mx-2`,
    row: "flex justify-between items-center h-full text-xl font-sans font-semibold",
    currentPage: "bg-blue-400 text-white",
  };

  useEffect(() => {
    setTotalPage(Math.ceil(items / showItems));
  }, [items, showItems, currentPage]);

  return (
    <div className={styles.body}>
      <div className={styles.row}>
        <ArrowLeft
          className={`${styles.icon} "text-4xl"`}
          onClick={() => {
            currentPage > 1 && setCurrentPage(currentPage - 1);
          }}
        />
        {[...Array(totalPage)].map((page, number) => {
          console.log(number + 1, maxPageNumberLimit);
          if (number + 1 < maxPageNumberLimit) {
            <span
              className={`${styles.item} ${
                currentPage === number + 1 && styles.currentPage
              } `}
              key={number}
              onClick={() => setCurrentPage(number + 1)}
            >
              {number + 1}
            </span>;
          }
        })}
        <ArrowRight
          className={styles.icon}
          onClick={() => {
            currentPage < totalPage && setCurrentPage(currentPage + 1);
          }}
        />
      </div>
    </div>
  );
};

export default Pagination;
