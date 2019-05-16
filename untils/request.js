const axios = require('axios')
const config = require('./config')
  const {baseURL} = config
const instance = axios.create({
    baseURL
})

module.exports = instance