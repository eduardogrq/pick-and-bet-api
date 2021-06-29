const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({

    name: {
        type: String,
        minLenght: 2,
        maxLenght: 100,
        required: true
    },
    lastName: {
        type: String,
        minLenght: 2,
        maxLenght: 100,
        required: true
    },
    phoneNumber: {
        type: Number,
        minLenght: 10,
        maxLenght: 12,
        required: true
    },
    email: {
        type: String,
        match: /.+@.+\..+/,
        maxLenght: 100
    },
    age: {
        type: Number,
        min: 18,
        minLenght: 2,
        maxLenght: 3,
        required: true
    },
    password: {
        type: String,
        minLenght: 1,
        require: true
    },
    role: {
        type: [String],
        minLenght: 1,
        required: true
    }

})

const model = mongoose.model('users', UsersSchema)

module.exports = model