const { Movie, validate } = require("../models/movie");
const { Genre } = require("../models/genre");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const moment = require("moment");
const mongoose = require("mongoose");
const express = require("express");
const fileupload = require("express-fileupload");
const router = express.Router();

module.exports = function(app) {
  app.use(fileupload());
}

router.get("/", async (req, res) => {
  const movies = await Movie.find()
    .select("-__v")
    .sort("name");
  res.send(movies);
});

router.post("/img", (req, res) => {
  if(req.files === null) {
    return res.status(400).json({ message: "No file uploaded." });
  }

  const movieImg = req.files.movieImg;
  movieImg.mv(`${__dirname}/vidly-client/public/img/${movieImg.name}`, err => {
    if(err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ filename: movieImg.name, filepath: `/img/${movieImg.name}` });
  });
});

router.post("/", [auth], async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send("Invalid genre.");

  const movie = new Movie({
    title: req.body.title,
    genre: {
      _id: genre._id,
      name: genre.name
    },
    numberInStock: req.body.numberInStock,
    dailyRentalRate: req.body.dailyRentalRate,
    movieImg: req.body.movieImg, 
    publishDate: moment().toJSON()
  });
  await movie.save();

  res.send(movie);
});

router.put("/:id", [auth], async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send("Invalid genre.");

  const movie = await Movie.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      genre: {
        _id: genre._id,
        name: genre.name
      },
      numberInStock: req.body.numberInStock,
      dailyRentalRate: req.body.dailyRentalRate,
      movieImg: req.body.movieImg
    },
    { new: true }
  );

  if (!movie)
    return res.status(404).send("The movie with the given ID was not found.");

  res.send(movie);
});

router.delete("/:id", [auth, admin], async (req, res) => {
  const movie = await Movie.findByIdAndRemove(req.params.id);

  if (!movie)
    return res.status(404).send("The movie with the given ID was not found.");

  res.send(movie);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const movie = await Movie.findById(req.params.id).select("-__v");

  if (!movie)
    return res.status(404).send("The movie with the given ID was not found.");

  res.send(movie);
});

module.exports = router;
