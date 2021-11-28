var faker = require('faker')

const createRandomData = async (n: number) => {
  let data = []
  for (let i = 0; i < n; i++) {
    await data.push({
      date: faker.date.soon(),
      price: faker.commerce.price()
    })
  }
  console.log(data)
  return data
}

export default createRandomData