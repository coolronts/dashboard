var faker = require('faker')

const createRandomData = async (n: number) => {
  let data = []
  for (let i = 0; i < n; i++) {
    await data.push({
      date: faker.date.month(),
      meet: faker.name.jobTitle(),
      time: faker.time.recent(),
      price: faker.commerce.price(),
      wage: faker.commerce.price()
    })
  }
  console.log(data)
  return data
}

export default createRandomData