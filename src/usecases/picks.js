
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

function deleteById(id) {
    return Picks.findByIdAndDelete(id)
}

module.exports = {
    create,
    getAll,
    findById,
    deleteById
}
