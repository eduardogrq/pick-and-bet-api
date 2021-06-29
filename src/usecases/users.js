
const Users = require('../models/users')
const bcrypt = require('../lib/bcrypt')

function getAll() {
    return Users.find()
}

function findById(id) {
    return Users.findById(id)
}

async function signUp({name, lastName, phoneNumber, email, age, password, role}) {
    
    // Checking if user already exists
    const userFound = await Users.findOne( {email} )

    if(userFound){
        throw new Error('User already exists')
    }

    // If role is empty, assign a user role by default
    if(!role){
        role = 'user'
    }

    const encriptedPassword = await bcrypt.hash(password)

    return Users.create({
        name,
        lastName,
        phoneNumber,
        email,
        age,
        password: encriptedPassword,
        role
    })

}

module.exports = {
    getAll,
    findById,
    signUp
}