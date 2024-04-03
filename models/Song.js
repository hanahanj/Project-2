const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Song extends Model {}

Song.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        trackName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        artistName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        albumName: {
            type: DataTypes.STRING
        },


    },
    {
        sequelize,
        underscored: true,
        modelName: 'song',
      }
);

module.exports = Song