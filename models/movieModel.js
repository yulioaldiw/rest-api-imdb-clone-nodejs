module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define("movie", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            // autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    return Movie
}