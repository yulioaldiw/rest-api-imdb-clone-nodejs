const express = require("express")
const cors = require("cors")

const app = express()

var corOptions = {
    origin: "https://localhost:5000"
}

// routers
const routers = require("./routes/movieRouter")
app.use("/api/movies", routers)

// middleware
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// testing api
app.get('/', (req, res) => {
    res.json({ message: "woyyyyyy" })
})

// port
const PORT = process.env.PORT || 8080

// server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})