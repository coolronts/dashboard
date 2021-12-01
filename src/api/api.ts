import {
  getInvoiceData,
  getRandomCountrySales,
  getTopServices,
  getTopStaff,
  getUpcomingData,
} from "./index";

//FIXME: Create Profile API

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

export const getUpcomingApi = async (n: number) => {
  return await getUpcomingData(n);
};
