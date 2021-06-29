
const bcrypt = require('bcrypt')

function hash(plainText) {
    return bcrypt.hash(plainText, 8)
}

module.exports = {
    ...bcrypt,
    hash
}