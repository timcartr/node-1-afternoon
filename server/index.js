const express = require('express')
const bodyParser = require('body-parser')
const messages = require
('./controllers/messages_controller.js')
const mc = require( __dirname + '/controllers/messages_controller');


const app = express()

app.use(bodyParser.json())

app.get('/api/messages', messages.read)
app.post('/api/messages', messages.create)
app.put('/api/messages/:id', messages.update)
app.delete('/api/messages/:id', messages.delete)

const port = 3005;
app.listen ( port, () => {console.log(`Server listening on port ${port}`) })