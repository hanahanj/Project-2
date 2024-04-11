const router = require('express').Router();
const  Song  = require('../../models/Song');
const SpotifyWebApi = require('node-spotify-api');


const spotifyAPI = new SpotifyWebApi({
   id: '45f5e31473b44c1a99c12f16809df5ef',
   secret: '027548624d7445e3b1c364c456b4ed11'

});

router.get('/:id', async (req, res) => {
    try {
      const songData = await Song.findByPk(req.params.id);
      if(songData){
      console.log(songData);
      res.status(201).json({ message: 'Song data logged successfully', songData });
      } else {
        res.status(404).json({ message: 'Song not found' });
      }
    //   res.render('song', songData);
    } catch (error) {
      console.error('Error searching for song:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


// /api/songs
router.post('/', async (req, res) => {
    const { songName } = req.body;
    try {
      const data = await spotifyAPI.search({ type: 'track', query: songName, limit: 1 });
      if (data.tracks.items.length > 0) {
        const track = data.tracks.items[0];
        const song = await Song.create({
          trackName: track.name,
          artistName: track.artists[0].name,
          albumName: track.album.name,
          playlist_id: 1
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


  router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      // Delete the song based on ID
      const deletedCount = await Song.destroy({
        where: { id: id }
      });
      if (deletedCount === 0) {
        return res.status(404).json({ message: 'Song not found' });
      }
      return res.status(200).json({ message: 'Song deleted successfully' });
    } catch (error) {
      console.error('Error deleting song:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
  module.exports= router
//  above post route leveraged from chatgpt