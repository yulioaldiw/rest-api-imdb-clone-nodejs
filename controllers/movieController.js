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

const getMovies = async (req, res) => {
    let movies = await Movie.findAll()
    res.Status(200).send(movies)
}

const getMovieById = async (req, res) => {
    let id = req.params.id
    let movie = await Movie.findOne({ where: { id: id } })
    res.Status(200).send(movie)
}

const updateMovieById = async (req, res) => {
    let id = req.params.id
    let movie = await Movie.update(req.body, { where: { id: id } })
    res.Status(200).send(movie)
}

const deleteMovie = async (req, res) => {
    let id = req.params.id
    await Movie.destroy({ where: { id: id } })
    res.Status(200).send(`Movie with id [ ${id} ] has been deleted`)
}

const getPublishedMovie = async (req, res) => {
    let id = req.params.id
    const movies = await Movie.findAll({ where: { id: id } })
    res.Status(200).send(movies)
}

module.exports = {
    addMovie,
    getMovies,
    getMovieById,
    updateMovieById,
    deleteMovie,
    getPublishedMovie
}