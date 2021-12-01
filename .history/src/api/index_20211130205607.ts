import generator from "../Utils/avatar";

var faker = require("faker");

const status = ["paid", "unpaid", "processing"];
const countries = [
  {
    name: "USA",
    country_code: "US",
  },
  {
    name: "Germany",
    country_code: "DE",
  },
  {
    name: "France",
    country_code: "FR",
  },
  {
    name: "Bangladesh",
    country_code: "BD",
  },
  {
    name: "Norway",
    country_code: "NO",
  },
];

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const getRandomStatus = () => {
  return status[getRandomNumber(0, status.length)];
};

export const getRandomCountrySales = () => {
  const data: { country: string; sales: number; country_code: string }[] = [];
  countries.map((country, i) =>
    data.push({
      country: country.name,
      country_code: country.country_code,
      sales: getRandomNumber(0, 10000),
    })
  );
  return data;
};

export const getTopServices = async (n: number) => {
  let data = [];
  for (let i = 0; i < n; i++) {
    await data.push({
      position: faker.name.jobTitle(),
      price: "Nok " + faker.commerce.price(),
    });
  }
  return data;
};

export const getTopStaff = async (n: number) => {
  let data = [];
  for (let i = 0; i < n; i++) {
    await data.push({
      name: faker.name.findName(),
      avatar: generator.generateRandomAvatar(),
      price: faker.commerce.price(),
    });
  }
  return data;
};

export const getInvoiceData = async (n: number) => {
  let data = [];
  for (let i = 0; i < n; i++) {
    await data.push({
      date: faker.date.past().toLocaleDateString(),
      id: faker.datatype.number(),
      amount: faker.datatype.number(),
      status: status[Math.floor(Math.random() * 3)],
    });
  }
  return data;
};

export const getUpcomingData = async (n: number) => {
  let data = [];
  for (let i = 0; i < n; i++) {
    await data.push({
      month: faker.date.month(),
      meet: faker.name.jobTitle(),
      time: faker.time.recent(),
      price: faker.commerce.price(),
      wage: faker.commerce.price(),
    });
  }
  return data;
};
