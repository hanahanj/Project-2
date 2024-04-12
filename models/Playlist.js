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
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id'
            }
        },
        trackName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        artistName: {
            type: DataTypes.STRING,
            
        },
        trackName2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        artistName2: {
            type: DataTypes.STRING,
            
        }


    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'playlist',
      }
)

module.exports = Playlist