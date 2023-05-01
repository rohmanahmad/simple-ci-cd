const serverIP = '127.0.0.1'
const serverPort = '3000'

const express = require('express')
const app = express()

app.get('/', (request, response, next) => {
    response.json({status: 200, message: 'Success'})
})

app.listen(serverPort, serverIP, function () {
    console.log('Server Started...')
})