import { ArrowLeft, ArrowRight } from "../Icons";

import { Card } from "../index";

const CalendarButton: React.FC = () => {
  const styles = {
    icon: "text-2xl p-1 bg-gray-200 rounded-full font-bold hover:bg-gray-300 hover:text-gray-600 cursor-pointer",
  };
  return (
    <div className="text-xl font-semibold font-sans ">
      <Card type="secondary">
        <div className="flex justify-content  items-center">
          <ArrowLeft className={styles.icon} />
          <h1 className="px-12">CalendarButton</h1>;
          <ArrowRight />
        </div>
      </Card>
    </div>
  );
};

export default CalendarButton;
