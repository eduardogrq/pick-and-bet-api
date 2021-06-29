
const Picks = require('../models/picks')

function getAll() {
    return Picks.find()
}

function create(pick) {

    return Picks.create(pick)

}

module.exports = {
    create,
    getAll
}
