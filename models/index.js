const Playlist = require('./playlist');
const Song = require('./Song');
const User = require('./User');

User.hasMany(Playlist, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Playlist.belongsTo(User, {
    foreignKey: 'user_id'
});

Playlist.hasMany(Song, {
    foreignKey: 'playlist_id'
});

// Song.belongsToMany(Playlist, {
//     foreignKey: 'playlist_id'
// })

module.exports = { User, Playlist, Song }