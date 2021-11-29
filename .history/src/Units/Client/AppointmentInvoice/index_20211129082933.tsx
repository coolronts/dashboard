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
            <div className=" mb-4 font-semibold font-sans capitalize">
              <div className="px-6 mb-3">
                <Tabs options={["Appointments", "Invoices"]}>
                  <AppointmentsTable />
                  <InvoiceTable />
                </Tabs>
                <hr className="mb-6" />
                <DropDown items={["All Time", "Last 7 days", "Last 30 days"]} />
              </div>
              {/* <div className="mt-12 px-8">
                <div className={styles.table}>
                  {choice === "Appointments" && <AppointmentsTable />}
                  {choice === "Invoices" && <InvoiceTable />}
                </div>
              </div> */}
            </div>
          }
        />
      </div>
    </>
  );
};

export default AppointmentInvoice;
