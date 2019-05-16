const request = require('../untils/request')

const findUserName = async ({ username }) => {
    const { data } = await require({
          method: 'GET',
          url: '/users',
          params: {
              username
          }
      })
      return data[0]
  }
const findNickName = async ({ nickname }) => {
        const {
            data
        } = await require({
            method: 'GET',
            url: '/users',
            params: {
                nickname
            }
        })
        return data[0]
    }
const create = async ({username, password,nickname}) => {
      const { data } = await require({
          method: 'POST',
          url: '/users',
          params: {
              username,
              password,
              nickname
          }
      })
      return data
  }

  module.exports = {
      create,
      findUserName,
      findNickName
  }