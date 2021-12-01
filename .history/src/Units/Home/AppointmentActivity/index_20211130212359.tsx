import { Card, Tabs } from "../../../Components";

import MultiLine from "../../../Components/Charts/MultiLine";

const AppointmentActivity: React.FC = () => {
  return (
    <div>
      <Card
        isHeader={true}
        title="Appointment Activity"
        subtitle="Last 30 days"
      >
        <Tabs
          horizontalPosition="end"
          isBox={true}
          options={["All-Time", "Last 7 Days", "Last 30 Days"]}
        >
          {[...Array(3)].map((_, index) => (
            <div key={index}>
              <MultiLine />
            </div>
          ))}
        </Tabs>
      </Card>
    </div>
  );
};

export default AppointmentActivity;
