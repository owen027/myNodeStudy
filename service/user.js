const request = require('../untils/request')


const create = async ({  
    username,
    password,
    nickname}) => {

      const data = await request({
          methods:'POST',
          url:'/users',
          data: {
            username,
            password,
            nickname
          }
      })

      return data
    }


const findUserName = async ({  username }) => {

      const data = await request({
          methods:'GET',
          url:'/users',
          params: {  username  }
      })

      return data[0]
    }

const findNickName = async ({  nickname }) => {

    const data = await request({
        methods:'GET',
        url:'/users',
        params: {  nickname  }
    })

    return data[0]
    }
  

module.exports = {
    create,
    findUserName,
    findNickName
}