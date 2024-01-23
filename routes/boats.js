const express = require("express")
const { default: mongoose } = require("mongoose")
const boatSchema = require("../models/boat")

const router  = express.Router()

const Boat = mongoose.model('Boat', boatSchema)

router.get("", (req, res) => {

    Boat.find({})
         .then(boats => {
            res.status(200).json(boats)
         })
         .catch(error => {
            res.status(400).json(error)
         })
    
})

router.get("/:id", (req, res) => {
    Boat.findById(id)
         .then(boat => {
            res.status(200).json(boat)
         })
         .catch(error => {
            res.status(400).json(error)
         })

})