const Sequelize = require("sequelize");

var db = new Sequelize(
    'db_imdb_clone',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = db;