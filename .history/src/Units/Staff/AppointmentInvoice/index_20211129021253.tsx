import Card from "../../../Components/Card";
import DropDown from "../../../Components/DropDown";

const AppointmentInvoice: React.FC = () => {
  return (
    <>
      <div className="mt-6">
        <Card
          Element={
            <div className=" mb-4 font-semibold font-sans capitalize">
              <div className="px-6 mb-3">
                <div className="flex text-md text-gray-400 pt-1 items-center">
                  <p className="mr-12 px-4 border-b-4 hover:border-blue-500 border-transparent cursor-pointer">
                    Appointments
                  </p>
                  <p className="mr-12 px-4 border-b-4 hover:border-blue-500 border-transparent cursor-pointer">
                    Invoices
                  </p>
                </div>
                <hr />
                <DropDown items={["All Time", "Last 7 days", "Last 30 days"]} />
              </div>
            </div>
          }
        />
      </div>
    </>
  );
};

export default AppointmentInvoice;
