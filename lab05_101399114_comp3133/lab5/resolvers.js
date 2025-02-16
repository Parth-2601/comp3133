const { v4: uuidv4 } = require('uuid');

let movies = [
  { id: "1", name: "Inception", director_name: "Christopher Nolan", production_house: "Warner Bros", release_date: "2010-07-16", rating: 8.8 },
  { id: "2", name: "Interstellar", director_name: "Christopher Nolan", production_house: "Paramount", release_date: "2014-11-07", rating: 8.6 },
];

const resolvers = {
  Query: {
    getAllMovies: () => movies,
    getMovieById: (_, { id }) => movies.find(movie => movie.id === id),
  },
  Mutation: {
    addMovie: (_, { name, director_name, production_house, release_date, rating }) => {
      const newMovie = { id: uuidv4(), name, director_name, production_house, release_date, rating };
      movies.push(newMovie);
      return newMovie;
    },
    updateMovie: (_, { id, name, director_name, production_house, release_date, rating }) => {
      let movie = movies.find(m => m.id === id);
      if (!movie) return null;
      if (name) movie.name = name;
      if (director_name) movie.director_name = director_name;
      if (production_house) movie.production_house = production_house;
      if (release_date) movie.release_date = release_date;
      if (rating) movie.rating = rating;
      return movie;
    },
    deleteMovie: (_, { id }) => {
      movies = movies.filter(movie => movie.id !== id);
      return `Movie with ID ${id} deleted successfully.`;
    },
  },
};

module.exports = resolvers;
