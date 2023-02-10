// const { Sequelize } = require('sequelize');
// const db = require("../dbConnect");

// var Movies = db.define('movies', {
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     img: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     year: {
//         type: Sequelize.NUMBER,
//         allowNull: false
//     },
//     genre: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     rating: {
//         type: Sequelize.NUMBER,
//         allowNull: false
//     }
// }, {
//     freezeTableName: true,
//     timestamps: false
// });

// Movies.removeAttribute('id')

// module.exports = Movies

///////////////////////////////////////////////////////

module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define("movie", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.NUMBER,
            allowNull: false
        }
    })

    return Movie
}