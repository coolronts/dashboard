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

const getRandomCountrySales = () => {
  return (data = countris.map((country) => {
    return {
      name: country.name,
      country_code: country.country_code,
      sales: getRandomNumber(0, 10000),
    };
  }));
};
