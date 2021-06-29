
const express = require('express')
const picks = require('../usecases/picks')

const router = express.Router()

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