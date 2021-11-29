var faker = require("faker");
const status = ["paid", "unpaid", "processing"];

const createRandomData = async (n: number) => {
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

export default createRandomData;
