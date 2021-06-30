
const express = require('express')
const picks = require('../usecases/picks')
const moment = require('moment-timezone')

const dateMexico = moment.tz(Date.now(), "America/Mexico_City")

const router = express.Router()

router.get('/', async(req, res) => {
    
    try{
        console.log(dateMexico)
        const allPicks = await picks.getAll()

        res.json({
            success: true,
            message: 'all Forecast',
            data:{
                forecasts: allPicks
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

router.get('/:id', async(req, res) => {
    try{
        const forecastFinded = await picks.findById(req.params.id)

        res.json({
            success: true,
            message: "forecast finded",
            data: {
                forecast: forecastFinded
            }
        })

    } catch(err) {
        res.status(400),
        res.json({
            success: false,
            message: 'Could not find the forecast',
            error: err.message
        })
    }
})

router.post('/', async(req, res) => {
    try{
        const createdDate = dateMexico
        const {category, event, forecast} = req.body
        const newPick = await picks.create({
            category, event, forecast, createdDate
        })

        res.json({
            success: true,
            message: 'Forecast created',
            data:{
                pick: newPick.createdDate
            }
        })

    } catch(err){
        res.status(400),
        res.json({
            success: false,
            message: 'Could not create the forecast',
            error: err.message
        })
    }
    
})

router.delete('/:id', async(req, res) => {
    try{
        const pickDeleted = await picks.deleteById(req.params.id)

        res.json({
            success: true,
            message: 'Forecast deleted',
            data: {
                pick: pickDeleted
            }
        })
    } catch(err){
        res.status(400),
        re.json({
            success: true,
            message: 'Forecast deleted succesfuly',
            error: 'error: ', err
        })
    }
    

})

module.exports = router