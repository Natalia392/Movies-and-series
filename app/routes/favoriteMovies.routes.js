module.exports = app => {
  const favoriteMoviesController = require('../controllers/favorites.controller');

  const express = require('express');
  const router = express.Router();

  router.post(`/add`, favoriteMoviesController.addFavoriteMovie);

  router.get(`/user/:userId`, favoriteMoviesController.getUserFavorites);

  router.delete(`/remove`, favoriteMoviesController.removeFavoriteMovie);

  app.use('/api/favorites', router);
};


// const express = require('express');
// const router = express.Router();
// const favoriteMoviesController = require('../controllers/favorites.controller');

// router.post(`/favorites/add`, favoriteMoviesController.addFavoriteMovie);

// router.get(`/favorites/user/:userId`, favoriteMoviesController.getUserFavorites);

// router.delete(`/favorites/remove`, favoriteMoviesController.removeFavoriteMovie);

// module.exports = router;