import { ArrowLeft, ArrowRight, Calendar } from "../Icons";

import { Card } from "../index";

type props = {
  text?: string;
};
const CalendarButton: React.FC<props> = ({ text = "9-15 Sep,2020" }) => {
  const styles = {
    icon: "text-3xl p-1 text-gray-400 bg-gray-200 rounded-full font-bold hover:bg-gray-300 hover:text-gray-600 cursor-pointer",
    calendarIcon:
      "text-xl ml-4 text-gray-300 hover:text-gray-600 cursor-pointer",
  };
  return (
    <div className="font-semibold font-sans h-18 bg-white px-8 flex justify-center items-center rounded-2xl shadow ">
      <ArrowLeft className={styles.icon} />
      <div className="flex px-8 font-sans items-center">
        <Calendar className={styles.calendarIcon} />
        <h1 className="px-4 text-xl text-gray-500 ">{text}</h1>
      </div>
      <ArrowRight className={styles.icon} />
    </div>
  );
};

export default CalendarButton;