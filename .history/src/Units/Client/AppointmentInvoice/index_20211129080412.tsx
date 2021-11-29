import AppointmentsTable from "./AppointmentsTable";
import Card from "../../../Components/Card";
import DropDown from "../../../Components/DropDown";
import InvoiceTable from "./InvoicesTable";
import { useState } from "react";

const AppointmentInvoice: React.FC = () => {
  const [choice, setChoice] = useState("Appointments");

  const styles = {
    table: `bg-white mt-6 w-full divide-solid divide-y-2 divide-opacity-60 divide-gray-300 text-gray-700`,
  };
  const handleChoice = (e: any) => {
    setChoice(e);
  };
  return (
    <>
      <div className="mt-6">
        <Card
          Element={
            <div className=" mb-4 font-semibold font-sans capitalize">
              <div className="px-6 mb-3">
                <div className="flex text-md text-gray-400 pt-1 items-center">
                  <p
                    onClick={() => handleChoice("Appointments")}
                    className={`${
                      choice === "Appointments" &&
                      "border-blue-500 font-bold text-gray-600"
                    } mr-12 px-4 border-b-4 hover:border-blue-500 border-transparent cursor-pointer`}
                  >
                    Appointments
                  </p>
                  <p
                    onClick={() => handleChoice("Invoices")}
                    className={`${
                      choice === "Invoices" &&
                      "border-blue-500 font-bold text-gray-600"
                    } mr-12 px-4 border-b-4 hover:border-blue-500 border-transparent cursor-pointer`}
                  >
                    Invoices
                  </p>
                </div>
                <hr className="mb-6" />
                <DropDown items={["All Time", "Last 7 days", "Last 30 days"]} />
              </div>
              <div className="mt-12 px-8">
                <div className={styles.table}>
                  {choice === "Appointments" && <AppointmentsTable />}
                  {choice === "Invoices" && <InvoiceTable />}
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
