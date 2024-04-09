const sequelize = require('../config/connection');
const  Playlist  = require('../models/playlist');
const  Song = require('../models/Song')
const  User = require('../models/User')
const playlistData = require('./playlistData.json');
const songData = require('./songData.json')
const userData = require('./userData.json')


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

const user = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
 
 

 for (const playlist of playlistData) {
  await Playlist.create({
    ...playlist,
    user_id : userData[Math.floor(Math.random() * userData.length)].id
  }
    
  );
}



  for (const song of songData) {
   await Song.create({
      ...song,
      // Attach a random playlist ID to each song
      playlist_id: playlistData[Math.floor(Math.random() * playlistData.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
