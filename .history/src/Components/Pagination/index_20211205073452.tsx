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
        {[...Array(totalPage)].map(
          (item, i) =>
            (currentPage - i + 1 === 0 ||
              totalPage === i + 1 ||
              i === 0 ||
              currentPage === i + 1) && (
              <>
                <span
                  className={`${styles.item} ${
                    currentPage - 1 === i && styles.currentPage
                  } `}
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </span>
              </>
            )
        )}

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
