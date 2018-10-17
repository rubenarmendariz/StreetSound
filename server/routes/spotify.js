const express = require('express');
const router = express.Router();
const User = require('../models/User');
const uploadCloud = require('../config/cloudinary.js');
const { ensureAuthenticated } = require('../middlewares/authentication');
const Show = require('../models/Show');
var SpotifyWebApi = require('spotify-web-api-node');

var clientId = '6aa3ca0c9b964a70830005632cc51605',
    clientSecret = '4ec2bead74944707af6c0e7a05ada5a9';

var spotifyApi = new SpotifyWebApi({
  clientId : clientId,
  clientSecret : clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err);
});
router.post('/profile/silmilar',(req, res, next) =>{
    // res.send(req.body.artist);
    spotifyApi.searchArtists(req.body.artist)
      .then(data => {
        //console.log(data.body.artists.items)
        res.render('artists', {artists: data.body.artists.items})
        //console.log(data.body.artists.items)// ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'
      })
      .catch(err => {
       console.log(err) // ----> 'HERE WE CAPTURE THE ERROR'
      })
  })

  router.get('/similar', (req, res) => {
    // spotifyApi.getArtistAlbums(req.params.artistId)
    // .then((data) => {
    //   console.log(data.body.items)
    //     let albums = data.body.items;
    //     //sconsole.log(albums[0].name)
    //     res.render('albums', {albums})
    // })
    // .catch(error => {
    //   console.log(error)
    // });
    spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3')
  .then(function(data) {
    console.log('Artist information', data);
  }, function(err) {
    console.error('efwefwef');
  });

  });
  
  
module.exports = router;