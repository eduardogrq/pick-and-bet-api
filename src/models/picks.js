
const mongoose = require('mongoose')
const moment = require('moment-timezone')

// Definiendo la zona horaria de méxico
const dateMexico = moment.tz(Date.now(), "America/Mexico_City");

const PicksSchema = new mongoose.Schema({

    createdDate:{
        type: Date,
        // default: dateMexico,
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