
const Picks = require('../models/picks')

function create(pick) {

    return Picks.create(pick)

}

module.exports = {create}
