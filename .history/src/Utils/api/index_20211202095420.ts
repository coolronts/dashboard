import {
  getInvoiceData,
  getRandomCountrySales,
  getSchedule,
  getTopServices,
  getTopStaff,
  getUpcomingData,
  getUserInfo,
} from "./dataServer";

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

export const getUserApi = async (n: number = 1) => {
  return await getUserInfo(n);
};

export const getScheduleApi = async (n: number) => {
  return await getSchedule(n);
};
