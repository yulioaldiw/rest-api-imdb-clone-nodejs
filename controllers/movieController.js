const db = require("../models")

// create main model

const Movie = db.movies

// main work

const addMovie = async (req, res) => {
    let info = {
        name: req.body.name,
        img: req.body.img,
        year: req.body.year,
        genre: req.body.genre,
        rating: req.body.rating
    }

    const movie = await Movie.create(info)
    res.status(200).send(movie)
    console.log(movie)
}