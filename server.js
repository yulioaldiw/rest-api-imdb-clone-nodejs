// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const app = express();
// const dbConnect = require("./dbConnect");
// const movieRoutes = require("./routes/movies");

// dbConnect.sync();

// app.use(express.json());
// app.use(cors());

// app.use("/api", movieRoutes)

// const port = process.env.PORT || 8080;
// app.listen(port, () => console.log(`Listening on port ${port}...`))

////////////////////////////////////////////////////////

const express = require("express")
const cors = require("cors")

const app = express()

var corOptions = {
    origin: "https://localhost:5000"
}

// middleware

app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// testing api

app.get('/', (req, res) => {
    res.json({message: "woyyyyyy"})
})

// port

const PORT = process.env.PORT || 8080

// server

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})