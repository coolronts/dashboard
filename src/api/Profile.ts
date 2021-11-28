import generator from '../Utils/avatar'

var faker = require('faker')


const createRandomData = () => {
  const  data = {
    name: faker.name.findName(),
    gender: faker.name.gender(),
    email: faker.internet.email(),
    avatar: generator.generateRandomAvatar(),
  }
  
  console.log(data)
  return data
}

export default createRandomData