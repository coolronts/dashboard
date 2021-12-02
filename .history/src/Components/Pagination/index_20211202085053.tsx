import { ArrowRight, ArrowLeft } from "../Icons";

const Pagination: React.FC = () => {
  const styles = {
    body: "bg-white relative px-3 h-20 shadow rounded-2xl text-gray-400",
    item: "rounded-full bg-gray-200 p-1 text-4xl",
  };
  return (
    <div className={styles.body}>
      <div className="flex justify-between items-center h-full text-xl font-sans font-semibold">
        <ArrowLeft className={`${styles.item} "text-4xl"`} />
        <span className={styles.item}>1</span>
        <ArrowRight className={styles.item} />
      </div>
    </div>
  );
};

export default Pagination;
