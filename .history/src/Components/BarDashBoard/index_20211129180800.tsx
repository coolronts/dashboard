import { ArrowUpRight } from "../Icons";
import BarChart from "../Charts/BarChart";
import Card from "../Card";

const BarDashBoard: React.FC<{ color?: string; size?: string }> = ({
  color = "#F6AC2F",
  size = "sm",
}) => {
  return (
    <div className="w-full">
      <Card>
        <div className={`${size === "sm" ? "px-0" : "px-16"} font-semibold font-sans capitalize`}>
          <div className="px-1 ">
            <div className="flex justify-between text-md text-gray-400 items-center">
              <div className="text-left font-sans w-full">
                <p className="text-6xl font-semibold" style={{ color: color }}>5</p>
                <p className="text-gray-600 my-1 text-sm">Total Cancelled</p>
                <p className="flex items-center">
                  <div className="bg-gray-400 rounded-full p-1 mr-1">
                    <ArrowUpRight className="text-white text-lg font-bold" />
                  </div>
                  35.65%
                </p>
              </div>
              <BarChart width={170} color={color} />
            </div>
          </div>
        </div>
      </Card>
        
          
        
    
    </div>
  );
};

export default BarDashBoard;
