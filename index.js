var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
    id: '45f5e31473b44c1a99c12f16809df5ef',
    secret: '027548624d7445e3b1c364c456b4ed11'

})

spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response.tracks.items[0].album);
  })
  .catch(function(err) {
    console.log(err);
  });


// spotify
//   .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
//   .then(function(data) {
//     console.log(data); 
//   })
//   .catch(function(err) {
//     console.error('Error occurred: ' + err); 
//   });