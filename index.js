require('dotenv').config()

const server = require('./src/server')
const dbConnect = require('./src/lib/db')

dbConnect()
    .then(() => {
        console.log('DB Connected')
        const port = process.env.PORT || 8080
        server.listen(port, () => {
            console.log(`server listening in port: ${process.env.PORT || 8080}`)
        })
    })
    .catch((error) => {
        console.log('error: ', error)
    })