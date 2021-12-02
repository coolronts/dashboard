import { ArrowLeft, ArrowRight } from "../Icons";

import { Card } from "../index";

const CalendarButton: React.FC = () => {
  return (
    <div className="text-xl font-bold font-sans ">
      <Card type="secondary">
        <div className="flex justify-content items-center">
          <ArrowLeft />
          <h1 className="px-12">CalendarButton</h1>;
          <ArrowRight />
        </div>
      </Card>
    </div>
  );
};

export default CalendarButton;
