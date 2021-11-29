var faker = require("faker");
const status = ["paid", "unpaid", "processing"];

const createRandomData = async (n: number) => {
  let random = Math.floor(Math.random() * 3);
  let data = [];
  for (let i = 0; i < n; i++) {
    await data.push({
      date: faker.date.past().toLocaleDateString(),
      id: faker.datatype.number(),
      amount: faker.datatype.number(),
      status: status[random],
    });
  }
  return data;
};

export default createRandomData;
