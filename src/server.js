
const express = require('express')
const cors = require('cors')
const usersRoter = require('./routers/users')
const picksRouter = require('./routers/picks')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', usersRoter)
app.use('/forecasts', picksRouter)

module.exports = app
