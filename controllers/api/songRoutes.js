const router = require('express').Router();
const { Song } = require('../../models');
const SpotifyWebApi = require('node-spotify-api');


const spotifyAPI = new SpotifyWebApi({
    clientId: '45f5e31473b44c1a99c12f16809df5ef',
    clientSecret: '027548624d7445e3b1c364c456b4ed11'

})

router.post('/songs', async (req, res) => {
    const { songName } = req.body;
    try {
      const data = await spotifyAPI.search({ type: 'track', query: songName, limit: 1 });
      if (data.tracks.items.length > 0) {
        const track = data.tracks.items[0];
        const song = await Song.create({
          trackName: track.name,
          artistName: track.artists[0].name,
          albumName: track.album.name,
          popularity: track.popularity
        });
        res.status(201).json({ message: 'Song data logged successfully', song });
      } else {
        res.status(404).json({ message: 'Song not found' });
      }
    } catch (error) {
      console.error('Error searching for song:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
//  above post route leveraged from chatgpt