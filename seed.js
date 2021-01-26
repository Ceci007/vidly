const { Genre } = require("./models/genre");
const { Movie } = require("./models/movie");
const mongoose = require("mongoose");
const config = require("config");

const data = [
  {
    name: "Comedy",
    movies: [
      { title: "Airplane", numberInStock: 5, dailyRentalRate: 2, movieImg: "https://github.com/Ceci007/images/blob/master/img-vidly/Airplane.jpg?raw=true" },
      { title: "The Hangover", numberInStock: 10, dailyRentalRate: 2, movieImg: "https://github.com/Ceci007/images/blob/master/img-vidly/hangover.jpg?raw=true" },
      { title: "Wedding Crashers", numberInStock: 15, dailyRentalRate: 2, movieImg: "https://github.com/Ceci007/images/blob/master/img-vidly/WeddingCrashers.jpg?raw=true" }
    ]
  },
  {
    name: "Action",
    movies: [
      { title: "Die Hard", numberInStock: 5, dailyRentalRate: 2, movieImg: "https://github.com/Ceci007/images/blob/master/img-vidly/DieHard.jpg?raw=true" },
      { title: "Terminator", numberInStock: 10, dailyRentalRate: 2, movieImg: "https://github.com/Ceci007/images/blob/master/img-vidly/Terminator.jpg?raw=true" },
      { title: "The Avengers", numberInStock: 15, dailyRentalRate: 2, movieImg: "https://github.com/Ceci007/images/blob/master/img-vidly/TheAvengers.jpg?raw=true" }
    ]
  },
  {
    name: "Romance",
    movies: [
      { title: "The Notebook", numberInStock: 5, dailyRentalRate: 2, movieImg: "https://github.com/Ceci007/images/blob/master/img-vidly/notebook.jpg?raw=true" },
      { title: "When Harry Met Sally", numberInStock: 10, dailyRentalRate: 2, movieImg: "https://github.com/Ceci007/images/blob/master/img-vidly/WhenHarryMetSally.jpg?raw=true" },
      { title: "Pretty Woman", numberInStock: 15, dailyRentalRate: 2, movieImg: "https://github.com/Ceci007/images/blob/master/img-vidly/prettywoman.jpg?raw=true" }
    ]
  },
  {
    name: "Thriller",
    movies: [
      { title: "The Sixth Sense", numberInStock: 5, dailyRentalRate: 2, movieImg: "https://github.com/Ceci007/images/blob/master/img-vidly/TheSixthSense.jpg?raw=true" },
      { title: "Gone Girl", numberInStock: 10, dailyRentalRate: 2, movieImg: "https://github.com/Ceci007/images/blob/master/img-vidly/GoneGirl.jpg?raw=true" },
      { title: "The Others", numberInStock: 15, dailyRentalRate: 2, movieImg: "https://github.com/Ceci007/images/blob/master/img-vidly/TheOthers.jpg?raw=true" }
    ]
  }
];

async function seed() {
  await mongoose.connect(config.get("db"));

  await Movie.deleteMany({});
  await Genre.deleteMany({});

  for (let genre of data) {
    const { _id: genreId } = await new Genre({ name: genre.name }).save();
    const movies = genre.movies.map(movie => ({
      ...movie,
      genre: { _id: genreId, name: genre.name }
    }));
    await Movie.insertMany(movies);
  }

  mongoose.disconnect();

  console.info("Done!");
}

seed();
