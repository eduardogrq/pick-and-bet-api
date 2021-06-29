require('dotenv').config()

const server = require('./src/server')
const dbConnect = require('./src/lib/db')

dbConnect()
    .then(() => {
        console.log('DB Connected')
        server.listen(process.env.PORT, () => {
            console.log(`server listening in port: ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log('error: ', error)
    })