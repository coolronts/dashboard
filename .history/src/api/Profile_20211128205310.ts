var faker = require('faker')

const createRandomData = async (n: number) => {
  let data = []
  data.push({
    position: faker.name.full(),
    price: faker.commerce.price()
  })
  
  console.log(data)
  return data
}

export default createRandomData