'use strict'

const express = require('express')
const app = express()

app.get('/', (request, response, next) => {
  response.json({ status: 200, message: 'Success' })
})

module.exports = app
