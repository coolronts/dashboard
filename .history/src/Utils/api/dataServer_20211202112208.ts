import generator from "../avatar";

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

export const getUserInfo = async (n: number) => {
  let data = [];
  for (let i = 0; i < n; i++) {
    await data.push({
      name: faker.name.findName(),
      gender: faker.name.gender(),
      email: faker.internet.email(),
      avatar: generator.generateRandomAvatar(),
    });
  }
  return data;
};

export const getSchedule = async (n: number) => {
  let data = [];
  for (let i = 0; i < n; i++) {
    await data.push({
      avatar: generator.generateRandomAvatar(),
      name: faker.name.findName(),
      schedule: [
        {
          day: "5 Sunday",
          time: [
            {
              period: "Closed",
              status: "Busy",
            },
          ],
        },
        {
          day: "6 Monday",
          time: [
            {
              period: "8:00 - 10:00",
              status: "Pending",
            },
          ],
        },
        {
          day: "7 Tuesday",
          time: [
            {
              period: "8:00 - 10:00",
              status: "Busy",
            },
          ],
        },
        {
          day: "8 Wednesday",
          time: [
            {
              period: "8:00 - 10:00",
              status: "Pending",
            },
            {
              period: "12:00 - 14:00",
              status: "Busy",
            },
          ],
        },
        {
          day: "9 Thursday",
          time: [
            {
              period: "8:00 - 10:00",
              status: "Busy",
            },
          ],
        },
        {
          day: "10 Friday",
          time: [
            {
              period: "8:00 - 10:00",
              status: "Busy",
            },
          ],
        },
        {
          day: "11 Saturday",
          time: [
            {
              period: "8:00 - 10:00",
              status: "Busy",
            },
            {
              period: "12:00 - 14:00",
              status: "Closed",
            },
          ],
        },
      ],
    });
  }
  return data;
};
