require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')

const app = express()

app.use(express.json())

app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses', ctrl.addHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)

massive(CONNECTION_STRING).then(database => {
    app.set('db', database)
    app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))
})
