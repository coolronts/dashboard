import Card from "../../../Components/Card";
import CardHeader from "../../../Components/CardHeader";
import MultiColumn from "../../../Components/Charts/MultiColumn";
import { useState } from "react";

const RecentSales: React.FC = () => {
  const days = ["All-Time", "Last 7 Days", "Last 30 Days"];
  const [optionsDays, setOptionsDays] = useState(2);
  const handleDays = (i: number) => {
    setOptionsDays(i);
  };
  return (
    <div className="mb-6">
      <Card
        isHeader={true}
        title="Recent Sales"
        subtitle="Last 30 days"
        Element={
          <div className=" mb-4 font-semibold font-sans capitalize">
            <div className="px-6 mb-3">
              <div className="flex justify-between text-md text-gray-400 pt-1 items-center">
                <CardHeader title="Recent Sales" subtitle="Last 30 days" />
                <div className="flex opacity-50">
                  {days.map((item, i) => (
                    <p
                      key={i}
                      onClick={() => handleDays(i)}
                      className={`${
                        optionsDays === i ? "bg-gray-200" : "bg-transparent"
                      } px-2 py-1 ring-1 ring-gray-300 cursor-pointer hover:shadow-lg shadow  text-gray-700 ml-4 rounded text-md font-semibold font-sans tracking-tight`}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <MultiColumn />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default RecentSales;
