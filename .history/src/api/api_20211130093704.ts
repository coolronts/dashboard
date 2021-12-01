import {
  getInvoiceData,
  getRandomCountrySales,
  getTopServices,
  getTopStaff,
} from "./index";

export const salesApi = async () => {
  return await getRandomCountrySales();
};

export const topServicesApi = async (n: number) => {
  return await getTopServices(n);
};

export const topStaffApi = async (n: number) => {
  return await getTopStaff(n);
};

export const invoiceDataApi = async (n: number) => {
  return await getInvoiceData(n);
};
