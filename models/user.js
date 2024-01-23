const userSchema = mongoose.Schema({
    email:{type: String},
    password: {type: String},
})

module.exports = userSchema