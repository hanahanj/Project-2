const sequelize = require('../config/connection');
const  Playlist  = require('../models/playlist');

const playlistdata = require('./playlistdata.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Playlist.bulkCreate(playlistdata, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
