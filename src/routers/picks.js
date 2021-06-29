
const express = require('express')
const picks = require('../usecases/picks')

const router = express.Router()

router.get('/', async(req, res) => {
    try{
        const allPicks = await picks.getAll()

        res.json({
            success: true,
            message: 'all Forecast',
            data:{
                allPicks
            }
        })
    } catch(err){
        res.status(400),
        res.json({
            success: false,
            message: 'Could not register',
            error: err.message
        })
    }
})

router.post('/', async(req, res) => {
    try{
        const newPick = await picks.create(req.body)

        res.json({
            success: true,
            message: 'Forecast created',
            data:{
                newPick
            }
        })

    } catch(err){
        res.status(400),
        res.json({
            success: false,
            message: 'Could not register',
            error: err.message
        })
    }
    
})

module.exports = router