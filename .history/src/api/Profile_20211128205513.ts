var faker = require('faker')

import generator from '../Utils/avatar'

const createRandomData = async (n: number) => {
  let data = []
  data.push({
    position: faker.name.findName(),
    email: faker.internet.email(),
    avatar: generator.generateRandomAvatar(),

  })
  
  console.log(data)
  return data
}

export default createRandomData