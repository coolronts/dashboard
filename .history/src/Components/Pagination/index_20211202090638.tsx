import { ArrowRight, ArrowLeft } from "../Icons";
type props = {
  items: number;
  showItems: number;
};
const Pagination: React.FC<props> = ({ items, showItems }) => {
  const styles = {
    body: "bg-white relative px-3 h-20 shadow rounded-2xl text-gray-400",
    icon: "rounded-full bg-gray-200 p-1 text-4xl",
    item: "rounded-full bg-gray-200 flex items-center justify-center h-10 w-10 text-xl",
  };

  return (
    <div className={styles.body}>
      <div className="flex justify-between items-center h-full text-xl font-sans font-semibold">
        <ArrowLeft className={`${styles.icon} "text-4xl"`} />
        {[...Array(items / showItems)].map((item, i) => (
          <span className={styles.item}>{i + 1}</span>
        ))}

        <ArrowRight className={styles.icon} />
      </div>
    </div>
  );
};

export default Pagination;
