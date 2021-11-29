var faker = require("faker");

const createRandomData = async (n: number) => {
  let data = [];
  for (let i = 0; i < n; i++) {
    await data.push({
      position: faker.name.jobTitle(),
      price: "Nok " + faker.commerce.price(),
    });
  }
  return data;
};

export default createRandomData;
