const express = require("express")
const cors = require("cors")

const app = express()

const port = 3000

app.use(express.json())
app.use(cors())

const {yatchs} = require('./data/data')

const {hostYatchs} = require('./data/data')

const user = { email: 'joshuaombasa@gmail.com', password: 'yd3FLBxZkdDkFLv' }

app.get("/api/yatchs", (req, res) => {
    res.status(200).json(yatchs)
    // res.status(400).json({message : "No boats available"})
})

app.get("/api/yatch/:id", (req, res) => {
    const { id } = req.params
    const selectedYatch = yatchs.filter(yatch => yatch.id === id)
    res.status(200).json(selectedYatch)
    // res.status(400).json({message : "No boat available"})

})

app.get("/api/host/yatchs", (req, res) => {
    res.status(200).json(hostYatchs)
    // res.status(400).json({message : "No boats available"})
})

app.post("/api/login", (req, res) => {
    const { email, password } = req.body
    if (email !== user.email) {
        return res.status(400).json({ message: "Invalid credentails" })
    } else if (password !== user.password) {
        return res.status(400).json({ message: "Invalid credentails" })
    }

    res.status(200).json({message: 'Login successful'})
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})