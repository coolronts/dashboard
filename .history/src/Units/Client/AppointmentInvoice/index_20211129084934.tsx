import AppointmentsTable from "./AppointmentsTable";
import Card from "../../../Components/Card";
import InvoiceTable from "./InvoicesTable";
import Tabs from "../../../Components/Tabs";

const AppointmentInvoice: React.FC = () => {
  const styles = {
    body: "mt-6",
  };

  return (
    <div className={styles.body}>
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
  );
};

export default AppointmentInvoice;
