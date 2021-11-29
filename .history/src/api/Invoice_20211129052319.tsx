var faker = require("faker");

const createRandomData = async (n: number) => {
  let data = [];
  for (let i = 0; i < n; i++) {
    await data.push({
      date: faker.date.past().toLocaleDateString(),
      id: faker.random.number(),
      amount: faker.random.number(),
    });
  }
  return data;
};

export default createRandomData;
