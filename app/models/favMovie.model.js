module.exports = (sequelize, Sequelize) => {
  const FavoriteMovie = sequelize.define("FavoriteMovie", {
    movieId: {
      type: Sequelize.INTEGER,
      AllowNull: false
    }
  });

  return FavoriteMovie;
};