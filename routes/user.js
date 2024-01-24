const express = require("express")
const router = express.Router()


const user = { email: 'joshuaombasa@gmail.com', password: 'yd3FLBxZkdDkFLv' }



router.post("", (req, res) => {
    const { email, password } = req.body
    if (email !== user.email) {
        return res.status(400).json({ message: "Invalid credentails" })
    } else if (password !== user.password) {
        return res.status(400).json({ message: "Invalid credentails" })
    }

    res.status(200).json({ message: 'Login successful' })
})

module.exports = router 