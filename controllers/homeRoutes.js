const router = require('express').Router();
const  Playlist  = require('../models/Playlist')
const Song = require('../models/Song')
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const playlistData = await Playlist.findAll({
      // attributes: { exclude: ['password'] },
      include: [Song],
      order: [['playlist_name', 'ASC']],
    });
    // const songData = await Song.findAll({
    //   order: [['trackName', 'ASC']]
    // })
    const playlists = playlistData.map((project) => project.get({ plain: true }));
   // const songs = songData.map((project) => project.get({ plain: true}));
   console.log(playlists)
    res.render('homepage', {
      playlists,
      //songs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/', async (req, res) => {
//   try {


//     res.render('homepage', {
    
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/playlist/', async (req, res) => {
  try {
   const playlistData = await Playlist.findByPk(1)

   //const playlists = playlistData.map(playlist => playlist.get({plain: true}))

   const playlist = playlistData.get({plain: true})
    console.log(playlist)

    res.render("playlist", {playlist})

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

// leveraged from unit 14 section 23