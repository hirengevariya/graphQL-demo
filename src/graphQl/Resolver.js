const Movie = require('../model/movie').Movies;

const resolvers = {
  Query: {
    getMovies: async (parent, args) => {
      return Movie.find({});
    },

    getMovie: async (parent, args) => {
      return Movie.findById(args.id);
    }
  },

  Mutation: {
    addMovie: (parent, args) => {
      let newMovie = new Movie({
        name: args.name,
        producer: args.producer,
        rating: args.rating,
      });
      return newMovie.save();
    },

    updateMovie: async (parent, args) => {
      try {
        const updatedMovie = await Movie.findByIdAndUpdate(args.id, {
          name: args.name,
          producer: args.producer,
          rating: args.rating
        }, { new: true });

        if (!updatedMovie) {
          throw new Error("Movie not found");
        }

        return updatedMovie;
      } catch (error) {
        console.error('Something went wrong when updating the movie:', error);
        throw error;
      }
    },

    deleteMovie: async (parent, args) => {
      try {
        const deletedMovie = await Movie.findByIdAndDelete(args.id);
        return deletedMovie;
      } catch (error) {
        throw new Error('Failed to delete!, Please try again');
      }
    }
  }
}

module.exports = resolvers;