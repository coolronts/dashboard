import generator from '../Utils/avatar'

var faker = require('faker')


const createRandomData = async () => {
  let data = []
  await data.push({
    position: faker.name.findName(),
    gender: faker.name.gender(),
    email: faker.internet.email(),
    avatar: generator.generateRandomAvatar(),
  })
  
  console.log(data)
  return data
}

export default createRandomData