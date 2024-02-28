require('dotenv').config();

const express = require("express");
const cors = require("cors");

const app = express();

const db = require('./app/models');

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Sincronización de la bbdd con los modelos definidos. force: true es para que sequelize elimine todas las tablas existentes
// y las vuelva a crear cada vez que se sincronice la bbdd.
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync DB');
})

// db.sequelize.sync(); PARA PRODUCCIÓN

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to movies and series application" });
});

// routes
require('./app/routes/auth.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});