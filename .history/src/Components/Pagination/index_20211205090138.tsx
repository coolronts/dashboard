import { ArrowLeft, ArrowRight } from "../Icons";
import { useEffect, useState } from "react";

//FIXME: Pagination Number needs to be Overflowed

type props = {
  items: number;
  showItems: number;
};
const Pagination: React.FC<props> = ({ items, showItems }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [pageNumberLimit, setPageNumberLimit] = useState<number>(0);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [decrementHellip, setDecrementHellip] = useState(false);
  const [incrementHellip, setIncrementHellip] = useState(false);

  const styles = {
    body: "bg-white relative px-3 h-16 shadow rounded-2xl text-gray-400",
    icon: "rounded-full bg-gray-200  text-4xl shadow cursor-pointer min-w-max min-h-max",
    item: `rounded-full bg-gray-200 flex items-center justify-center h-8 w-8 text-lg cursor-pointer shadow mx-2`,
    row: "flex items-center h-full text-xl font-sans font-semibold px-2",
    numberRows: "flex w-full items-center",
    currentPage: "bg-blue-400 text-white",
    hellip: "mx-2",
  };
  if (pageNumberLimit === 0) setPageNumberLimit(showItems);

  useEffect(() => {
    setTotalPage(Math.ceil(items / showItems));
    if (currentPage + 1 > maxPageNumberLimit + 1) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
    if (currentPage <= minPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
    if (minPageNumberLimit >= 1) {
      setDecrementHellip(true);
    } else {
      setDecrementHellip(false);
    }
    if (totalPage > maxPageNumberLimit) {
      setIncrementHellip(true);
    } else {
      setIncrementHellip(false);
    }
  }, [
    items,
    showItems,
    currentPage,
    maxPageNumberLimit,
    minPageNumberLimit,
    decrementHellip,
    incrementHellip,
    totalPage,
    pageNumberLimit,
  ]);

  return (
    <div className={styles.body}>
      <div className={styles.row}>
        <ArrowLeft
          className={`${styles.icon} "text-4xl"`}
          onClick={() => {
            currentPage > 1 && setCurrentPage(currentPage - 1);
          }}
        />
        <p
          className={`${styles.hellip} ${
            decrementHellip ? "visible" : "invisible"
          }`}
        >
          {" "}
          &hellip;{" "}
        </p>
        <div className={styles.numberRows}>
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
        </div>
        <p
          className={`${styles.hellip} ${
            incrementHellip ? "visible" : "invisible"
          }`}
        >
          &hellip;
        </p>
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
