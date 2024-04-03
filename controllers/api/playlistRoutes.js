const router = require('express').Router();
const  Playlist  = require('../../models/Song');
const SpotifyWebApi = require('node-spotify-api');

module.exports = Playlist