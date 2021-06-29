
const express = require('express')
const users = require('../usecases/users')

const router = express.Router()

router.get('/', async(req, res) => {
    try{
        const allUsers = await users.getAll()

        res.json({
            success: true,
            message: "all users",
            data: {
                users: allUsers
            }
        })
    } catch(error) {
        res.status(400)
        res.json({
            success: false,
            message: 'Error at get all users',
            error: error.message
        })
    }
})

router.get('/:id', async(req, res) => {
    try{
        const user = await users.findById(req.params.id)

        res.json({
            success: true,
            message: "user finded",
            data: {
                users: user
            }
        })
    } catch(err){
        res.status(400)
        res.json({
            success: false,
            message: 'Error at get user',
            error: error.message
        })
    }

})

router.post('/', async(req, res) => {
    try{
        const userCreated = await users.signUp(req.body)

        console.log(userCreated)
        res.json({
            success: true,
            message: 'user created',
            data:{
                koder: userCreated
            }
        })
    } catch (err){
        res.status(400)
        res.json({
            success: false,
            message: 'Error at create user',
            error: err.message
        })
    }

})

module.exports = router