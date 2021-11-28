import generator from '../Utils/avatar'

var faker = require('faker')

const createRandomData = (n:number) => {
  let data = []
  for (let i = 0; i < n; i++) {
    data.push({
      name: faker.name.findName(),
      avatar: generator.generateRandomAvatar(),
      nok: faker.commerce.price()
    })
  }
}