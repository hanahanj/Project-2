const router = require('express').Router();
const {Playlist, Song} = require('../../models/')

router.get('/:id', async (req, res) => {
    try {
      const playlistData = await Playlist.findByPk(req.params.id, {
        include: [Song]
      });
      if(playlistData){
      console.log(playlistData);
      res.status(201).json({ message: 'Playlist data retrieved successfully', playlistData});
      } else {
        res.status(404).json({ message: 'Playlist not found' });
      }
    } catch (error) {
      console.error('Error searching for playlist:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

router.post('/', async (req, res) =>{
    try{
        const PlaylistData = await Playlist.create({
           playlist_name: req.body.playlist_name,
           tag: req.body.tag,
        })
        if (PlaylistData){
        console.log(PlaylistData);
        res.status(201).json({ message: 'Playlist data created successfully', PlaylistData});
        } else {
        res.status(404).json({ message: 'Error creating playlist' });
         }
        } catch {
        // console.error('Error creating playlist:', error);
        // res.status(500).json({ message: 'Internal server error' });
          }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      // Delete the playlist based on ID
      const deletedCount = await Playlist.destroy({
        where: { id: id }
      });
      if (deletedCount === 0) {
        return res.status(404).json({ message: 'Playlist not found' });
      }
      return res.status(200).json({ message: 'Playlist deleted successfully' });
    } catch (error) {
      console.error('Error deleting playlist:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
module.exports = router