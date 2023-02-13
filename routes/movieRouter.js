const movieController = require("../controllers/movieController")
const router = require("express").Router()

router.post("/addMovie", movieController.addMovie)
router.get("/allMovies", movieController.getMovies)
router.get("/published", movieController.getPublishedMovie)
router.get("/:id", movieController.getMovieById)
router.put("/:id", movieController.updateMovieById)
router.delete("/:id", movieController.deleteMovie)

module.exports = router