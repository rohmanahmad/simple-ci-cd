const app = require('./index')

const serverIP = '127.0.0.1'
const serverPort = process.env.APP_PORT || '3000'

app.listen(serverPort, serverIP)
