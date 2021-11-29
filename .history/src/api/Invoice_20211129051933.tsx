var faker = require("faker");

const createRandomData = () => {
  const data = {
    date: faker.date.past().toLocaleDateString(),
    id: faker.random.number(),
    amount: faker.random.number(),
  };
  return data;
};

export default createRandomData;
