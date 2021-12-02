import { ArrowRight, ArrowLeft } from "../Icons";

const Pagination: React.FC = () => {
  const styles = {
    body: "bg-white relative px-3 h-20 shadow rounded-2xl text-gray-400",
  };
  return (
    <div className={styles.body}>
      <div className="flex justify-between items-center h-full text-xl font-sans font-bold">
        <ArrowLeft />
        <span className="ml-2">1</span>
        <ArrowRight />
      </div>
    </div>
  );
};

export default Pagination;
