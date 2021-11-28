import generator from '../Utils/avatar'

var faker = require('faker')

const createRandomData = async (n: number) => {
  let data = []
  for (let i = 0; i < n; i++) {
    data.push({
      name: await faker.name.findName(),
      avatar: await generator.generateRandomAvatar(),
      price: await faker.commerce.price()
    })
  }
  return data
}

export default createRandomData