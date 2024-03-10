const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// En principio no planeo poner roles, pero prefiero dejar el código por si fuera necesario más adelante
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.FavoriteMovie = require("../models/favMovie.model.js")(sequelize, Sequelize);
// db.role = require("../models/role.model.js")(sequelize, Sequelize);

// Definir relaciones entre los modelos
db.user.hasMany(db.FavoriteMovie);
db.FavoriteMovie.belongsTo(db.user);

// db.role.belongsToMany(db.user, {
//   through: "user_roles"
// });
// db.user.belongsToMany(db.role, {
//   through: "user_roles"
// });

// db.ROLES = ["user", "admin", "moderator"];

module.exports = db;