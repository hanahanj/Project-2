const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Playlist extends Model {}

Playlist.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        playlist_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tag: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_at: {
            type: DataTypes.STRING,
            allowNull: false
        },
        updated_at: {
            type: DataTypes.STRING,
            allowNull: false
        },


    },
    {
        sequelize,
        underscored: true,
        modelName: 'playlist',
      }
)

module.exports = Playlist