import generator from '../Utils/avatar'

var faker = require('faker')

const createRandomData = async (n: number) => {
  let data = []
  for (let i = 0; i < n; i++) {
    await data.push({
      name: faker.name.findName(),
      avatar: generator.generateRandomAvatar(),
      price: faker.commerce.price()
    })
  }
  return data
}

export default createRandomData