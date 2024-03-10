const db = require('../models');
const FavoriteMovie = db.FavoriteMovie;

exports.addFavoriteMovie = async (req, res) => {
  try {
    const { userId, movieId } = req.body;

    const existingFavorite = await FavoriteMovie.findOne({ where: { userId, movieId } });
    if (existingFavorite) {
      return res.status(400).json({ message: "This movie is already in the user's favorites list" });
    }
    await FavoriteMovie.create({ userId, movieId });
    res.status(201).json({ message: "Movie added to favorites successfully" });
  } catch (error) {
    console.error('Error on adding movie to favorites:', error);
    res.status(500).json({ message: "Internal error when adding movie to favorites" });
  }
};

exports.getUserFavorites = async (req, res) => {
  try {
    const { userId } = req.params;

    const FavoriteMovies = await FavoriteMovie.findAll({ where: { userId } });

    res.status(200).json(FavoriteMovies);
  } catch (error) {
    console.error("Error on getting user's favorite movies:", error);
    res.status(500).json({ message: "Internal error on getting user's favorite movies" });
  }
};

exports.removeFavoriteMovie = async (req, res) => {
  try {
    const { userId, movieId } = req.body;

    const favoriteMovie = await FavoriteMovie.findOne({ where: { userId, movieId } });
    if(!favoriteMovie) {
      return res.status(404).json({ message: "The movie is not among the favorites list" });
    }

    await favoriteMovie.destroy();

    res.status(200).json({ message: "Movie was succesfully removed from favorites" });
  } catch (error) {
    console.error(500).json({ message: "Internal error when trying to remove movie from favorites" });
  }
};