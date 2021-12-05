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
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const styles = {
    body: "bg-white relative px-3 h-16 shadow rounded-2xl text-gray-400",
    icon: "rounded-full bg-gray-200 p-1 text-4xl shadow cursor-pointer",
    item: `rounded-full bg-gray-200 flex items-center justify-center h-8 w-8 text-lg cursor-pointer shadow mx-2`,
    row: "flex items-center h-full text-xl font-sans font-semibold",
    currentPage: "bg-blue-400 text-white",
  };
  let pageIncrementBtn = null;
  if (totalPage > maxPageNumberLimit) {
    pageIncrementBtn = <p> &hellip; </p>;
  }
  let pageDecrementBtn = null;
  if (totalPage < minPageNumberLimit) {
    pageDecrementBtn = <p> &hellip; </p>;
  }

  useEffect(() => {
    setTotalPage(Math.ceil(items / showItems));
    console.log(minPageNumberLimit, maxPageNumberLimit, currentPage);
    if (currentPage + 1 > maxPageNumberLimit + 1) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
    if (currentPage <= minPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  }, [items, showItems, currentPage, minPageNumberLimit, minPageNumberLimit]);

  return (
    <div className={styles.body}>
      <div className={styles.row}>
        <ArrowLeft
          className={`${styles.icon} "text-4xl"`}
          onClick={() => {
            currentPage > 1 && setCurrentPage(currentPage - 1);
          }}
        />
        {pageDecrementBtn}
        {[...Array(totalPage)].map(
          (item, i) =>
            i + 1 <= maxPageNumberLimit &&
            i + 1 > minPageNumberLimit && (
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
        {pageIncrementBtn}
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
