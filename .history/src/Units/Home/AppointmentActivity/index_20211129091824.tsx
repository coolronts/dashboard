import Card from "../../../Components/Card";
import CardHeader from "../../../Components/CardHeader";
import MultiLine from "../../../Components/Charts/MultiLine";
import Tabs from "../../../Components/Tabs";
import { useState } from "react";

const AppointmentActivity: React.FC = () => {
  const days = ["All-Time", "Last 7 Days", "Last 30 Days"];
  return (
    <div>
      <Card
        isHeader={true}
        title="Appointment Activity"
        subtitle="Last 30 days"
        Element={
          <div className=" mb-4 font-semibold font-sans capitalize">
            <div className="mb-3">
              <div className="flex justify-between text-md text-gray-400 pt-1 items-center">
                <div className="flex opacity-50">
                  <Tabs options={days}>
                    <MultiLine />
                    <MultiLine />
                    <MultiLine />
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default AppointmentActivity;
