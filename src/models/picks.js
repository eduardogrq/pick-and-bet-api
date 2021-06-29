
const mongoose = require('mongoose')

const PicksSchema = new mongoose.Schema({

    createdDate:{
        type: Date,
        default: Date.now,
        required: true
    },
    category: {
        type: String,
        minLenght: 2,
        maxLenght: 30,
        enum: ['Box', 'Soccer', 'Baseball', 'Basketball', 'Football'],
        required: true
    },
    event: {
        type: String,
        minLenght: 2,
        maxLenght: 100,
        required: true,
    },
    forecast: {
        type: String,
        minLenght: 2,
        maxLenght: 100,
        required: true,
    }

})

const model = mongoose.model('picks', PicksSchema)

module.exports = model