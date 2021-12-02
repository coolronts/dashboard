import { ArrowLeft, ArrowRight, Calendar } from "../Icons";

import { Card } from "../index";

const CalendarButton: React.FC = () => {
  const styles = {
    icon: "text-4xl p-1 bg-gray-200 rounded-full font-bold hover:bg-gray-300 hover:text-gray-600 cursor-pointer",
    calendarIcon:
      "text-2xl ml-2 font-bold hover:text-gray-600 cursor-pointer",
  };
  return (
    <div className="text-2xl font-semibold font-sans ">
      <Card type="secondary">
        <div className="flex justify-content py-1  items-center">
          <ArrowLeft className={styles.icon} />
          <Calendar className={styles.calendarIcon} />
          <h1 className="px-12">CalendarButton</h1>
          <ArrowRight className={styles.icon} />
        </div>
      </Card>
    </div>
  );
};

export default CalendarButton;
