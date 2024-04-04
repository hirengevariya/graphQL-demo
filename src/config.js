module.exports = {
  mongoDB: (process.env.PROD) ? 'mongodb://localhost:27017/moviesdb' : 'mongodb://localhost:27017/moviesdb',
  serverAddress: `http://localhost:3000`,
};