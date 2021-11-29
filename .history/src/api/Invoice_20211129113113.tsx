var faker = require("faker");
const status = ["paid", "unpaid", "processing", "paid", "processing"];

const createRandomData = async (n: number) => {
  let data = [];
  for (let i = 0; i < n; i++) {
    await data.push({
      date: faker.date.past().toLocaleDateString(),
      id: faker.random.number(),
      amount: faker.random.number(),
      status: status[faker.random.number(status.length - 1)],
    });
  }
  return data;
};

export default createRandomData;
