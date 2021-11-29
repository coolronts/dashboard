import AppointmentsTable from "./AppointmentsTable";
import Card from "../../../Components/Card";
import DropDown from "../../../Components/DropDown";
import InvoiceTable from "./InvoicesTable";
import Tabs from "../../../Components/Tabs";

const AppointmentInvoice: React.FC = () => {
  const styles = {
    table: `bg-white mt-6 w-full divide-solid divide-y-2 divide-opacity-60 divide-gray-300 text-gray-700`,
  };

  return (
    <>
      <div className="mt-6">
        <Card
          Element={
            <div className="px-8  mb-4">
              <Tabs options={["Appointments", "Invoices"]}>
                <AppointmentsTable />
                <InvoiceTable />
              </Tabs>
            </div>
          }
        />
      </div>
    </>
  );
};

export default AppointmentInvoice;
