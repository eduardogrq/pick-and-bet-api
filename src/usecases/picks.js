
const Picks = require('../models/picks')

function getAll() {
    return Picks.find()
}

function findById(id) {
    return Picks.findById(id)
}

function create(pick) {

    return Picks.create(pick)

}

module.exports = {
    create,
    getAll,
    findById
}
