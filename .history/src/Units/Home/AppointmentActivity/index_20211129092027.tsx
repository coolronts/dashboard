import Card from "../../../Components/Card";
import CardHeader from "../../../Components/CardHeader";
import MultiLine from "../../../Components/Charts/MultiLine";
import Tabs from "../../../Components/Tabs";

const AppointmentActivity: React.FC = () => {
  return (
    <div>
      <Card
        isHeader={true}
        title="Appointment Activity"
        subtitle="Last 30 days"
        Element={
          <div className=" mb-4">
            <Tabs options={["All-Time", "Last 7 Days", "Last 30 Days"]}>
              <MultiLine />
              <MultiLine />
              <MultiLine />
            </Tabs>
          </div>
        }
      />
    </div>
  );
};

export default AppointmentActivity;
