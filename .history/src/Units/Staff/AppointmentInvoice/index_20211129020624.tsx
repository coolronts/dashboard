import Card from "../../../Components/Card";

const AppointmentInvoice: React.FC = () => {
  return (
    <>
      <div className="mt-6">
        <Card
          Element={
            <div className=" mb-4 font-semibold font-sans capitalize">
              <div className="px-6 mb-3">
                <div className="flex text-md text-gray-400 pt-1 items-center">
                  <p className="mr-12 px-4  border-b-4 border-blue-500 hover:border-transparent cursor-pointer">
                    Appointments
                  </p>
                  <p>Invoices</p>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </>
  );
};

export default AppointmentInvoice;
