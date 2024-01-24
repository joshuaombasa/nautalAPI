const mongoose = require("mongoose")


const boatSchema = mongoose.Schema({
    name: {type: String},
    price: {type: Number},
    description: {type: String},
    imageUrl: {type: String},
    type: {type: String}
})

module.exports = boatSchema