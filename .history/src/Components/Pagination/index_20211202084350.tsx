import React from "react";

const Pagination: React.FC = () => {
  const styles = {
    body: "bg-white relative px-3 h-20 shadow rounded-2xl text-gray-400",
  };
  return (
    <div className={styles.body}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-2">1</div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
